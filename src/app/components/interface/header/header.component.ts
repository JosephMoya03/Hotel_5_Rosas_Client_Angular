import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-general-info-service/hotel-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  hotelName: string = '';

  constructor(private service: HotelServiceService) {
    this.service.getHotelName().subscribe(hotel =>{
      this.hotelName = hotel[0].nombre
    })
  }



}
