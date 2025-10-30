import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-galeria',
  template: `
    <div class="galeria-container">
      <div class="galeria-header">
        <h2>Galeria</h2>
        <select class="year-selector">
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
      
      <div class="galeria-content">
        <div class="galeria-grid">
          <div 
            *ngFor="let item of galeriaItems; let i = index" 
            class="galeria-item"
            [class.active]="selectedItem === i"
            (click)="selectItem(i)">
            <img [src]="item.src" [alt]="item.alt" />
          </div>
        </div>
        
        <div class="dragon-illustration">
          <img src="https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png" alt="Dragão" />
        </div>
      </div>
      
      <!-- Modal para visualização ampliada -->
      <div *ngIf="selectedItem !== null" class="modal-overlay" (click)="closeModal()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <button class="close-button" (click)="closeModal()">&times;</button>
          <img [src]="galeriaItems[selectedItem].src" [alt]="galeriaItems[selectedItem].alt" />
          <div class="modal-info">
            <h3>{{ galeriaItems[selectedItem].title }}</h3>
            <p>{{ galeriaItems[selectedItem].description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class GaleriaComponent {
  selectedItem: number | null = null;
  
  galeriaItems = [
    {
      src: 'https://picsum.photos/seed/galeria1/400/400.jpg',
      alt: 'Imagem da galeria 1',
      title: 'Evento Cultural',
      description: 'Apresentação cultural no centro da cidade.'
    },
    {
      src: 'https://picsum.photos/seed/galeria2/400/400.jpg',
      alt: 'Imagem da galeria 2',
      title: 'Workshop de Taiko',
      description: 'Participantes aprendendo técnicas de Taiko.'
    },
    {
      src: 'https://picsum.photos/seed/galeria3/400/400.jpg',
      alt: 'Imagem da galeria 3',
      title: 'Salão do Livro',
      description: 'Visitantes explorando os livros disponíveis.'
    },
    {
      src: 'https://picsum.photos/seed/galeria4/400/400.jpg',
      alt: 'Imagem da galeria 4',
      title: 'Festival Cultural',
      description: 'Celebração da diversidade cultural.'
    },
    {
      src: 'https://picsum.photos/seed/galeria5/400/400.jpg',
      alt: 'Imagem da galeria 5',
      title: 'Exposição de Arte',
      description: 'Obras de artistas locais em exposição.'
    },
    {
      src: 'https://picsum.photos/seed/galeria6/400/400.jpg',
      alt: 'Imagem da galeria 6',
      title: 'Apresentação de Dança',
      description: 'Grupo de dança tradicional apresentando.'
    }
  ];
  
  selectItem(index: number) {
    this.selectedItem = index;
  }
  
  closeModal() {
    this.selectedItem = null;
  }
}