import { edit, deleteT } from './../todos.actions';
import { AppState } from './../../app.reducer';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../models/todo.models';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { toogle } from '../todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico')  txtInputFisico: ElementRef;
  chkCompletado : FormControl;
  txtInput: FormControl;

  editando = false;

  constructor( private store:Store<AppState> ) {
  }

  ngOnInit() {
    this.chkCompletado = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    this.chkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch(toogle({id: this.todo.id}));
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion () {
    this.editando = false;
    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.texto) return;
    this.store.dispatch(
      edit({id: this.todo.id, texto: this.txtInput.value})
    )
  }

  deleteT() {
    this.store.dispatch(deleteT({id: this.todo.id}));
  }

}
