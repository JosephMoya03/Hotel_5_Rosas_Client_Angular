import { Component } from '@angular/core';
import { PublicityServiceService } from 'src/app/services/publicity-service/publicity-service.service';

@Component({
  selector: 'app-area-publicity',
  templateUrl: './area-publicity.component.html',
  styleUrls: ['./area-publicity.component.css']
})
export class AreaPublicityComponent {

  publicities: any = []

  constructor(private service: PublicityServiceService) {
    this.service.getPublicity().subscribe(publicities => {
      this.publicities = publicities;
    });
  };

}
