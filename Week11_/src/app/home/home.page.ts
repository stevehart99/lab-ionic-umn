import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.interface';
import { BookingsService } from './bookings.service';
import { AlertController, ModalController } from '@ionic/angular';
import { NewBookingPage } from './new-booking/new-booking.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  private bookings: Booking[] = [];

  constructor(
    private bookingSvc: BookingsService,
    private aLertCtrl: AlertController,
    private modaLCtrl: ModalController
  ) { }

  ngOnInit() {

  }

  getBookings() {
    this.bookingSvc.fetchBookings()
      .subscribe((bookings) => {
        console.log(bookings);
      });
  }

  async presentAlertPrompt() {
    const alert = await this.aLertCtrl.create({
      header: 'Delete a Booking',
      inputs: [
        {
          name: 'bookingId',
          type: 'text',
          placeholder: 'Enter your booking ID'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.bookingSvc.deleteBooking(data.bookingId)
              .subscribe(() => {
                this.bookingSvc.fetchBookings()
                  .subscribe((bookings) => {
                    console.log(bookings);
                  });
                console.log("DELETED");
              });
          }
        }
      ]
    });
    await alert.present();
  }

  async presentModal() {
    const modal = await this.modaLCtrl.create({
      component: NewBookingPage
    });
    return await modal.present();
  }

  newBooking() {
    this.presentModal();

  }

  deleteBooking() {
    this.presentAlertPrompt();
  }

}
