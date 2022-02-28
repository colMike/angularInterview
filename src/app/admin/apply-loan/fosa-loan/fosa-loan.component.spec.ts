import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosaLoanComponent } from './fosa-loan.component';

describe('FosaLoanComponent', () => {
  let component: FosaLoanComponent;
  let fixture: ComponentFixture<FosaLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FosaLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FosaLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
