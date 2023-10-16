import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CurrencyService } from './currency.service';
import { of, throwError } from 'rxjs';

describe('CurrencyService', () => {
  let currencyService: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService],
    });
    currencyService = TestBed.inject(CurrencyService);
  });

  it('should fetch data', fakeAsync(() => {
    spyOn(currencyService, 'fetchData').and.callThrough();
    const mockResponse = {
      CAD: { bid: '1.2' },
      ARS: { bid: '2.3' },
      GBP: { bid: '0.8' },
    };
    spyOn(currencyService.http, 'get').and.returnValue(of(mockResponse));
    currencyService.fetchData();

    tick();

    expect(currencyService.data).toBeTruthy();
  }));


  it('should reload data', () => {
    spyOn(currencyService, 'reloadData').and.callThrough();
    currencyService.reloadData();

    expect(currencyService.data).toBeNull();
  });
});
