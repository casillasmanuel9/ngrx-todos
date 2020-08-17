import { Todo } from './models/todo.models';
import { create, toogle, edit, deleteT, toogleAll, limpiarCompletados } from './todos.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: Todo[] = [new Todo('Salvar al mundo')];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { texto }) => [...state, new Todo(texto)]),
  on(toogle, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completado: !todo.completado } : todo
    )
  ),
  on(edit, (state, { id, texto }) =>
    state.map((todo) => (todo.id === id ? { ...todo, texto } : todo))
  ),
  on(deleteT, (state, { id }) => state.filter((todo) => todo.id != id)),
  on(toogleAll, (state, {completado}) => state.map(todo => ({...todo, completado}))),
  on(limpiarCompletados, state => state.filter(todo => !todo.completado))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
