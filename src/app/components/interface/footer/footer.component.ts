import { Component } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-general-info-service/hotel-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  hotelName: string = '';

  constructor(private service: HotelServiceService) {
    this.service.getHotelName().subscribe(hotel =>{
      this.hotelName = hotel[0].nombre
    })
  }
}
