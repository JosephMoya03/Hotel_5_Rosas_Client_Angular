import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericPageComponent } from './components/Pages/generic-page/generic-page.component';
import { HomePageComponent } from './components/Pages/home-page/home-page.component';
import { AboutUsComponent } from './components/Pages/about-us-page/about-us.component';
import { FacilitiesPageComponent } from './components/Pages/facilities-page/facilities-page.component';
import { UbicationPageComponent } from './components/Pages/ubication-page/ubication-page.component';
import { ReservationDatePageComponent } from './components/Pages/reservation-date-page/reservation-date-page.component';
import { ContactUsPageComponent } from './components/Pages/contact-us-page/contact-us-page.component';
import { RatesPageComponent } from './components/Pages/rates-page/rates-page.component';
import { ReservationDeclinePageComponent } from './components/Pages/reservation-decline-page/reservation-decline-page.component';
import { ReservationAcceptPageComponent } from './components/Pages/reservation-accept-page/reservation-accept-page.component';
import { ReservationPageComponent } from './components/Pages/reservation-page/reservation-page.component';
import { ECommerceComponent } from './no-Funtional/sales/e-commerce/e-commerce.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'facilities', component: FacilitiesPageComponent },
  { path: 'ubication', component: UbicationPageComponent },
  { path: 'rates', component: RatesPageComponent },
  { path: 'reservation', component: ReservationPageComponent },
  { path: 'reservation-dates', component: ReservationDatePageComponent },
  { path: 'reservation-decline', component: ReservationDeclinePageComponent },
  { path: 'reservation-accept', component: ReservationAcceptPageComponent },
  { path: 'contact-us', component: ContactUsPageComponent },
  { path: 'e-commerce', component: ECommerceComponent },
  { path: '**', redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
