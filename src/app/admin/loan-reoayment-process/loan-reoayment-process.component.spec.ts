import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanReoaymentProcessComponent } from './loan-reoayment-process.component';

describe('LoanReoaymentProcessComponent', () => {
  let component: LoanReoaymentProcessComponent;
  let fixture: ComponentFixture<LoanReoaymentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanReoaymentProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanReoaymentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
