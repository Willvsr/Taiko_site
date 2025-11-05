import { Component, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationStart } from '@angular/router';
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
    { key: 'home', label: 'Home', href: '/', active: true },
    { key: 'about', label: 'Sobre nós', href: '/sobre', active: false, isOpen: false,
      submenu: [
      { key: 'history', label: 'História', href: '/sobre/historia' },
      { key: 'mission', label: 'Missão e valores', href: '/sobre/valores' },
      { key: 'mascot', label: 'O Mascote', href: '/sobre/mascote' },
      { key: 'members', label: 'Membros', href: '/sobre/membros' },
      { key: 'curriculum', label: 'Currículo', href: '/sobre/curriculo' },
    ]
     },
    { key: 'projects', label: 'Projetos', href: '/projetos', active: false },
    { key: 'contact', label: 'Contato', href: '/contato', active: false, isOpen: false,
      submenu: [
      { key: 'contact.offices', label: 'Solicitar apresentação / oficinas', href: '/contato/oficinas' },
      { key: 'contact.questions', label: 'Dúvidas', href: '/contato/duvidas' },
      { key: 'contact.talk', label: 'Fale conosco', href: '/contato/fale' },
    ]
     },
    { key: 'participate', label: 'Como participar', href: '/participar', active: false },
    { key: 'calendar', label: 'Calendário', href: '/calendario', active: false },
    { key: 'gallery', label: 'Galeria', href: '/galeria', active: false },
    { key: 'support', label: 'Apoie', href: '/apoie', active: false }
  ];

  // Language / i18n
  languageLabels: any = {
    pt: 'Português',
    en: 'English',
    es: 'Español',
    ja: '日本語'
  };

  translations: any = {
    pt: {
      // Menu items
      home: 'Início',
      about: 'Sobre nós',
      history: 'História',
      mission: 'Missão e valores',
      mascot: 'O Mascote',
      members: 'Membros',
      curriculum: 'Currículo',
      projects: 'Projetos',
      contact: 'Contato',
      'contact.offices': 'Solicitar apresentação / oficinas',
      'contact.questions': 'Dúvidas',
      'contact.talk': 'Fale conosco',
      participate: 'Como participar',
      calendar: 'Calendário',
      gallery: 'Galeria',
      support: 'Apoie',

      // About section
      'about.title': 'Sobre o Kouryuu Daiko',
      'about.description': 'Somos um grupo dedicado ao Taiko, a arte da percussão japonesa.',
      'about.nav.history': 'Nossa História',
      'about.nav.values': 'Valores',
      'about.nav.mascot': 'Nosso Mascote',
      'about.nav.members': 'Membros',
      'about.nav.curriculum': 'Currículo',

      // Values section
      'values.title': 'Missão e Valores',
      'values.mission.title': 'Missão',
      'values.mission.subtitle': 'Frase síntese',
      'values.core.title': 'Valores',
      'values.core.subtitle': 'Frase síntese',
      'values.vision.title': 'Visão',
      'values.vision.subtitle': 'Frase síntese',

      // History section
      'history.title': 'História',
      'history.events.tanabata.title': 'Tanabata Matsuri',
      'history.events.consul.title': 'Apresentação ao consul',
      'history.events.theater.title': 'Apresentação teatro',
      'history.events.start.title': 'Projeto iniciado'
    },
    en: {
      // Menu items
      home: 'Home',
      about: 'About us',
      history: 'History',
      mission: 'Mission & values',
      mascot: 'Mascot',
      members: 'Members',
      curriculum: 'Curriculum',
      projects: 'Projects',
      contact: 'Contact',
      'contact.offices': 'Request performance / workshops',
      'contact.questions': 'Questions',
      'contact.talk': 'Get in touch',
      participate: 'How to join',
      calendar: 'Calendar',
      gallery: 'Gallery',
      support: 'Support us',

      // About section
      'about.title': 'About Kouryuu Daiko',
      'about.description': 'We are a group dedicated to Taiko, the art of Japanese percussion.',
      'about.nav.history': 'Our History',
      'about.nav.values': 'Values',
      'about.nav.mascot': 'Our Mascot',
      'about.nav.members': 'Members',
      'about.nav.curriculum': 'Curriculum',

      // Values section
      'values.title': 'Mission & Values',
      'values.mission.title': 'Mission',
      'values.mission.subtitle': 'Core statement',
      'values.core.title': 'Values',
      'values.core.subtitle': 'Core statement',
      'values.vision.title': 'Vision',
      'values.vision.subtitle': 'Core statement',

      // History section
      'history.title': 'History',
      'history.events.tanabata.title': 'Tanabata Matsuri',
      'history.events.consul.title': 'Consul Presentation',
      'history.events.theater.title': 'Theater Performance',
      'history.events.start.title': 'Project Started'
    },
    es: {
      // Menu items
      home: 'Inicio',
      about: 'Sobre nosotros',
      history: 'Historia',
      mission: 'Misión y valores',
      mascot: 'La Mascota',
      members: 'Miembros',
      curriculum: 'Currículo',
      projects: 'Proyectos',
      contact: 'Contacto',
      'contact.offices': 'Solicitar presentación / talleres',
      'contact.questions': 'Dudas',
      'contact.talk': 'Contáctanos',
      participate: 'Cómo participar',
      calendar: 'Calendario',
      gallery: 'Galería',
      support: 'Apóyanos',

      // About section
      'about.title': 'Sobre Kouryuu Daiko',
      'about.description': 'Somos un grupo dedicado al Taiko, el arte de la percusión japonesa.',
      'about.nav.history': 'Nuestra Historia',
      'about.nav.values': 'Valores',
      'about.nav.mascot': 'Nuestra Mascota',
      'about.nav.members': 'Miembros',
      'about.nav.curriculum': 'Currículo',

      // Values section
      'values.title': 'Misión y Valores',
      'values.mission.title': 'Misión',
      'values.mission.subtitle': 'Declaración principal',
      'values.core.title': 'Valores',
      'values.core.subtitle': 'Declaración principal',
      'values.vision.title': 'Visión',
      'values.vision.subtitle': 'Declaración principal',

      // History section
      'history.title': 'Historia',
      'history.events.tanabata.title': 'Tanabata Matsuri',
      'history.events.consul.title': 'Presentación al cónsul',
      'history.events.theater.title': 'Presentación en teatro',
      'history.events.start.title': 'Inicio del proyecto'
    },
    ja: {
      // Menu items
      home: 'ホーム',
      about: '私たちについて',
      history: '歴史',
      mission: 'ミッションと価値観',
      mascot: 'マスコット',
      members: 'メンバー',
      curriculum: '履歴',
      projects: 'プロジェクト',
      contact: 'お問い合わせ',
      'contact.offices': '公演/ワークショップの依頼',
      'contact.questions': 'よくある質問',
      'contact.talk': 'お問い合わせ',
      participate: '参加方法',
      calendar: 'カレンダー',
      gallery: 'ギャラリー',
      support: 'サポート',

      // About section
      'about.title': '紅龍太鼓について',
      'about.description': '私たちは和太鼓、日本の打楽器芸術に専念するグループです。',
      'about.nav.history': '私たちの歴史',
      'about.nav.values': '価値観',
      'about.nav.mascot': 'マスコット',
      'about.nav.members': 'メンバー',
      'about.nav.curriculum': '活動実績',

      // Values section
      'values.title': 'ミッションと価値観',
      'values.mission.title': 'ミッション',
      'values.mission.subtitle': '基本理念',
      'values.core.title': '価値観',
      'values.core.subtitle': '基本理念',
      'values.vision.title': 'ビジョン',
      'values.vision.subtitle': '基本理念',

      // History section
      'history.title': '歴史',
      'history.events.tanabata.title': '七夕祭り',
      'history.events.consul.title': '領事館での公演',
      'history.events.theater.title': '劇場公演',
      'history.events.start.title': 'プロジェクト開始'
    }
  };

  currentLang: string = 'pt';
  langMenuOpen = false;
  mobileLangOpen = false;

  // Subscription para eventos de rota
  private routerSubscription: any;

  constructor(private router: Router) {}

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

  // Language selector handlers
  toggleLangMenu(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    // close other submenus
    this.closeAllSubmenus();
    this.langMenuOpen = !this.langMenuOpen;
  }

  toggleMobileLang(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.mobileLangOpen = !this.mobileLangOpen;
  }

  setLanguage(lang: string): void {
    if (!lang) return;
    this.currentLang = lang;
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('site_lang', lang);
      }
    } catch (e) {
      // ignore storage failures
    }
    // Apply translations to menu items and any data-i18n attributes
    this.applyTranslations();
    this.translateDataAttributes();
    // close language menus
    this.langMenuOpen = false;
    this.mobileLangOpen = false;
  }

  applyTranslations(): void {
    const map = this.translations[this.currentLang] || {};
    this.menuItems.forEach((item: any) => {
      if (item.key && map[item.key]) {
        item.label = map[item.key];
      }
      if (item.submenu && Array.isArray(item.submenu)) {
        item.submenu.forEach((sub: any) => {
          const subKey = sub.key;
          if (subKey && map[subKey]) {
            sub.label = map[subKey];
          }
        });
      }
    });
  }

  translateDataAttributes(): void {
    if (typeof document === 'undefined') return;
    const map = this.translations[this.currentLang] || {};
    const els = Array.from(document.querySelectorAll('[data-i18n]')) as HTMLElement[];
    els.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && map[key]) {
        el.textContent = map[key];
      }
    });
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
    // Load saved language preference (if any) and apply translations
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem('site_lang');
        if (saved && this.translations[saved]) {
          this.currentLang = saved;
        }
      }
    } catch (e) {
      // ignore localStorage access errors
    }
    // Apply translated menu labels and any data-i18n elements
    this.applyTranslations();
    // Wait a tick for DOM when running in browser to ensure elements exist
    setTimeout(() => this.translateDataAttributes(), 0);
    // Fecha submenus quando a rota mudar (ex.: navegação via router)
    if (this.router) {
      this.routerSubscription = this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationStart) {
          this.closeAllSubmenus();
          this.closeMenu();
        }
      });
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
    // Unsubscribe router
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
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