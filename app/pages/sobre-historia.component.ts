import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sobre-historia',
  template: `
    <div class="sobre-title">
    <h1 data-i18n="history.title">História</h1>
  </div>
    <div class="sobre-section">


  <div class="timeline">

    <div class="timeline-item">
      <div class="image-box"></div>
      <h3 data-i18n="history.events.tanabata.title">Tanabata Matsuri</h3>
      <p data-i18n="history.events.tanabata.description">Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
</p>
    </div>

    <div class="timeline-item">
      <div class="image-box"></div>
      <h3 data-i18n="history.events.consul.title">Apresentação ao consul</h3>
      <p data-i18n="history.events.consul.description">Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
</p>
    </div>

    <div class="timeline-item">
      <div class="image-box"></div>
      <h3 data-i18n="history.events.theater.title">Apresentação teatro</h3>
      <p data-i18n="history.events.theater.description">Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
</p>
    </div>

    <div class="timeline-item">
      <div class="image-box"></div>
      <h3 data-i18n="history.events.start.title">Projeto iniciado</h3>
      <p data-i18n="history.events.start.description">Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
</p>
    </div>

  </div>
</div>
  `
})
export class SobreHistoriaComponent {}