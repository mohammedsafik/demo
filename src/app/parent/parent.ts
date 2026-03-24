import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
  standalone:true
})
export class Parent {
  data = "vanakam";
print:string = ""
  receive(value: string) {
    this.print=value
  }
  visible = false;
}
