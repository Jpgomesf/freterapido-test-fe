import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CurrencyListComponent } from './currency-list.component';
import { CurrencyCardComponent } from '../currency-card/currency-card.component'; // Import the CurrencyCardComponent
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurrencyService } from '../services/currency.service';

describe('CurrencyListComponent', () => {
  let component: CurrencyListComponent;
  let fixture: ComponentFixture<CurrencyListComponent>;
  let currencyService: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyListComponent, CurrencyCardComponent], // Include CurrencyCardComponent in declarations
      imports: [HttpClientTestingModule],
      providers: [CurrencyService],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyListComponent);
    component = fixture.componentInstance;
    currencyService = TestBed.inject(CurrencyService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
