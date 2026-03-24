import { createReducer, on } from '@ngrx/store';
import { addTask, deleteTask, toggleTask } from '../actions/task.actions';
import { TaskState ,Task} from '../state/task.state';
import { initialState } from '../state/task.state';

let id = 1;
export const taskReducer = createReducer(
   initialState,
  on(addTask, (state: TaskState, { title }) => ({
    ...state,
    tasks: [...state.tasks, { id: id++, title, completed: false }]
  })),

  on(deleteTask, (state: TaskState, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task: Task) => task.id !== id)
  })),

  on(toggleTask, (state: TaskState, { id }) => ({
    ...state,
    tasks: state.tasks.map((task: Task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  }))
);