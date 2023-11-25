import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDeclinePageComponent } from './reservation-decline-page.component';

describe('ReservationDeclinePageComponent', () => {
  let component: ReservationDeclinePageComponent;
  let fixture: ComponentFixture<ReservationDeclinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDeclinePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationDeclinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
