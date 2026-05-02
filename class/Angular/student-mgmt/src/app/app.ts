import { Component } from '@angular/core';
import { Student } from './components/student/student';
import { StudentForm } from './components/student-form/student-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Student, StudentForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}