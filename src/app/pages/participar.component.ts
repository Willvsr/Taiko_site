import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-participar',
  template: `
    <div class="participar-section">
      <h2>Como Participar</h2>
      <div class="participar-content">
        <section>
          <h3>Treinamentos</h3>
          <p>Informações sobre horários e locais de treinamento...</p>
        </section>
        <section>
          <h3>Requisitos</h3>
          <ul>
            <li>Dedicação</li>
            <li>Comprometimento</li>
            <li>Espírito de equipe</li>
          </ul>
        </section>
      </div>
    </div>
  `
})
export class ParticiparComponent {}