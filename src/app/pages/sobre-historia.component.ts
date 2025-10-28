import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-historia',
  template: `
    <div class="sobre-section">
      <h3>Nossa História</h3>
      <p>A história do Ishindaiko começou com um grupo de entusiastas...</p>
      <!-- Adicionar conteúdo real da história -->
    </div>
  `
})
export class SobreHistoriaComponent {}