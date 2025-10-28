import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  template: `
    <div class="login-section">
      <h2>Área do Membro</h2>
      <form class="login-form" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" [(ngModel)]="credentials.email" required>
        </div>
        <div class="form-group">
          <label for="senha">Senha</label>
          <input type="password" id="senha" name="senha" [(ngModel)]="credentials.senha" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  `
})
export class LoginComponent {
  credentials = {
    email: '',
    senha: ''
  };

  onSubmit() {
    // TODO: Implementar autenticação
    console.log('Login attempted:', this.credentials);
  }
}