import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-mascote',
  template: `
    <div class="sobre-section">
      <h3>Nosso Mascote</h3>
      <div class="mascote-content">
        <img src="/assets/mascote.jpg" alt="Mascote do Ishindaiko" *ngIf="false">
        <p>Conheça nosso mascote e sua história...</p>
      </div>
    </div>
  `
})
export class SobreMascoteComponent {}