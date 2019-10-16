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
      'http://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
      100000000,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://static3.businessinsider.com/image/5681799ce6183e55008b526d-480/carmel-place-nyc-micro-apartment.jpg',
      5000000000,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'https://lh3.googleusercontent.com/-F5aY6yinaiA/TW_NzlRJppI/AAAAAAAAABo/fewLnztPeDU/s1600/apartment+building+designs...jpg',
      5000000000,
      new Date('2019-01-01'),
      new Date('2019-12-31')
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
