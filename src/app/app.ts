import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kouryuu_site');
  isMenuOpen = false;
  menuItems = [
    { label: 'Sobre nós', href: '#sobre', active: true },
    { label: 'Projetos', href: '#projetos', active: false },
    { label: 'Contato', href: '#contato', active: false },
    { label: 'Calendário', href: '#calendario', active: false },
    { label: 'Como participar', href: '#participar', active: false },
    { label: 'Galeria', href: '#galeria', active: false },
    { label: 'Apoie', href: '#apoie', active: false }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  setActiveItem(index: number): void {
    // Reset todos os itens
    this.menuItems.forEach(item => item.active = false);
    // Ativa o item clicado
    this.menuItems[index].active = true;
    // Fecha o menu mobile
    this.closeMenu();
  }
}