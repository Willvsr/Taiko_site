import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-galeria',
  template: `
    <div class="galeria-section">
      <h2>Galeria</h2>
      <div class="galeria-grid">
        <!-- Grid de imagens e vídeos será adicionado aqui -->
        <p>Em breve, aqui você encontrará nossa galeria de fotos e vídeos.</p>
      </div>
    </div>
  `
})
export class GaleriaComponent {}