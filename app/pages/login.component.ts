import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  template: `
    <div class="login-container">
      <div class="login-background"></div>
      <div class="login-content">
        <div class="login-header">
          <button class="home-button" (click)="goToHome()">Home</button>
        </div>
        
        <div class="login-form-container">
          <div class="avatar-container">
            <div class="avatar-placeholder"></div>
          </div>
          
          <form class="login-form" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <input 
                type="text" 
                id="usuario" 
                name="usuario" 
                [(ngModel)]="credentials.usuario" 
                placeholder="Usuário"
                required>
            </div>
            <div class="form-group">
              <input 
                type="password" 
                id="senha" 
                name="senha" 
                [(ngModel)]="credentials.senha" 
                placeholder="Senha"
                required>
            </div>
            <button type="submit" class="login-button">Login</button>
          </form>
          
          <div class="forgot-password">
            <a href="#" (click)="forgotPassword()">Esqueceu a senha?</a>
          </div>
        </div>
        
        <div class="login-footer">
          <p>&copy; 2023 Associação Nipo-Brasileira</p>
          <div class="social-icons">
            <a href="#" class="social-icon facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-icon youtube">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class LoginComponent {
  credentials = {
    usuario: '',
    senha: ''
  };

  onSubmit() {
    // TODO: Implementar autenticação
    console.log('Login attempted:', this.credentials);
  }
  
  goToHome() {
    // Navegar para a página inicial
    console.log('Navigating to home');
  }
  
  forgotPassword() {
    // Lógica para recuperação de senha
    console.log('Forgot password clicked');
  }
}