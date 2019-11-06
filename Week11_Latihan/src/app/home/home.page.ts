import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  bikes: Todo[];

  constructor(private bikeService: TodoService) { }

  ngOnInit() {
    this.bikeService.getBikes().subscribe(res => {
      this.bikes = res;
    });
  }

  remove(item) {
    this.bikeService.removeBike(item.id);
  }
}
