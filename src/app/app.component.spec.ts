import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({ selector: 'app-toolbar', template: '' })
class MockToolbarComponent { }

@Component({ selector: 'currency-list', template: '' })
class MockCurrencyListComponent { }

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockToolbarComponent, MockCurrencyListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain app-toolbar', () => {
    const appToolbar = fixture.nativeElement.querySelector('app-toolbar');
    expect(appToolbar).toBeTruthy();
  });

  it('should contain currency-list', () => {
    const currencyList = fixture.nativeElement.querySelector('currency-list');
    expect(currencyList).toBeTruthy();
  });
});

