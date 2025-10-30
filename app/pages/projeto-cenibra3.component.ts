import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-projeto-cenibra3',
  template: `
    <div class="projeto-section">
      <h1>Projeto Taiko Vale do Aço</h1>

      <div class="projeto-banner">
        <img src="/assets/projetos2.png" alt="Imagem do projeto Taiko Vale do Aço" />
      </div>

      <div class="projeto-descricao">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
          Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
        </p>
        <p>
          Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
        </p>
      </div>

      <div class="projeto-parceiros">
        <div class="grupo">
          <div class="logos">
            <img src="/assets/patrociniovaledoaco.png" alt="patrociniovaledoaco" />
        </div>


      <div class="voltar">
        <a routerLink="/projetos">← Voltar para projetos</a>
      </div>
    </div>
  `
})
export class ProjetoCenibra3Component {}
