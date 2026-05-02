import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentForm {

  name: string = '';
  course: string = '';
  roll: number = 0;        // ✅ NEW
  division: string = '';   // ✅ NEW

  students: any[] = [];

  addStudent() {
    this.students.push({
      name: this.name,
      course: this.course,
      roll: this.roll,
      division: this.division
    });

    // clear fields
    this.name = '';
    this.course = '';
    this.roll = 0;
    this.division = '';
  }
}