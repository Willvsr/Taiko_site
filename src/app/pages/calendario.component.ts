import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-calendario',
  template: `
    <div class="calendario-section">
      <h2>Calendário de Eventos</h2>
      <div class="calendario-content">
        <!-- Adicionar calendário ou lista de eventos -->
        <div class="eventos-lista">
          <p>Em breve, aqui você encontrará nosso calendário completo de eventos e apresentações.</p>
        </div>
      </div>
    </div>
  `
})
export class CalendarioComponent {}