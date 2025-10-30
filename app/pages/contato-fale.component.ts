import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as emailjs from '@emailjs/browser';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  selector: 'app-contato-fale',
  template: `
    <div class="solicitacao-container" *ngIf="!enviado">
      <h1>Fale conosco</h1>
      <p>
       Preecha o fomulário abaixo que entraremos em contato:
      </p>

      <form #solicitacaoForm="ngForm">
        <div class="form-box">
          <h2>Deixe seu contato</h2>

          <label>Nome:</label>
          <input type="text" name="nome" [(ngModel)]="formData.nome" required />

          <label>Email:</label>
          <input type="email" name="email" [(ngModel)]="formData.email" placeholder="contato@mail.com" required />

          <label>Telefone:</label>
          <input type="text" name="telefone" [(ngModel)]="formData.telefone" />

          <label>WhatsApp:</label>
          <input type="text" name="whatsapp" [(ngModel)]="formData.whatsapp" />

          <label>Assunto:</label>
          <textarea name="descricao" [(ngModel)]="formData.assunto" required></textarea>

          <button type="button" (click)="enviarFormulario()" [disabled]="!solicitacaoForm.valid || enviando">Enviar</button>
        </div>
      </form>
    </div>

    <div class="sucesso-container" *ngIf="enviado">
      <div class="sucesso-box">
        <h2>Sucesso! 🥁🎉</h2>
        <p>
          Sua solicitação foi enviada! Em até 3 dias estaremos retornando o contato com informações
          em relação à sua solicitação.
        </p>
        <div class="donchan">
          <p>Don chan em pé com os braços abertos para cima jogando confete</p>
        </div>
      </div>
    </div>
  `,
})

export class ContatoFaleComponent {
  enviado = false;
  enviando = false;

  formData = {
    nome: '',
    email: '',
    telefone: '',
    whatsapp: '',
    assunto: ''
  };

  async enviarFormulario() {
    if (this.enviando || this.enviado) return false;
    this.enviando = true;
    try {
      const serviceId = 'service_v4myuzi';
      const templateId = 'template_80utwcq';
      const publicKey = 'KrBiWfn5J3m0XVd9S';
      const params = {
        to_email: 'taiko.anbi@gmail.com',
        ...this.formData
      };

      await emailjs.send(serviceId, templateId, params, publicKey);
      this.enviado = true;
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
    } finally {
      this.enviando = false;
    }
    return false;
  }
}
