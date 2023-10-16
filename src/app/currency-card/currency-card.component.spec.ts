import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyCardComponent } from './currency-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurrencyService } from '../services/currency.service';

describe('CurrencyCardComponent', () => {
  let component: CurrencyCardComponent;
  let fixture: ComponentFixture<CurrencyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyCardComponent],
      imports: [HttpClientTestingModule],
      providers: [CurrencyService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the color to #DD4B4B if the value is less than or equal to 1.00', () => {
    const color = component.getColor('0.5');
    expect(color.color).toBe('#DD4B4B');
  });

  it('should set the color to #3C7649 if the value is less than or equal to 5.00', () => {
    const color = component.getColor('3.5');
    expect(color.color).toBe('#3C7649');
  });

  it('should set the color to #3684CB if the value is greater than 5.00', () => {
    const color = component.getColor('6.5');
    expect(color.color).toBe('#3684CB');
  });
});
