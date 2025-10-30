import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-mascote',
  template: `
    <div class="sobre-mascote">
      <!-- Topo da página -->
      <h1>O Mascote Don-chan</h1>
      
      <!-- Seção Como Nasceu a Ideia -->
      <div class="ideia-section">
        <div class="ideia-content">
          <div class="ideia-texto">
            <h2>Como nasceu a ideia</h2>
            <h3>Frase síntese</h3>
            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
          <div class="ideia-imagem">
            <img src="https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png" alt="Mascote Don-chan" class="don-chan-img">
          </div>
        </div>
      </div>

      <!-- Seção Criação -->
      <div class="criacao-section">
        <h2>Criação</h2>
        <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        
        <!-- Carrossel melhorado -->
        <div class="carousel-container">
          <div class="carousel-wrapper">
            <div class="carousel-track">
              <div class="carousel-slide" *ngFor="let foto of fotosMascote; let i = index" [class.active]="i === currentSlide">
                <img [src]="foto.image" [alt]="foto.alt" class="slide-image-mascote">
                <div class="slide-overlay">
                  <h3>{{ foto.title }}</h3>
                </div>
              </div>
            </div>

            <!-- Botões do carrossel melhorados -->
            <button class="carousel-btn prev" (click)="prevSlide()" aria-label="Foto anterior">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <button class="carousel-btn next" (click)="nextSlide()" aria-label="Próxima foto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            <!-- Indicadores melhorados -->
            <div class="carousel-indicators">
              <button *ngFor="let foto of fotosMascote; let i = index" 
                      [class.active]="i === currentSlide" 
                      (click)="goToSlide(i)" 
                      aria-label="Ir para foto {{ i + 1 }}">
                <span class="indicator-progress"></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Informações da foto atual do carrossel -->
        <div class="foto-info" *ngIf="fotosMascote[currentSlide]">
          <p>{{ fotosMascote[currentSlide].description }}</p>
        </div>
      </div>

      <!-- Nova Seção: História do Personagem -->
      <div class="historia-section">
        <h2>História do personagem</h2>
        <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        
        <div class="historia-imagens">
          <div class="historia-img-container">
            <img src="https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png" alt="História 1 do Don-chan" class="historia-img">
            <div class="img-overlay">
            </div>
          </div>
          <div class="historia-img-container">
            <img src="https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png" alt="História 2 do Don-chan" class="historia-img">
            <div class="img-overlay">
            </div>
          </div>
          <div class="historia-img-container">
            <img src="https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png" alt="História 3 do Don-chan" class="historia-img">
            <div class="img-overlay">
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SobreMascoteComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  
  fotosMascote = [
    {
      title: '',
      description: '',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png',
      alt: 'Primeiro esboço do mascote'
    },
    {
      title: '',
      description: '',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png',
      alt: 'Evolução do design do mascote'
    },
    {
      title: '',
      description: '',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png',
      alt: 'Versões intermediárias do mascote'
    },
    {
      title: '',
      description: '',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/Desenho-don-chan.png',
      alt: 'Mascote Don-chan versão final'
    }
  ];

  private carouselInterval: any;

  ngOnInit(): void {
    this.startCarouselAutoplay();
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