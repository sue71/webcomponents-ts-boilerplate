import '@webcomponents/webcomponentsjs/webcomponents-loader';

const css = require('./button.css');

(<any>window).WebComponents.waitFor(() => main())

function main() {
  class SDKButton extends HTMLElement {
    static get observedAttributes() {
      return ['color'];
    }

    constructor() {
      super();
      this.attachShadow({mode: "open"});
      this.shadowRoot!.innerHTML = `
        <style>
          ${css.toString()}
        </style>
        <button class="sdk-button">SDK Button</button>
      `;
      this.addEventListener('click', e => {
        this.onClick(e);
      });
    }

    get color(): string|null {
      return this.getAttribute('color');
    }

    set color(value: string|null) {
      if (!value) {
        return;
      }
      this.setAttribute('color', value);
    }

    onClick(e: MouseEvent) {
      console.log('event', e);
      alert("Clicked");
    }

    connectedCallback() {
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name: string, from: any, to: any) {
      console.log(name, from, to);
    }

    adoptedCalback() {}
  }

  customElements.define('sdk-button', SDKButton);
};