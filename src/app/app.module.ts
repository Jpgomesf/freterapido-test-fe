import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyCardComponent } from './currency-card/currency-card.component';
import { CurrencyService } from './services/currency.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CurrencyListComponent,
    CurrencyCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
