import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-contato',
  template: `
    <div class="contato-section">
      <h2>Entre em Contato</h2>
      <nav class="sub-nav">
        <a routerLink="oficinas">Oficinas</a>
        <a routerLink="duvidas">Dúvidas Frequentes</a>
        <a routerLink="fale">Fale Conosco</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class ContatoComponent {}