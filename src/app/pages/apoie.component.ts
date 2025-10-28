import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-apoie',
  template: `
    <div class="apoie-section">
      <h2>Apoie o Kouryuu Daiko</h2>
      <div class="apoie-content">
        <section>
          <h3>Como Apoiar</h3>
          <p>Existem várias formas de apoiar nosso trabalho...</p>
        </section>
        <section>
          <h3>Seja um Parceiro</h3>
          <p>Informações para empresas e instituições interessadas em parcerias...</p>
        </section>
      </div>
    </div>
  `
})
export class ApoieComponent {}