import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-calendario',
  template: `
  <div class="sobre-title">
    <h1>Calendário</h1>
  </div>
    <div class="calendar-container">
      <div class="calendar-section">
        <div class="calendar-header">
          <button (click)="previousMonth()" class="nav-button">&lt;</button>
          
          <div class="month-year-selector">
            <select [(ngModel)]="currentMonth" (change)="generateCalendarDays()" class="month-select">
              <option *ngFor="let month of monthNames; let i = index" [value]="i">{{ month }}</option>
            </select>
            
            <select [(ngModel)]="currentYear" (change)="generateCalendarDays()" class="year-select">
              <option *ngFor="let year of years" [value]="year">{{ year }}</option>
            </select>
          </div>
          
          <button (click)="nextMonth()" class="nav-button">&gt;</button>
        </div>
        <div class="calendar-grid">
          <div class="day-header" *ngFor="let day of daysOfWeek">{{ day }}</div>
          <div 
            *ngFor="let day of calendarDays" 
            class="calendar-day"
            [class.has-event]="day.hasEvent"
            [class.today]="day.isToday"
            [class.other-month]="!day.isCurrentMonth"
            (click)="selectDate(day)">
            <span class="day-number">{{ day.date }}</span>
          </div>
        </div>
      </div>
      
      <div class="events-section">
        <h3>Próximos eventos</h3>
        
        <!-- Lista de eventos -->
        <div *ngIf="!selectedEvent" class="events-list">
          <div 
            *ngFor="let event of upcomingEvents" 
            class="event-item"
            (click)="selectEvent(event)">
            <div class="event-date">{{ event.date }}</div>
            <div class="event-details">
              <h4>{{ event.title }}</h4>
              <p>{{ event.location }}</p>
            </div>
          </div>
        </div>
        
        <!-- Detalhes do evento selecionado -->
        <div *ngIf="selectedEvent" class="event-detail-card">
          <div class="event-detail-content">
            <div class="event-image">
              <img src="assets/Rectangle 48.png" alt="Imagem do Evento">
            </div>
            <div class="event-info">
              <h3>{{ selectedEvent.title }}</h3>
              <div class="event-details">
                <p><strong>Data:</strong> {{ selectedEvent.date }}</p>
                <p><strong>Horário:</strong> {{ selectedEvent.time }}</p>
                <p><strong>Local:</strong> {{ selectedEvent.location }}</p>
                <p><strong>Endereço:</strong> {{ selectedEvent.address }}</p>
              </div>
              <div class="event-description">
                <p>{{ selectedEvent.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="calendar-sync">
          <button (click)="syncWithGoogleCalendar()" class="sync-button">
            Sincronizar com Google Calendar
          </button>
          <div *ngIf="syncMessage" class="sync-message">{{ syncMessage }}</div>
        </div>
      </div>
    </div>
  `
})
export class CalendarioComponent implements OnInit {
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  selectedDate: Date = new Date();
  calendarDays: any[] = [];
  daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
                'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  years: number[] = [];
  syncMessage: string = '';
  selectedEvent: any = null;
  
  upcomingEvents = [
    {
      id: 1,
      date: '02/Jun',
      time: '14:00 - 18:00',
      title: 'Salão do livro',
      location: 'Parque São Domingos',
      address: 'Rua das Flores, 123 - São Paulo',
      description: 'Venha participar do nosso salão do livro, onde apresentaremos obras de autores locais e internacionais. Teremos sessões de autógrafos, palestras e atividades para todas as idades.',
      fullDate: new Date(2025, 5, 2)
    },
    {
      id: 2,
      date: '14/Jun',
      time: '19:00 - 21:30',
      title: 'Apresentação Cultural',
      location: 'Centro Cultural',
      address: 'Av. Cultural, 456 - São Paulo',
      description: 'Uma noite incrível de apresentações culturais, incluindo música, dança e teatro. Nossos alunos irão demonstrar tudo o que aprenderam durante o semestre.',
      fullDate: new Date(2025, 5, 14)
    },
    {
      id: 3,
      date: '25/Jun',
      time: '13:30 - 17:00',
      title: 'Workshop de Taiko',
      location: 'ANBI',
      address: 'Rua Suíça, 36 - Alto da Boa Vista, São Paulo',
      description: 'Aprenda as técnicas básicas do Taiko tradicional japonês. Este workshop é aberto a todos os interessados, independentemente da experiência prévia. Venha sentir a energia dos tambores!',
      fullDate: new Date(2025, 5, 25)
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 5; i <= currentYear + 10; i++) {
      this.years.push(i);
    }
    
    this.generateCalendarDays();
  }

  get monthName() {
    return this.monthNames[this.currentMonth];
  }

  generateCalendarDays() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();
    const today = new Date();
    
    this.calendarDays = [];
    
    // Adicionar dias do mês anterior
    for (let i = firstDay - 1; i >= 0; i--) {
      this.calendarDays.push({ 
        date: daysInPrevMonth - i, 
        isCurrentMonth: false,
        isToday: false,
        hasEvent: false
      });
    }
    
    // Adicionar todos os dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.currentYear, this.currentMonth, i);
      const isToday = date.toDateString() === today.toDateString();
      
      // Verificar se há eventos neste dia
      const eventsOnThisDay = this.upcomingEvents.filter(event => 
        event.fullDate.toDateString() === date.toDateString()
      );
      
      const hasEvent = eventsOnThisDay.length > 0;
      
      this.calendarDays.push({
        date: i,
        isCurrentMonth: true,
        isToday,
        hasEvent,
        events: eventsOnThisDay // Adicionar eventos ao dia
      });
    }
    
    // Adicionar dias do próximo mês para completar a grade
    const totalCells = this.calendarDays.length;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    
    for (let i = 1; i <= remainingCells; i++) {
      this.calendarDays.push({ 
        date: i, 
        isCurrentMonth: false,
        isToday: false,
        hasEvent: false
      });
    }
  }

  previousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendarDays();
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendarDays();
  }

  selectDate(day: any) {
    if (day.isCurrentMonth) {
      this.selectedDate = new Date(this.currentYear, this.currentMonth, day.date);
      
      // Se o dia tiver eventos, selecionar o primeiro evento
      if (day.hasEvent && day.events && day.events.length > 0) {
        this.selectEvent(day.events[0]);
      }
    }
  }

  selectEvent(event: any) {
    this.selectedEvent = event;
  }

  clearSelectedEvent() {
    this.selectedEvent = null;
  }

  syncWithGoogleCalendar() {
    this.syncMessage = 'Sincronização iniciada...';
    
    setTimeout(() => {
      this.syncMessage = 'Eventos sincronizados com sucesso!';
      
      setTimeout(() => {
        this.syncMessage = '';
      }, 3000);
    }, 1500);
  }
}