import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDatePageComponent } from './reservation-date-page.component';

describe('ReservationDatePageComponent', () => {
  let component: ReservationDatePageComponent;
  let fixture: ComponentFixture<ReservationDatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationDatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
