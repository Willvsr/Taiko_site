import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-mascote',
  template: `
    <div class="sobre-mascote">
      <h1>O Mascote Don-chan</h1>
      
      <div class="mascote-content">
        <!-- Carrossel para as fotos do mascote -->
        <div class="carousel-container">
          <div class="carousel-wrapper">
            <div class="carousel-track">
              <div class="carousel-slide" *ngFor="let foto of fotosMascote; let i = index" [class.active]="i === currentSlide">
                <img [src]="foto.image" [alt]="foto.alt" class="slide-image-mascote">
              </div>
            </div>

            <button class="carousel-btn prev" (click)="prevSlide()" aria-label="Foto anterior">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>

            <button class="carousel-btn next" (click)="nextSlide()" aria-label="Próxima foto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>

            <div class="carousel-indicators">
              <button *ngFor="let foto of fotosMascote; let i = index" 
                      [class.active]="i === currentSlide" 
                      (click)="goToSlide(i)" 
                      aria-label="Ir para foto {{ i + 1 }}"></button>
            </div>
          </div>
        </div>

        <!-- Informações da foto atual -->
        <div class="foto-info" *ngIf="fotosMascote[currentSlide]">
          <h3>{{ fotosMascote[currentSlide].title }}</h3>
          <p>{{ fotosMascote[currentSlide].description }}</p>
        </div>
      </div>

      <div class="sobre-mascote-texto">
        <h2>Como nasceu a ideia</h2>
        <h3>Frase síntese</h3>
        <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      </div>

      <div class="sobre-mascote-texto">
        <h2>Criação</h2>
        <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      </div>
    </div>
  `
})
export class SobreMascoteComponent {
  currentSlide = 0;
  
  // Dados específicos para as fotos do mascote
  fotosMascote = [
    {
      title: 'Don-chan - Versão Final',
      description: 'O mascote oficial do grupo Ishindaiko',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png',
      alt: 'Mascote Don-chan versão final'
    },
    {
      title: 'Primeiro Esboço',
      description: 'Primeira concepção do Don-chan',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png',
      alt: 'Primeiro esboço do mascote'
    },
    {
      title: 'Evolução do Design',
      description: 'Processo de desenvolvimento do personagem',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png',
      alt: 'Evolução do design do mascote'
    },
    {
      title: 'Don-chan em Ação',
      description: 'O mascote durante apresentações',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png',
      alt: 'Mascote em apresentação'
    }
  ];

  private carouselInterval: any;

  ngOnInit(): void {
    this.startCarouselAutoplay();
    this.preloadImages();
  }

  private preloadImages() {
    this.fotosMascote.forEach(foto => {
      const img = new Image();
      img.src = foto.image;
    });
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.fotosMascote.length;
    this.resetAutoplay();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.fotosMascote.length - 1 : this.currentSlide - 1;
    this.resetAutoplay();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoplay();
  }

  private startCarouselAutoplay() {
    this.carouselInterval = setInterval(() => this.nextSlide(), 5000);
  }

  private resetAutoplay() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.startCarouselAutoplay();
    }
  }
}