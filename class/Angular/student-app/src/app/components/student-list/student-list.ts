import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { StudentService } from '../../services/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  students: any[] = [];

  constructor(private studentService: StudentService,
              private router: Router) {
    this.students = this.studentService.getStudents();
  }

  viewDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}