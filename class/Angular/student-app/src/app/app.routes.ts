import { Routes } from '@angular/router';
import { StudentList } from './components/student-list/student-list';
import { StudentDetail } from './components/student-detail/student-detail';

export const routes: Routes = [
  { path: '', component: StudentList },
  { path: 'details/:id', component: StudentDetail }
];