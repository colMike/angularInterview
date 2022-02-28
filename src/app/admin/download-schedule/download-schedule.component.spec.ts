import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadScheduleComponent } from './download-schedule.component';

describe('DownloadScheduleComponent', () => {
  let component: DownloadScheduleComponent;
  let fixture: ComponentFixture<DownloadScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
