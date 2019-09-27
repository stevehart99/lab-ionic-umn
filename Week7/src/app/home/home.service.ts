import { Injectable } from '@angular/core';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private home: Home[] = [
    new Home(
      'h1',
      'Basket',
      'Basket adalah UKM lempar bola'
    ),
    new Home(
      'h2',
      'Drama',
      'Drama adalah UKM banyak drama'
    ),
    new Home(
      'h3',
      'Futsal',
      'Futsal adalah UKM tendang bola'
    ),
    new Home(
      'h4',
      'Paduan Suara',
      'Paduan Suara adalah UKM nyanyi'
    ),
    new Home(
      'h5',
      'Volly',
      'Volly adalah UKM memukul Bola'
    ),
    new Home(
      'h6',
      'Gaming',
      'Gaming adalah UKM bermain game'
    )
  ];
  private myUKM: Home[] = [];

  getAllUkm() {
    return [...this.home];
  }

  getAllmyUKM() {
    return [...this.myUKM];
  }

  setMyUkm(ukm: Home) {
    this.myUKM.push(ukm);
  }
  deleteMyUKM(ukmId: string) {
    this.myUKM = this.myUKM.filter(ukaem => {
      return ukaem.id !== ukmId;
    });
  }

  constructor() { }
}
