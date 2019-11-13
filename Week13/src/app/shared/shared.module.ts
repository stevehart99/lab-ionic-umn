import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationPikerComponent } from './pickers/location-piker/location-piker.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [LocationPikerComponent, MapModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: `${environment.mapsAPIKey}`
    })
  ],
  exports: [LocationPikerComponent, MapModalComponent],
  entryComponents: [MapModalComponent]
})
export class SharedModule { }
