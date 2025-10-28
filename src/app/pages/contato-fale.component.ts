import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-contato-fale',
  template: `
    <div class="fale-conosco-section">
      <h3>Fale Conosco</h3>
      <form class="contato-form" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" [(ngModel)]="formData.nome" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" [(ngModel)]="formData.email" required>
        </div>
        <div class="form-group">
          <label for="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" [(ngModel)]="formData.mensagem" required></textarea>
        </div>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  `
})
export class ContatoFaleComponent {
  formData = {
    nome: '',
    email: '',
    mensagem: ''
  };

  onSubmit() {
    // TODO: Implementar envio do formulário
    console.log('Form submitted:', this.formData);
  }
}