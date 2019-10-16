import { Component, OnInit } from '@angular/core';
import { MenuController, IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { BookingsService } from './bookings.service';
import { Booking } from './booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];
  constructor(private menuCtrl: MenuController,
    private bookService: BookingsService,
    private router: Router) { }

  ngOnInit() {
    console.log("init");
    this.loadedBookings = this.bookService.bookings;
  }
  onOpenMenu() {
    this.menuCtrl.toggle('m1');

  }

  onCancelBooking(loadedBookings: any, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadedBookings.splice(this.loadedBookings.indexOf(loadedBookings), 1);
    this.bookService.deleteBooking(loadedBookings);
  }


  goBack() {
    this.router.navigateByUrl('/places/tabs/discover');
  }
}
