import { Injectable } from '@angular/core';
import { Place } from '../places/places.model';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Gading Apartment',
      guestNumber: 2,
      userId: 'abc'
    },
    {
      id: 'abc',
      placeId: 'p2',
      placeTitle: 'Serpong Apartment',
      guestNumber: 8,
      userId: 'def'
    },
    {
      id: 'def',
      placeId: 'p3',
      placeTitle: 'BSD Apartment',
      guestNumber: 7,
      userId: 'ghj'
    },
    {
      id: 'ghi',
      placeId: 'p4',
      placeTitle: 'Scientia Residence',
      guestNumber: 4,
      userId: 'klm'
    },
    {
      id: 'jkl',
      placeId: 'p5',
      placeTitle: 'Ruko Bolsena',
      guestNumber: 9,
      userId: 'lmn'
    },
    {
      id: 'mno',
      placeId: 'p6',
      placeTitle: 'Serpong M-Town',
      guestNumber: 1,
      userId: 'pqr'
    }
  ];

  get bookings() {
    return [...this._bookings];
  }

  deleteBooking(_bookings: any) {
    this._bookings.splice(this._bookings.indexOf(_bookings), 1);
  }
  constructor() { }
}
