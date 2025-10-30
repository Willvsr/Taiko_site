import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-sobre',
  template: `
    <div class="sobre-section">
      <h2>Sobre o Ishindaiko</h2>
      <p>Somos um grupo dedicado ao Taiko, a arte da percussão japonesa.</p>
      <nav class="sub-nav">
        <a routerLink="historia">Nossa História</a>
        <a routerLink="valores">Valores</a>
        <a routerLink="mascote">Nosso Mascote</a>
        <a routerLink="membros">Membros</a>
        <a routerLink="curriculo">Currículo</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class SobreComponent {}