import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as emailjs from '@emailjs/browser';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  selector: 'app-contato-oficinas',
  template: `
    <div class="solicitacao-container" *ngIf="!enviado">
      <h1>Solicitação de apresentação e oficinas</h1>
      <p>
        Para solicitar a sua apresentação e retornarmos para você informações de orçamento e disponibilidade,
        por favor preencha o formulário abaixo:
      </p>

      <form (ngSubmit)="enviarFormulario()" #solicitacaoForm="ngForm">
        <div class="form-box">
          <h2>Dados do evento</h2>

          <label>Qual é o nome do seu evento?</label>
          <input type="text" name="nomeEvento" [(ngModel)]="formData.nomeEvento" required />

          <label>Por favor faça uma breve descrição do seu evento, abaixo:</label>
          <textarea name="descricao" [(ngModel)]="formData.descricao" required></textarea>

          <label>Qual é a data do evento?</label>
          <input type="text" name="data" [(ngModel)]="formData.data" placeholder="dd/mm/aaaa" required />

          <label>Qual é o endereço do evento?</label>
          <input type="text" name="endereco" [(ngModel)]="formData.endereco" required />

          <label>O evento tem fins lucrativos?</label>
          <div class="radio-group">
            <label><input type="radio" name="lucrativo" value="Sim" [(ngModel)]="formData.lucrativo" required /> Sim</label>
            <label><input type="radio" name="lucrativo" value="Não" [(ngModel)]="formData.lucrativo" required /> Não</label>
          </div>

          <label>Quantas pessoas são esperadas?</label>
          <input type="text" name="pessoas" [(ngModel)]="formData.pessoas" required />

          <h2>Deixe seu contato</h2>

          <label>Nome:</label>
          <input type="text" name="nome" [(ngModel)]="formData.nome" required />

          <label>Email:</label>
          <input type="email" name="email" [(ngModel)]="formData.email" placeholder="contato@mail.com" required />

          <label>Telefone:</label>
          <input type="text" name="telefone" [(ngModel)]="formData.telefone" />

          <label>WhatsApp:</label>
          <input type="text" name="whatsapp" [(ngModel)]="formData.whatsapp" />

          <button type="submit" [disabled]="!solicitacaoForm.valid">Enviar</button>
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

export class SolicitacaoComponent {
  enviado = false;

  formData = {
    nomeEvento: '',
    descricao: '',
    data: '',
    endereco: '',
    lucrativo: '',
    pessoas: '',
    nome: '',
    email: '',
    telefone: '',
    whatsapp: ''
  };

  async enviarFormulario() {
    try {
      const serviceId = 'service_v4myuzi';
      const templateId = 'template_80utwcq';
      const publicKey = 'KrBiWfn5J3m0XVd9S'; // substitua pelo seu código do EmailJS

      const params = {
        to_email: 'taiko.anbi@gmail.com',
        ...this.formData
      };

      await emailjs.send(serviceId, templateId, params, publicKey);
      this.enviado = true;
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
    }
  }
}
