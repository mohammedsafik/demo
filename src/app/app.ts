import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Child,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
