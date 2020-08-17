import { filtrosVarios } from './../filtro/filtro.actions';
import { Todo } from './models/todo.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosVarios): Todo[] {
    switch (filtro) {
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      case 'completados':
        return todos.filter(todos => todos.completado);

      default:
        return todos;
    }
  }

}
