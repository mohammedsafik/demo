import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  standalone:true
})
export class Child {
  @Input() data!: string;

  @Output() send = new EventEmitter<string>();

  notifyparent() {
    this.send.emit("hello"); // send actual data
  }
}