import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-curriculo',
  template: `
    <div class="sobre-section">
      <h3>Currículo</h3>
      <div class="curriculo-timeline">
        <!-- Timeline de apresentações será adicionada aqui -->
        <p>Nossa trajetória e conquistas...</p>
      </div>
    </div>
  `
})
export class SobreCurriculoComponent {}