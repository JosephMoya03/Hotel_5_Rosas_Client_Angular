import { Component } from '@angular/core';
import { RatesServiceService } from 'src/app/services/rates-service/rates-service.service';

@Component({
  selector: 'app-rates-page',
  templateUrl: './rates-page.component.html',
  styleUrls: ['./rates-page.component.css'],
})
export class RatesPageComponent {
  rates: any = [];

  constructor(private service: RatesServiceService) {
    this.service.getRates().subscribe((rates) => {
      this.rates = rates;
    });
  }
}
