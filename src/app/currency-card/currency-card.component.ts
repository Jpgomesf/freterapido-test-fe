import { Component, Input } from '@angular/core';
import { ConvertedCurrency, CurrencyService } from '../services/currency.service';

@Component({
  selector: 'currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent {
  @Input() currencyData: any
  @Input() title: string = '';
  @Input() error: boolean = false;
  @Input() loading: boolean = false;


  constructor(public currencyService: CurrencyService) { }

  getColor(value: string) {
    const numericValue = parseFloat(value);
    if (numericValue <= 1.00) {
      return { color: '#DD4B4B' };
    } else if (numericValue <= 5.00) {
      return { color: '#3C7649' };
    } else {
      return { color: '#3684CB' };
    }
  }
}
