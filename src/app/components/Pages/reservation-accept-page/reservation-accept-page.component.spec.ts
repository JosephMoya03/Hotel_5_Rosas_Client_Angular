import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAcceptPageComponent } from './reservation-accept-page.component';

describe('ReservationAcceptPageComponent', () => {
  let component: ReservationAcceptPageComponent;
  let fixture: ComponentFixture<ReservationAcceptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationAcceptPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationAcceptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
