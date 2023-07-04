import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style } from './styleheader.js';

@customElement('header-element')
export class HeaderElement extends LitElement {
  static styles = style;

  render() {
    return html`
      <header class="header">
        <div class="container">
          <h1>Let's go start counting....</h1>
        </div>
      </header>
    `;
  }
}
