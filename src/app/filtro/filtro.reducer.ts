import { setFiltro, filtrosVarios } from './filtro.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: filtrosVarios = "todos";

const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, ( state, { filtro }) => filtro),
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
