import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  fname: string = 'Apurva';
  MyRoll: number = 123;
  Source: string='AIML';
  City: string[] = ['Pune', 'Kolhapur', 'Sangli'];
  Showbutton() {
    this.fname = 'Apurva';
    alert("You clicked show button");
  }
}