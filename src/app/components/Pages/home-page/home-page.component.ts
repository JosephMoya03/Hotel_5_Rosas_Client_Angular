import { Component } from '@angular/core';
import { HomeInfoService } from 'src/app/services/home-info-service/home-info.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  hotelName: string = '';
  information: string = '';
  imageHotel: string = ''

  constructor(private service: HomeInfoService) {
    this.service.getHomeInfo().subscribe(hotelInfo => {
      this.imageHotel = hotelInfo.imagen
      this.hotelName = hotelInfo.titulo
      this.information = hotelInfo.informacion
    })
  }

}
