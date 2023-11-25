import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FacilitiesServiceService } from 'src/app/services/facilities-service/facilities-service.service';

@Component({
  selector: 'app-facilities-page',
  templateUrl: './facilities-page.component.html',
  styleUrls: ['./facilities-page.component.css']
})
export class FacilitiesPageComponent {

  facilities: any = [];

  information : String = ""

  constructor(private service: FacilitiesServiceService) {
    this.service.getHotelFacilities().subscribe(facilities => {
      this.facilities = facilities;
    })
    this.service.getFacility().subscribe(information => {
      console.log(information)
      this.information = information.informacion;
    })
  }

}
