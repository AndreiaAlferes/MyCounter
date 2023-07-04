/* eslint-disable wc/no-self-class */
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { style } from './styles.js';

@customElement('num-counter')
export class NumCounter extends LitElement {
  @property({ type: Number }) count = 0;

  static styles = style;

  decrease() {
    if (this.count < 0 && this.count - 1 < 0) {
      this.classList.add('negative');
    } else {
      this.classList.remove('negative');
    }
    // eslint-disable-next-line no-plusplus
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  increase() {
    if (this.count > 0 && this.count + 1 > 0) {
      this.classList.add('positive');
    } else {
      this.classList.remove('positive');
    }
    // eslint-disable-next-line no-plusplus
    this.count++;
  }

  get countStyleDecr() {
    return this.count < 0 ? 'color:red' : '';
  }

  get countStyleIncrease() {
    return this.count > 0 ? 'color:green' : '';
  }

  render() {
    return html`<div class="app-wrapper">
      <div class="accesskey-container">
        <div
          class="container"
          style="${this.countStyleDecr} ${this.countStyleIncrease}"
        >
          ${this.count}
        </div>
        <button class="btn" @click=${this.decrease}>Decrease</button>
        <button class="btn" @click=${this.reset}>Reset</button>
        <button class="btn" @click=${this.increase}>Increase</button>
      </div>
    </div> `;
  }
}
