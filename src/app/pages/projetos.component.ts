import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-projetos',
  template: `
    <div class="projetos-section">
      <h2>Nossos Projetos</h2>
      <div class="projetos-grid">
        <!-- Grid de projetos será adicionado aqui -->
        <p>Conheça nossos projetos e iniciativas...</p>
      </div>
    </div>
  `
})
export class ProjetosComponent {}