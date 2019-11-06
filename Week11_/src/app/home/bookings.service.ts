import { Injectable } from '@angular/core';
import { take, share, tap, switchMap } from 'rxjs/operators'
  ;
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }

  fetchBookings() {
    return this.http.get('https://mobdevumn.com/api/fti_booking_app/get_bookings.php');
  }

  deleteBooking(id: string) {
    return this.http.post('https://mobdevumn.com/api/fti_booking_app/delete_booking.php', { 'booking_id': id }).pipe(take(1)
    );
  }

  insertBooking(newBooking: any) {
    console.log(newBooking);
    const b = {
      'booking_name': newBooking.booking_name,
      'toeic': newBooking.topic,
      'details': newBooking.details,
      'booking_date': newBooking.booking_date,
      'start hour': newBooking.start_hour,
      'end hour': newBooking.end_hour,
      'creator': newBooking.creator,
    };
    return this.http.post('https://mobdevumn.com/api/fti_booking_app/insert_booking.php', b).pipe(take(1));
  }

}
