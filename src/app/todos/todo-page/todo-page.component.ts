import { toogleAll } from './../todos.actions';
import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  completado = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toogleAll() {
    this.completado = !this.completado;
    this.store.dispatch(toogleAll({completado: this.completado}));
  }

}
