import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) { }

  apiURLGetRoom = '/Entity_Reserva/GetAvaibilityRoom';
  apiURLPostReservation = '/Entity_Reserva/SaveReservation';
  getRoomForReservation(startDate: String, endDate: String, roomType: Number): Observable<any> {
    return this.http.get(environment.url + this.apiURLGetRoom + '/' + startDate + '/' + endDate + '/' + roomType);
  }

  postReservation(reservation: any): Observable<any> {
    return this.http.post(environment.url + this.apiURLPostReservation, reservation);
  }
}
