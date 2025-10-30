import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-projetos',
  template: `
    <div class="projetos-section">
      <h2>Nossos Projetos</h2>

      <!-- Top: dois banners lado a lado -->
      <div class="banners-top">
        <a class="banner" routerLink="/projetos/cenibra-1" aria-label="Projeto Cenibra 1">
          <img src="/assets/projetos.png" alt="Cenibra 1" />
          <div class="banner-caption">Cenibra 2025</div>
        </a>

        <a class="banner" routerLink="/projetos/cenibra-2" aria-label="Projeto Cenibra 2">
          <img src="/assets/projetos.png" alt="Cenibra 2" />
          <div class="banner-caption">Cenibra 2025</div>
        </a>
      </div>

      <!-- Espaçamento e banner centralizado abaixo -->
      <div class="banner-bottom">
        <a class="banner center" routerLink="/projetos/cenibra-3" aria-label="Projeto Cenibra 3">
          <img src="/assets/projetos.png" alt="Cenibra 3" />
          <div class="banner-caption">Taiko Vale do Aço Usiminas 2023/2024</div>
        </a>
      </div>
    </div>
  `
})
export class ProjetosComponent {}