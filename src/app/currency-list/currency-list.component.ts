import { Component } from '@angular/core';
import { ConvertedCurrency, CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent {
  data: ConvertedCurrency | null = null;
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
  private subscription: Subscription | undefined;

  constructor(public currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.subscription = this.currencyService.data$.subscribe((data) => {
      this.data = data;
    });
    this.currencyService.data$.subscribe((data) => {
      this.loadingState = this.currencyService.loadingState;
      this.errorState = this.currencyService.errorState;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
