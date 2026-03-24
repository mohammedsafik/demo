import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from '../state/task.state';

export const selectTaskState =
  createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);