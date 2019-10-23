import { Injectable } from '@angular/core';
import { Place } from '../places/places.model';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: Booking[] = [
    new Booking(
      '1',
      '1',
      '1',
      '1',
      5
    ),
    new Booking(
      '2',
      '2',
      '2',
      '2',
      10
    ),
    new Booking(
      '2',
      '2',
      '2',
      '2',
      15
    ),
    new Booking(
      '3',
      '3',
      '3',
      '3',
      20
    ),
  ];

  get bookings() {
    return [...this._bookings];
  }

  deleteBooking(_bookings: any) {
    this._bookings.splice(this._bookings.indexOf(_bookings), 1);
  }

  constructor() { }
}
