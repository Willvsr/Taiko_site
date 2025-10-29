import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('kouryuu_site');
  isMenuOpen = false;
  menuItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'Sobre nós', href: '/sobre', active: false, isOpen: false,
      submenu: [
      { label: 'História', href: '/sobre/historia' },
      { label: 'Missão e valores', href: '/sobre/valores' },
      { label: 'O Mascote', href: '/sobre/mascote' },
      { label: 'Membros', href: '/sobre/membros' },
      { label: 'Currículo', href: '/sobre/curriculo' },
    ]
     },
    { label: 'Projetos', href: '/projetos', active: false },
    { label: 'Contato', href: '/contato', active: false, isOpen: false,
      submenu: [
      { label: 'Solicitar apresentação / oficinas', href: '/contato/oficinas' },
      { label: 'Dúvidas', href: '/contato/duvidas' },
      { label: 'Fale conosco', href: '/contato/fale' },
    ]
     },
    { label: 'Como participar', href: '/participar', active: false },
    { label: 'Calendário', href: '/calendario', active: false },
    { label: 'Galeria', href: '/galeria', active: false },
    { label: 'Apoie', href: '/apoie', active: false }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (typeof document !== 'undefined' && document && document.body) {
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    if (typeof document !== 'undefined' && document && document.body) {
      document.body.style.overflow = 'auto';
    }
  }

  setActiveItem(index: number): void {
    // Reset todos os itens
    this.menuItems.forEach(item => item.active = false);
    // Ativa o item clicado
    this.menuItems[index].active = true;
    // Fecha o menu mobile
    this.closeMenu();
  }
toggleSubmenu(item: any, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    
    // Fecha outros submenus abertos
    this.menuItems.forEach(menuItem => {
      if (menuItem !== item && menuItem.isOpen) {
        menuItem.isOpen = false;
      }
    });
    
    // Alterna o submenu atual
    if (item.submenu) {
      item.isOpen = !item.isOpen;
    }
  }

  closeAllSubmenus(): void {
    this.menuItems.forEach(item => {
      item.isOpen = false;
    });
  }

  // Propriedades do carousel
  currentSlide = 0;
  featuredEvents = [
    {
      title: 'Apresentação e oficinas de Taiko no Salão do Livro',
      location: 'Jardim externo do Centro Cultural Usiminas - Shopping do Vale do Aço - Ipatinga - MG',
      date: 'Domingo, 14 de Set às 10 às 12h',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/taiko1.jpg',
      link: '#evento1'
    },
    {
      title: 'Apresentação e oficinas de taiko',
      location: 'praça de alimentação ( em frente ao restaurante Massume) - Shopping do Vale do Aço - Ipatinga - MG',
      date: 'Sábado, 4 de Out às 14 às 15h',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/taiko1.jpg',
      link: '#evento2'
    },
    {
      title: 'Mostra de Taiko - Treino aberto e oficinas de taiko',
      location: 'Galpão 1 - Parque Ipanema - Ipatinga - MG',
      date: 'Sábado, 18 de Out às 13 às 17h',
      image: 'https://raw.githubusercontent.com/Willvsr/Taiko_site/refs/heads/master/src/assets/taiko1.jpg',
      link: '#evento3'
    }
  ];

  private carouselInterval: any;

  ngOnInit() {
    // Iniciar auto-play do carousel
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

  ngOnDestroy() {
    // Limpar interval quando o componente for destruído
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  // Métodos do carousel
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.featuredEvents.length;
    this.resetAutoplay();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 
      ? this.featuredEvents.length - 1 
      : this.currentSlide - 1;
    this.resetAutoplay();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoplay();
  }

  private startCarouselAutoplay() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Muda slide a cada 5 segundos
  }

  private resetAutoplay() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.startCarouselAutoplay();
    }
  }
}