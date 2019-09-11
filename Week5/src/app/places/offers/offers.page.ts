import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];
  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offers = this.placesService.places;
  }

  editOffer(id: string, slidingItem: IonItemSliding) {
    console.log("Test1");
    slidingItem.close();
    console.log("Test2");
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id]);
    console.log("Test4");
  }
}
