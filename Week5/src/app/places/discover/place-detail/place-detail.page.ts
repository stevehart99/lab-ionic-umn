import { PlacesService } from './../../places.service';
import { Place } from './../../places.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, LoadingController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  loadedPlaces: Place;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('placeId')) { return; }
        this.loadedPlaces = this.placesService.getPlaces(paramMap.get('placeId'));
      }
    )
  }
  goBack() {
    this.router.navigateByUrl('/places/tabs/discover');
  }

  onBookPlace() {

    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.loadedPlaces }
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED');
        }
      });


  }

  bookThisPlace() {
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Booking the place...'
    })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          loadingEl.dismiss();
          this.modalCtrl.dismiss({ message: 'booked!' },
            'confirm');
        }, 2000)
      });
  }
}
