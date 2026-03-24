import { Component, signal } from '@angular/core';
// import { AddTaskComponent } from './components/add-task/add-task';
// import { TaskListComponent } from './components/task-list/task-list';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
userForm = new FormGroup({
  name: new FormControl('',[Validators.required,Validators.email,Validators.minLength(8)]),
  email: new FormControl(''),
  password: new FormControl('')
});

}
