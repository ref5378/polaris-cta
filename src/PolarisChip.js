import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        margin: 0 12px 12px 0;
      }

      .link:focus,
      .link:hover,
      :host([active]) .link{
        border: 2px radius #005fa9;
        background-color: #005fa9;
        color:  #fff;
        padding: 12px 16px 12px 16px;
        cursor: pointer;
        text-decoration: none;
      }

      .link {
        text-transform: uppercase;
        font-style: italic;
        font-weight: 700;
        padding: 12px 16px 12px 16px;
        letter-spacing: .025rem;
        color: #005fa9;
        text-decoration: none;
        display: inline-block;
        margin-top: 20px;
        border: 2px solid #005fa9;
      }
    `;
  }

  constructor() {
    super();
    this.name = 'Football';
    this.link = "https://www.psu.edu/news/research/";
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}
