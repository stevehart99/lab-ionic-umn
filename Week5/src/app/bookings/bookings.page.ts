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
  book: Booking[];
  constructor(private menuCtrl: MenuController,
    private bookService: BookingsService,
    private router: Router) { }

  ngOnInit() {
    console.log("init");
    this.book = this.bookService.books;
  }
  onOpenMenu() {
    this.menuCtrl.toggle('m1');

  }
  ionViewWillEnter() {
    console.log("test1");
    console.log(this.book);
    this.book = this.bookService.books;
  }

  deleteBooking(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.book = this.book.filter(book => {
      return book.id !== id;
    });
    console.log("hehe");
    console.log(this.book);
  }
}
