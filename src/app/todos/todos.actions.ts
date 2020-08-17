import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Create Todo', props<{texto: string}>());
export const toogle = createAction('[TODO] Toogle Todo', props<{id: number}>());
export const edit = createAction('[TODO] Edit Todo', props<{id: number, texto: string}>());
export const deleteT = createAction('[TODO] Delete Todo', props<{id: number}>());
export const toogleAll = createAction('[TODO] Toogle All Todos', props<{completado: boolean}>());
export const limpiarCompletados = createAction('[TODO] Limpiar Completados');
