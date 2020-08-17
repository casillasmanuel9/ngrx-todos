import { createAction, props } from '@ngrx/store';

export type filtrosVarios = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
  '[Filter] Set Filtro',
  props<{ filtro: filtrosVarios }>()
);
