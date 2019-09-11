import { Injectable } from '@angular/core';
import { Place } from '../places/places.model';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private book: Booking[] = [
    new Booking(
      'b1',
      'p1',
      'u1',
      'Gading Apartment',
      5
    ),
    new Booking(
      'b2',
      'p2',
      'u2',
      'Serpong Apartment',
      6
    ),
    new Booking(
      'b3',
      'p3',
      'u3',
      'BSD Apartment',
      7
    ),
  ];

  get books() {
    return [...this.book];
  }

  deleteBooking(book: any) {
    this.book.splice(this.book.indexOf(book), 1);
  }
  constructor() { }
}
