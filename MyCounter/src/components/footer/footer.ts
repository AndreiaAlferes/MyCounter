import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { style } from '../footer/stylefooter.js';

@customElement('footer-element')
export class FooterElement extends LitElement {
  static styles = style;

  render() {
    return html`
      <footer class="footer">
        <div class="container">
          <p>My Counter Number APP</p>
        </div>
      </footer>
    `;
  }
}
