import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface para tipar nossos itens de FAQ
interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-contato-duvidas',
  standalone: true,
  imports: [CommonModule],
  template:`
    <div class="duvidas-section">
      <h3>Dúvidas Frequentes</h3>
      <div class="faq-list">
        <!-- Itera sobre cada item do array de FAQs -->
        <div class="faq-item" *ngFor="let faq of faqs; let i = index">
          <!-- Cabeçalho da pergunta, clicável -->
          <div class="faq-question" (click)="toggleQuestion(i)">
            <h4>{{ faq.question }}</h4>
            <!-- A seta que gira com base no estado ativo -->
            <span class="arrow-icon" [class.rotated]="activeIndex === i"></span>
          </div>
          
          <!-- Container da resposta, que é exibido com base no estado ativo -->
          <div class="faq-answer" [class.active]="activeIndex === i">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ContatoDuvidasComponent {
  faqs: FaqItem[] = [
    {
      question: 'Como faço para participar?',
      answer: 'Basta ir até à sede da ANBI aos sábados às 14h e falar com um dos instrutores. Eles irão te orientar sobre o processo de inscrição e o que esperar na sua primeira aula.'
    },
    {
      question: 'O que eu preciso para participar?',
      answer: 'Para participar, recomendamos vestir roupas confortáveis para praticar atividades físicas. Para a primeira aula experimental, não é necessário trazer nenhum equipamento, nós fornecemos tudo o que é preciso.'
    },
    {
      question: 'Quais são os horários das aulas?',
      answer: 'Os treinos acontecem aos sábados, das 14h às 17h.'
    },
    {
      question: 'Existe idade mínima para iniciar?',
      answer: 'Aceitamos alunos a partir dos 6 anos em nossas turmas infantis. Para adultos e jovens, não há limite de idade para começar. O Taiko é uma atividade para todas as idades!'
    },
    {
      question: 'Qual o valor da mensalidade?',
      answer: 'Não há mensalidade. O Kouryuu Daiko funciona com base em projetos e doações voluntárias dos praticantes e simpatizantes. Sinta-se à vontade para contribuir conforme suas possibilidades.'
    }
  ];

  activeIndex: number = 0;

  toggleQuestion(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}