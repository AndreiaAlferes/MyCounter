import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style } from './style.js';

import '../components/main/numcounter.js';
import '../components/footer/footer.js';
import '../components/header/header.js';

@customElement('app-counter')
export class AppCounter extends LitElement {
  static styles = style;

  render() {
    return html`
      <header-element></header-element>
      <num-counter></num-counter>
      <footer-element></footer-element>
    `;
  }
}
