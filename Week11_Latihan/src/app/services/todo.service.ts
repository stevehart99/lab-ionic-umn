import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Todo {
  name: string;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private todosCollection: AngularFirestoreCollection<Todo>;
  private bikes: Observable<Todo[]>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<Todo>('bikes');

    this.bikes = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getBikes() {
    return this.bikes;
  }

  getBike(id) {
    return this.todosCollection.doc<Todo>(id).valueChanges();
  }

  updateBike(todo: Todo, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  addBike(todo: Todo) {
    return this.todosCollection.add(todo);
  }

  removeBike(id) {
    return this.todosCollection.doc(id).delete();
  }
}
