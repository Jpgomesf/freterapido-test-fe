import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, interval, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConvertedCurrency } from '../types/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  public data: ConvertedCurrency | null = null;
  public dataSubject = new BehaviorSubject<ConvertedCurrency | null>(null);
  public loadingState: { [key: string]: boolean } = {
    CAD: true,
    ARS: true,
    GBP: true,
  };
  public errorState: { [key: string]: boolean } = {
    CAD: false,
    ARS: false,
    GBP: false,
  };
  public lastTimeFetched: number = 0;
  public data$ = this.dataSubject.asObservable();

  constructor(public http: HttpClient) {
    this.fetchData();
    interval(180000).subscribe(() => {
      this.fetchData();
    });
  }

  reloadData() {
    localStorage.clear()
    this.data = null;
    this.dataSubject.next(null);
    this.loadingState = {
      CAD: true,
      ARS: true,
      GBP: true,
    };
    this.errorState = {
      CAD: false,
      ARS: false,
      GBP: false,
    };
    this.fetchData();
  }


  fetchData() {
    const lastDataFetchTime = localStorage.getItem('lastDataFetchTime');
    const lastData = localStorage.getItem('currency');
    const currentTime = new Date().getTime();

    if (lastDataFetchTime && currentTime - parseInt(lastDataFetchTime, 10) < 180000) {
      if (lastData) this.data = JSON.parse(lastData);
      this.dataSubject.next(this.data);
      this.lastTimeFetched = parseInt(lastDataFetchTime, 10);
      this.loadingState = {
        CAD: false,
        ARS: false,
        GBP: false,
      };
      if (!this.data?.['CADBRL']) this.errorState['CAD'] = true;
      if (!this.data?.['ARSBRL']) this.errorState['ARS'] = true;
      if (!this.data?.['GBPBRL']) this.errorState['GBP'] = true;
      return;
    }

    forkJoin({
      CAD: this.http.get<ConvertedCurrency>('https://economia.awesomeapi.com.br/last/CAD-BRL').pipe(
        catchError(() => {
          this.errorState['CAD'] = true;
          this.loadingState['CAD'] = false;
          return of(null);
        })
      ),
      ARS: this.http.get<ConvertedCurrency>('https://economia.awesomeapi.com.br/last/ARS-BRL').pipe(
        catchError(() => {
          this.errorState['ARS'] = true;
          this.loadingState['ARS'] = false;
          return of(null);
        })
      ),
      GBP: this.http.get<ConvertedCurrency>('https://economia.awesomeapi.com.br/last/GBP-BRL').pipe(
        catchError(() => {
          this.errorState['GBP'] = true;
          this.loadingState['GBP'] = false;
          return of(null);
        })
      ),
    }).subscribe((responses) => {
      this.data = {
        ...(responses.CAD || {}),
        ...(responses.ARS || {}),
        ...(responses.GBP || {}),
      };
      this.loadingState = {
        CAD: false,
        ARS: false,
        GBP: false,
      };
      this.dataSubject.next(this.data);
      localStorage.setItem('lastDataFetchTime', currentTime.toString());
      localStorage.setItem('currency', JSON.stringify(this.data));
      this.lastTimeFetched = currentTime;
    });
  }
}
