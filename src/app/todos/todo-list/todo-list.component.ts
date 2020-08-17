import { filtrosVarios } from './../../filtro/filtro.actions';
import { AppState } from './../../app.reducer';
import { Todo } from './../models/todo.models';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosVarios;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos').subscribe(todos => this.todos = todos);
    this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);
  }

}
