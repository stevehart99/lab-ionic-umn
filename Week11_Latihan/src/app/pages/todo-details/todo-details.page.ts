import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {

  bike: Todo = {
    name: '',
    price: 0,
    category: ""
  };


  bikeId = null;

  constructor(
    private bikeService: TodoService,
    private route: ActivatedRoute,
    private loadCtrl: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.bikeId = this.route.snapshot.params['id'];
    if (this.bikeId) {
      this.loadBike();
    }
  }

  async loadBike() {
    const loading = await this.loadCtrl.create({
      message: 'Loading Bike'
    });
    await loading.present();

    this.bikeService.getBike(this.bikeId).subscribe(res => {
      loading.dismiss();
      this.bike = res;
    });
  }

  async saveBike() {
    const loading = await this.loadCtrl.create({
      message: 'Saving Bike'
    });
    await loading.present();

    if (this.bikeId) {
      this.bikeService.updateBike(this.bike, this.bikeId).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('home');
      })
    } else {
      this.bikeService.addBike(this.bike).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('home');
      });
    }
  }



}
