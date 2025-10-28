import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-contato-oficinas',
  template: `
    <div class="oficinas-section">
      <h3>Oficinas</h3>
      <div class="oficinas-info">
        <h4>Participe de nossas oficinas</h4>
        <p>Oferecemos oficinas introdutórias ao Taiko para todas as idades...</p>
        <!-- Adicionar informações das oficinas -->
      </div>
    </div>
  `
})
export class ContatoOficinasComponent {}