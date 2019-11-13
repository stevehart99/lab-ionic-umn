import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from '../../map-modal/map-modal.component';
import { PlaceService } from 'src/app/home/place.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location-piker',
  templateUrl: './location-piker.component.html',
  styleUrls: ['./location-piker.component.scss'],
})
export class LocationPikerComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private placeSvc: PlaceService
  ) { }

  ngOnInit() { }

  async onPickLocation() {
    const modal = await this.modalCtrl.create({
      component: MapModalComponent
    });
    modal.onDidDismiss().then((modalData) => {
      console.log(modalData.data);
      this.getAddress(modalData.data.lat, modalData.data.lng).subscribe(
        (address) => {
          this.placeSvc.setAddress(address);
          console.log(address);
        }
      );
    });
    return await modal.present();
  }

  private getAddress(lat: number, lng: number) {
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.mapsAPIKey}`)
      .pipe(
        map(geoData => {
          if (!geoData || !geoData.results || !geoData.results.length) {
            return null;
          }
          return geoData.results[0].formatted_address;
        })
      );
  }

}
