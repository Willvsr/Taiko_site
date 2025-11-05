import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-valores',
  template: `
    <div class="sobre-title">
      <h1 data-i18n="values.title">Missão e Valores</h1>
    <div class="valores-img">
      <div class="valores-img"><img src="/assets/taiko1.jpg" alt="Valores do Kouryuu Daiko"></div>
    </div>
  <div class="sobre-section">
  <h2 data-i18n="values.mission.title">Missão</h2>
    <h3 data-i18n="values.mission.subtitle">Frase síntese</h3>
        <p data-i18n="values.mission.description">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
  <div class="sobre-section">
    <h2 data-i18n="values.core.title">Valores</h2>
    <h3 data-i18n="values.core.subtitle">Frase síntese</h3>
        <p data-i18n="values.core.description">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
<div class="sobre-section">
    <h2 data-i18n="values.vision.title">Visão</h2>
    <h3 data-i18n="values.vision.subtitle">Frase síntese</h3>
        <p data-i18n="values.vision.description">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>

`
})
export class SobreValoresComponent {}