import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  students=[
    {name:'Apurva',age:22,course:'AIML'},
    {name:'Tej',age:21,course:'AIML'}
  ];
  getStudents(){
    return this.students;
  }
}
