import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { StudentAreaComponent } from './student-area/student-area.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'aluno', 
    component: StudentAreaComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/home' }
];
