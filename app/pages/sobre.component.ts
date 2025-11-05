import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-sobre',
  template: `
    <div class="sobre-section">
      <h2 data-i18n="about.title">Sobre o Kouryuu Daiko</h2>
      <p data-i18n="about.description">Somos um grupo dedicado ao Taiko, a arte da percussão japonesa.</p>
      <nav class="sub-nav">
        <a routerLink="historia" data-i18n="about.nav.history">Nossa História</a>
        <a routerLink="valores" data-i18n="about.nav.values">Valores</a>
        <a routerLink="mascote" data-i18n="about.nav.mascot">Nosso Mascote</a>
        <a routerLink="membros" data-i18n="about.nav.members">Membros</a>
        <a routerLink="curriculo" data-i18n="about.nav.curriculum">Currículo</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class SobreComponent {}