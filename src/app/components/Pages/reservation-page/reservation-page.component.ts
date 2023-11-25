import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation-service/reservation.service';

import { dateCR } from 'src/app/Utility/dateCR';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent {

  room: any;
  numberDays: Number = 0;
  cost: Number = 0;
  costWithDiscount: Number = 0;
  client_name: string = '';
  client_lastname: string = '';
  credit_number: string = '';
  email: string = '';

  constructor(private serviceReservation: ReservationService, private ActivatedRouter: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.ActivatedRouter.queryParams.subscribe(params => {
      this.room = JSON.parse(params['data']);
    });
    this.calculateCost();
  }

  Validation() {
    if (!this.client_name || !this.client_lastname || !this.email || !this.credit_number) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, no deje espacios vacíos'
      });
      return false;
    }

    if (!this.validarEmail(this.email)) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, ingrese un correo electrónico válido'
      });
      return false;
    }

    return true;
  }

  validarEmail(email: string): boolean {
    const patron = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    return patron.test(email);
  }

  validationReservation() {
    if (this.Validation()) {
      let reservation = {
        "fK_Habitacion": this.room.pK_habitacion,
        "nombre_Cliente": this.client_name,
        "apellidos_Cliente": this.client_lastname,
        "numero_Tarjeta": this.credit_number,
        "correo": this.email,
        "fecha_Transaccion": dateCR(),
        "fecha_Inicio": this.room.beginDate,
        "fecha_Fin": this.room.endDate,
        "tarifa_Total": this.costWithDiscount
      };
      this.serviceReservation.postReservation(reservation).subscribe((reponse) => {
        Swal.fire({
          icon: 'success',
          title: 'Reserva exitosa',
          text: 'Su reserva ya ha sido registrada en nuestro sistema'
        });
        const navigationExtras = {
          queryParams: { data: JSON.stringify(reservation) },
        };
        this.router.navigate(['/reservation-accept'], navigationExtras).then(() => { window.history.replaceState({}, document.title, this.router.url.split('?')[0]) });
      })
    }
  }

  calculateCost() {
    const beginDate = new Date(this.room.beginDate);
    const endDate = new Date(this.room.endDate);
    const diffTime = Math.abs(endDate.getTime() - beginDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    this.numberDays = diffDays;
    let totalCost = (this.room.tarifa * diffDays);
    this.cost = totalCost
    if (this.room.oferta != 0) {
      this.costWithDiscount = (totalCost - (totalCost * (this.room.oferta / 100)));
    } else {
      this.costWithDiscount = totalCost;
    }
  }

  cancel() {
    this.router.navigate(['/reservation-dates'])
  }

}
