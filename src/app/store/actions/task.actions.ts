import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[Task] Add Task',
  props<{ title: string }>()
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ id: number }>()
);

export const toggleTask = createAction(
  '[Task] Toggle Task',
  props<{ id: number }>()
);