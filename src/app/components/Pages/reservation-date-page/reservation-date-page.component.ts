import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomsTypeServiceService } from 'src/app/services/rooms-type-service/rooms-type-service.service';
import { ReservationService } from 'src/app/services/reservation-service/reservation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation-date-page',
  templateUrl: './reservation-date-page.component.html',
  styleUrls: ['./reservation-date-page.component.css']
})
export class ReservationDatePageComponent {
  roomTypes: any = [];
  rooms: any = [];


  reservationForm: FormGroup;

  constructor(private serviceRoom: RoomsTypeServiceService, private serviceReservation: ReservationService, private router: Router) {
    this.reservationForm = new FormGroup({
      beginDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      roomType: new FormControl('')
    });

    this.serviceRoom.getRoomsType().subscribe(roomTypes => {
      this.roomTypes = roomTypes;
    })
  }

  DatesValidation() {

    let originalDate = new Date();

    let year = originalDate.getFullYear();
    let month = ('0' + (originalDate.getMonth() + 1)).slice(-2);
    let day = ('0' + originalDate.getDate()).slice(-2);

    let formatedDate = year + '-' + month + '-' + day;

    if (!this.reservationForm.value.beginDate || !this.reservationForm.value.endDate || !this.reservationForm.value.roomType) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, no deje espacios vacíos'
      });
      return false;
    }

    if (this.reservationForm.value.beginDate < formatedDate || this.reservationForm.value.endDate < formatedDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Las fechas no pueden ser menores al día de hoy'
      });
      return false;
    }

    if (this.reservationForm.value.beginDate >= this.reservationForm.value.endDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'La fecha de llegada debe ser menor a la fecha de salida'
      });

      return false;
    }

    return true;
  }

  searchRoom() {
    if (this.DatesValidation()) {
      this.serviceReservation.getRoomForReservation(this.reservationForm.value.beginDate, this.reservationForm.value.endDate, this.reservationForm.value.roomType)
        .subscribe(
          (response: any) => {
            this.rooms = response;
            const data = this.rooms;
            data.beginDate = this.reservationForm.value.beginDate;
            data.endDate = this.reservationForm.value.endDate;

            const navigationExtras = {
              queryParams: { data: JSON.stringify(data) },
            };
            this.router.navigate(['/reservation'], navigationExtras).then(() => { window.history.replaceState({}, document.title, this.router.url.split('?')[0]); });
          }, (error) => {
            if (error.status == 404) {
              this.router.navigate(['/reservation-decline'])
            }
          }
        )
    }
  }
}
