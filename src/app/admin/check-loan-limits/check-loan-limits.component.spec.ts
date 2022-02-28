import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLoanLimitsComponent } from './check-loan-limits.component';

describe('CheckLoanLimitsComponent', () => {
  let component: CheckLoanLimitsComponent;
  let fixture: ComponentFixture<CheckLoanLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckLoanLimitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckLoanLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
