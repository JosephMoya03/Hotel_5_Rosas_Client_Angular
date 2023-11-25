import { Component } from '@angular/core';
import { UbicationServiceService } from 'src/app/services/ubication-service/ubication-service.service';

@Component({
  selector: 'app-ubication-page',
  templateUrl: './ubication-page.component.html',
  styleUrls: ['./ubication-page.component.css']
})
export class UbicationPageComponent {
  ubication: string = '';
  latitude: number = 0;
  longitude: number = 0;

  constructor(private service: UbicationServiceService) {

  }

  ngOnInit() {
    this.service.getUbication().subscribe(ubication => {
      this.ubication = ubication[0].informacion
      this.latitude = ubication[0].latitud
      this.longitude = ubication[0].longitud
    })
  }
}
