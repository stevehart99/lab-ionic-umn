import { Component, OnInit } from '@angular/core';
import { Home } from '../home.model';
import { HomeService } from '../home.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ukm',
  templateUrl: './ukm.page.html',
  styleUrls: ['./ukm.page.scss'],
})
export class UkmPage implements OnInit {
  loadUkm: Home[];
  constructor(private ukmService: HomeService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.loadUkm = this.ukmService.getAllUkm();
  }

  async presentAlert(ukm: Home) {
    const alert = await this.alertCtrl.create({
      header: 'Beneran Mau Join?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Serius',
          handler: () => {
            this.ukmService.setMyUkm(ukm);
          }
        }]
    });
    await alert.present();
  }

}
