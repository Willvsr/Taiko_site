import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-student-area',
  templateUrl: './student-area.component.html',
  styleUrls: ['./student-area.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StudentAreaComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout().subscribe();
  }

  getUser() {
    return this.authService.getCurrentUser();
  }
}
