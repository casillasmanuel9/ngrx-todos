import { AppState } from './../../app.reducer';
import { filtrosVarios, setFiltro } from './../../filtro/filtro.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { limpiarCompletados } from '../todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  pendientes: number = 0;

  filtroActual: filtrosVarios;
  filtros: filtrosVarios[] = [
    'todos',
    'completados',
    'pendientes'
  ];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);
    this.store.select('todos').subscribe(todos => {
      this.pendientes = todos.filter(todo => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: filtrosVarios) {
    this.store.dispatch(setFiltro({filtro}));
  }

  limpiarCompletados() {
    this.store.dispatch(limpiarCompletados());
  }

}
