import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-home',
  template: `
    <main class="main-section">
      <div class="content-row">
        <div class="image-content">
          <div class="circle-image crop-right">
            <img src="/assets/taiko1.jpg" alt="Taiko com diversidade">
          </div>
        </div>
        <div class="text-content">
          <h2>Taiko com diversidade</h2>
          <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </div>
      <div class="content-row reverse">
        <div class="image-content">
          <div class="circle-image crop-left">
            <img src="/assets/taiko1.jpg" alt="Levamos a tradição e cultura">
          </div>
        </div>
        <div class="text-content">
          <h2>Levamos a tradição e cultura</h2>
          <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </div>
    </main>

    <section class="featured-events">
      <h3>Próximas Apresentações:</h3>

      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div class="carousel-track">
            <div class="carousel-slide" *ngFor="let event of featuredEvents; let i = index" [class.active]="i === currentSlide">
              <div class="slide-image" [style.background-image]="'url(' + event.image + ')'"></div>
            </div>
          </div>

          <button class="carousel-btn prev" (click)="prevSlide()" aria-label="Slide anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>

          <button class="carousel-btn next" (click)="nextSlide()" aria-label="Próximo slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>

          <div class="carousel-indicators">
            <button *ngFor="let event of featuredEvents; let i = index" [class.active]="i === currentSlide" (click)="goToSlide(i)" aria-label="Ir para slide {{ i + 1 }}"></button>
          </div>
        </div>
      </div>

      <div class="event-info-container">
        <div class="event-info" *ngIf="featuredEvents[currentSlide]">
          <h4>{{ featuredEvents[currentSlide].title }}</h4>
          <div class="event-details">
            <span class="location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {{ featuredEvents[currentSlide].location }}
            </span>
            <span class="date">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {{ featuredEvents[currentSlide].date }}
            </span>
          </div>
          <a [href]="featuredEvents[currentSlide].link" class="event-btn" target="_blank">Ver Evento</a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  featuredEvents = [
    {
      title: 'Apresentação e oficinas de Taiko no Salão do Livro',
      location: 'Jardim externo do Centro Cultural Usiminas - Shopping do Vale do Aço - Ipatinga - MG',
      date: 'Domingo, 14 de Set às 10 às 12h',
      image: '/assets/taiko1.jpg',
      link: '#evento1'
    },
    {
      title: 'Apresentação e oficinas de taiko',
      location: 'praça de alimentação ( em frente ao restaurante Massume) - Shopping do Vale do Aço - Ipatinga - MG',
      date: 'Sábado, 4 de Out às 14 às 15h',
      image: '/assets/taiko1.jpg',
      link: '#evento2'
    },
    {
      title: 'Mostra de Taiko - Treino aberto e oficinas de taiko',
      location: 'Galpão 1 - Parque Ipanema - Ipatinga - MG',
      date: 'Sábado, 18 de Out às 13 às 17h',
      image: '/assets/taiko1.jpg',
      link: '#evento3'
    }
  ];

  private carouselInterval: any;

  ngOnInit(): void {
    this.startCarouselAutoplay();
    if (typeof window !== 'undefined') {
      this.preloadImages();
    }
  }

  private preloadImages() {
    if (typeof Image === 'undefined') return;
    this.featuredEvents.forEach(event => {
      const img = new Image();
      img.src = event.image;
    });
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.featuredEvents.length;
    this.resetAutoplay();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.featuredEvents.length - 1 : this.currentSlide - 1;
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