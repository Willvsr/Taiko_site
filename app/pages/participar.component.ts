import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-participar',
  template:`
  <div class="sobre-title">
    <h1>Como Participar</h1>
  </div>
  <div class="participar-container">
  <main class="participar-content">
    <div class="content-wrapper">
      <div class="image-section">
        <img src="https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png" alt="Pessoas com máscaras de dragão">
      </div>
      
      <div class="info-section">
        <div class="info-box">
          <div class="event-info">
            <h3>Sábado 13:30</h3>
            <h3>Venha tocar taiko com a gente!</h3>
            
            <div class="requirements">
              <h4>Requisitos:</h4>
              <ul>
                <li>Vir alimentado</li>
                <li>Vestir roupas leves</li>
                <li>Trazer garrafa de água</li>
              </ul>
            </div>
            
            <div class="location">
              <h4>Localização:</h4>
              <p>Rua Suíça, 36, Cariru, Ipatinga - MG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>`
})
export class ParticiparComponent {}