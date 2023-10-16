import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';

describe('Toolbarcoponent', () => {
  let fixture: ComponentFixture<ToolbarComponent>;
  let component: ToolbarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
    });

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
  });

  it('should contain a <nav> element with a <div> having class "logo"', () => {
    fixture.detectChanges();

    const navElement = fixture.debugElement.nativeElement.querySelector('nav');
    const logoDiv = fixture.debugElement.nativeElement.querySelector('nav .logo');

    expect(navElement).toBeTruthy();
    expect(logoDiv).toBeTruthy();
  });
});
