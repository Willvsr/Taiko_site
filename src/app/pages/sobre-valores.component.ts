import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-valores',
  template: `
    <div class="sobre-title">
      <h1>Missão e Valores</h1>
    <div class="valores-img">
      <div class="valores-img"><img src="/assets/taiko1.jpg" alt="Valores do Kouryuu Daiko"></div>
    </div>
  <div class="sobre-section">
  <h2> Missão</h2>
    <h3> Frase sintese</h3>
        <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
  <div class="sobre-section">
    <h2> Valores </h2>
    <h3> Frase sintese</h3>
        <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
<div class="sobre-section">
    <h2> Visão</h2>
    <h3> Frase sintese</h3>
        <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>

`
})
export class SobreValoresComponent {}