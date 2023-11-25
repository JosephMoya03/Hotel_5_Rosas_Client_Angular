import { Component } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-general-info-service/hotel-service.service';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css'],
})
export class ContactUsPageComponent {
  information : String = ""
  hotelName: string = '';
  hotelPhones: string = '';
  hotelEmails: string = '';

  constructor(private service: HotelServiceService) {
    this.service.getHotelName().subscribe((hotel) => {
      this.hotelName = hotel[0].nombre;
    });
    this.service.getContactUs().subscribe((information) => {
      this.information = information.informacion;
    });
    this.service.getHotelPhones().subscribe((hotelPhones) => {
      for (let i = 0; i < hotelPhones.length; i++) {
        if(i == hotelPhones.length-1){
          this.hotelPhones += hotelPhones[i].numero
        }else{
          this.hotelPhones += hotelPhones[i].numero + ' / '
        }
      }
    });
    this.service.getHotelEmails().subscribe((hotelEmails) => {
      for (let i = 0; i < hotelEmails.length; i++) {
        if(i == hotelEmails.length-1){
          this.hotelEmails += hotelEmails[i].correo
        }else{
          this.hotelEmails += hotelEmails[i].correo + ' / '
        }
      }
    });
  }
}
