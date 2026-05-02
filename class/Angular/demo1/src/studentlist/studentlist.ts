import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  imports: [],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist {
  /**
   *
   */
  constructor(private student:student) {} 
  

  students:any[]=[];//any:store multiple type of data
}
