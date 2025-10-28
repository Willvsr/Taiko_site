import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-valores',
  template: `
    <div class="sobre-section">
      <h3>Nossos Valores</h3>
      <ul>
        <li>Respeito às tradições</li>
        <li>Dedicação ao aprendizado</li>
        <li>Harmonia em grupo</li>
        <li>Compromisso com a excelência</li>
      </ul>
    </div>
  `
})
export class SobreValoresComponent {}