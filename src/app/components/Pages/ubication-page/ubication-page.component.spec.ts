import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicationPageComponent } from './ubication-page.component';

describe('UbicationPageComponent', () => {
  let component: UbicationPageComponent;
  let fixture: ComponentFixture<UbicationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
