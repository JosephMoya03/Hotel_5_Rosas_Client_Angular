import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';//API CONNECTION

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericPageComponent } from './components/Pages/generic-page/generic-page.component';
import { AreaPublicityComponent } from './components/interface/area-publicity/area-publicity.component';
import { FooterComponent } from './components/interface/footer/footer.component';
import { HeaderComponent } from './components/interface/header/header.component';
import { LateralMenuComponent } from './components/interface/lateral-menu/lateral-menu.component';
import { InformationComponent } from './components/interface/information/information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/Pages/about-us-page/about-us.component';
import { HomePageComponent } from './components/Pages/home-page/home-page.component';
import { FacilitiesPageComponent } from './components/Pages/facilities-page/facilities-page.component';
import { UbicationPageComponent } from './components/Pages/ubication-page/ubication-page.component';
import { ReservationDatePageComponent } from './components/Pages/reservation-date-page/reservation-date-page.component';
import { ContactUsPageComponent } from './components/Pages/contact-us-page/contact-us-page.component';
import { RatesPageComponent } from './components/Pages/rates-page/rates-page.component';
import { ReservationDeclinePageComponent } from './components/Pages/reservation-decline-page/reservation-decline-page.component';
import { ReservationAcceptPageComponent } from './components/Pages/reservation-accept-page/reservation-accept-page.component';
import { ReservationPageComponent } from './components/Pages/reservation-page/reservation-page.component';
import { MapComponent } from './components/Util/map/map.component';
import { SalesModule } from './no-Funtional/sales/sales.module';
 

 
@NgModule({
  declarations: [
    AppComponent,
    GenericPageComponent,
    AreaPublicityComponent,
    FooterComponent,
    HeaderComponent,
    LateralMenuComponent,
    InformationComponent,
    AboutUsComponent,
    HomePageComponent,
    FacilitiesPageComponent,
    UbicationPageComponent,
    ReservationDatePageComponent,
    ContactUsPageComponent,
    RatesPageComponent,
    ReservationDeclinePageComponent,
    ReservationAcceptPageComponent,
    ReservationPageComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
