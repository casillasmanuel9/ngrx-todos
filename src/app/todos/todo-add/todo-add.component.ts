import { create } from './../todos.actions';
import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  add() {
    if(this.textInput.invalid) return;
    this.store.dispatch(create({texto: this.textInput.value}));
    this.textInput.reset();
  }

}
