import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-curriculo',
  template: `
    <h1 class="curriculo-title">Currículo</h1>
    <section class="curriculo-section">
  <!-- Seção Apresentações -->
  <div class="curriculo-bloco">
    <h2 class="subtitulo-vermelho-cima">Apresentações</h2>

    <div class="conteudo">
      <div class="texto">
        <h4>2024</h4>
        <ul>
          <li><strong>22 junho</strong> - Feira Oriental na sede da ANBI em Ipatinga/MG.</li>
          <li><strong>11 julho</strong> - Abertura dos 60 anos da Corporação Santa Cecília - Teatro do Centro Cultural Usiminas Shopping do Vale do Aço em Ipatinga/MG.</li>
          <li><strong>14 setembro</strong> - Festival de Taiko Especial Bon Odori na sede da ANBI em Ipatinga/MG.</li>
          <li><strong>09 novembro</strong> - Feira Cultural da Escola Estadual Neinha Rosa de Jesus no bairro Veneza em Ipatinga/MG.</li>
        </ul>

        <h4>2025</h4>
        <ul>
          <li><strong>22 março</strong> - Noite Oriental na sede da ANBI em Ipatinga/MG.</li>
          <li><strong>23 abril</strong> - Comemoração dos 40 anos do Grupo de Escoteiros Ybira Venuna no bairro Ideal em Ipatinga/MG.</li>
          <li><strong>26 abril</strong> - Apresentação na formatura do Projeto Musical Cultural, com alunos do 4º ano da Escola de Música da Corporação Musical Santa Cecília no bairro Cariru em Ipatinga/MG.</li>
          <li><strong>04 maio</strong> - Abertura da “Mostra de Taiko” no Parque Ipanema em Ipatinga/MG.</li>
          <li><strong>24 maio</strong> - Comemoração do Dia da Comunidade Japonesa na sede da ANBI no bairro Cariru em Ipatinga/MG.</li>
          <li><strong>28 junho</strong> - Mostra de Cultura Japonesa no Parque Ipanema em Ipatinga/MG.</li>
          <li><strong>02 agosto</strong> - Festival Hanami no Shopping MinasCasa em Belo Horizonte/MG.</li>
          <li><strong>07 agosto</strong> - Encerramento do 3º Ensaio do Instituto Cultural Tifuukukai no Teatro Zélia Olguin no bairro Cariru em Ipatinga/MG.</li>
          <li><strong>14 setembro</strong> - Salão do Livro do Vale do Aço, maior evento literário do Leste de Minas, no Shopping do Vale do Aço em Ipatinga/MG.</li>
        </ul>
      </div>

      <div class="imagem">
        <img src="assets/curriculo1.jpg" alt="Apresentações do grupo Kouryuu Daiko">
      </div>
    </div>
  </div>

  <!-- Seção Oficinas -->
  <div class="curriculo-bloco">
  <h2 class="subtitulo-vermelho-baixo">Oficinas</h2>
    <div class="conteudo invertido">
      <div class="texto">
        <h4>2024</h4>
        <ul>
          <li><strong>18 maio</strong> - Oficinas de Taiko de 14 às 17h na Festa da Família na Escola Estadual Teijiro Toyoda no bairro Cariru em Ipatinga/MG.</li>
          <li><strong>31 julho</strong> - Oficina de Taiko para alunos do ensino fundamental do Colégio Racional na sede da ANBI em Ipatinga/MG.</li>
          <li><strong>24 agosto</strong> - Mostra de Taiko no Parque Ipanema em Ipatinga/MG.</li>
          <li><strong>09 novembro</strong> - Oficina para alunos, professores e familiares na Feira Cultural da Escola Estadual Neinha Rosa de Jesus no bairro Veneza em Ipatinga/MG.</li>
        </ul>

        <h4>2025</h4>
        <ul>
          <li><strong>12 abril</strong> - Festa da Família na Escola Estadual Almirante Teijiro Toyoda no bairro Cariru em Ipatinga/MG.</li>
          <li><strong>24 maio</strong> - Oficinas na Comemoração do Dia da Comunidade Japonesa na sede da ANBI em Ipatinga/MG.</li>
          <li><strong>28 junho</strong> - Oficina de Taiko na Mostra de Cultura Japonesa no Parque Ipanema em Ipatinga/MG.</li>
        </ul>
      </div>
      <div class="imagem">
        <img src="assets/curriculo2.jpg" alt="Oficinas do grupo Kouryuu Daiko">
      </div>
    </div>
  </div>
</section>
  `
})
export class SobreCurriculoComponent {}