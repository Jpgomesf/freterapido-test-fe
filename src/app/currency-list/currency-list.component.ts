import { Component } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';
import { ConvertedCurrency, CurrencyInfo } from '../types/currency';

@Component({
  selector: 'currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent {
  data: ConvertedCurrency | null = {};
  loadingState: { [key: string]: boolean } = {
    CAD: true,
    ARS: true,
    GBP: true,
  };
  errorState: { [key: string]: boolean } = {
    CAD: false,
    ARS: false,
    GBP: false,
  };
  public subscription: Subscription | undefined;

  constructor(public currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.subscription = this.currencyService.data$.subscribe((data) => {
      this.data = data;
      this.loadingState = this.currencyService.loadingState;
      this.errorState = this.currencyService.errorState;
    });
  }

  getCurrencyData(currencyCode: string): CurrencyInfo | null {
    return this.data?.[currencyCode] ?? null;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
