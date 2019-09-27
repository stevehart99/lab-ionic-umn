import { Component, OnInit } from '@angular/core';
import { Home } from '../home.model';
import { HomeService } from '../home.service';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loadUkm: Home[];
  constructor(private ukmService: HomeService, private router: Router) { }

  ngOnInit() {
    this.loadUkm = this.ukmService.getAllmyUKM();
  }

  ionViewWillEnter() {
    this.loadUkm = this.ukmService.getAllmyUKM();
  }

  deleteUKM(id: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.ukmService.deleteMyUKM(id);
    this.loadUkm = this.ukmService.getAllmyUKM();
  }

  goBack() {
    this.router.navigateByUrl('/home/tabs/ukm');
  }


}
