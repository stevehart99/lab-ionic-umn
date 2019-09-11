import { Injectable } from '@angular/core';
import { Place } from './places.model';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123853_wh_3',
      100000000
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123853_wh_3',
      5000000000
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123853_wh_3',
      5000000000
    ),
  ];
  get places() {
    return [...this._places];
  }
  getPlaces(placeId: string) {
    return {
      ...this._places.find(_places => {
        return _places.id === placeId
      })
    };
  }
  constructor() { }

  getPlace(id: string) {
    return { ...this._places.find(p => p.id === id) };
  }
}
