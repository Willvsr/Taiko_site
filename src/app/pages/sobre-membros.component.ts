import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-membros',
  template: `
    <div class="sobre-section">
      <h3>Nossos Membros</h3>
      <div class="membros-grid">
        <!-- Grid de membros será adicionado aqui -->
        <p>Conheça nossa equipe...</p>
      </div>
    </div>
  `
})
export class SobreMembrosComponent {}