import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-sobre-membros',
  imports: [CommonModule],
  template: `
  <h1 class="membros-title">Membros</h1>
    <section class="membros-section">

      <div class="membros-banner">
        <img src="/assets/reuniao.jpg" alt="Reunião do grupo">
      </div>

      <div class="membro-card">
        <img src="/assets/keiko.jpg" alt="Elizabeth Keiko Takahashi" class="membro-foto">
        <div class="membro-texto">
          <h3><span>Elizabeth Keiko Takahashi - Líder</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
        </div>
      </div>

      <div class="membro-card">
        <img src="/assets/william.jpg" alt="William Vicente Santos Rodrigues" class="membro-foto">
        <div class="membro-texto">
          <h3><span>William Vicente Santos Rodrigues - Vice líder</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
        </div>
      </div>

      <div class="membro-card">
        <img src="/assets/erica.jpg" alt="Érica Amarante Carattiero" class="membro-foto">
        <div class="membro-texto">
          <h3><span>Érica Amarante Carattiero - Coordenadora</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
        </div>
      </div>

      <div class="membros-final">
        <h1>Membros</h1>
        <img src="/assets/grupo.jpg" alt="Grupo Kouryuu Daiko">
      </div>
    </section>
  `
})
export class SobreMembrosComponent {}
