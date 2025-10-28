import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-contato-duvidas',
  template: `
    <div class="duvidas-section">
      <h3>Dúvidas Frequentes</h3>
      <div class="faq-list">
        <!-- Adicionar lista de perguntas frequentes -->
        <div class="faq-item">
          <h4>Como começar no Taiko?</h4>
          <p>Você pode começar participando de nossas oficinas introdutórias...</p>
        </div>
      </div>
    </div>
  `
})
export class ContatoDuvidasComponent {}