import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement{
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      class: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 16px 12px 16px 12px;
        text-transform: uppercase;
        font-style: italic;
        padding: 16px 12px 16px 12px;
        font-weight: bold;
      }
    
      .primaryOutlined {
        border: 2px solid #005fa9;
        background-color: #fff;
        color: #005fa9;
        padding: 16px 12px 16px 12px;
        border-radius: 4px;
        text-decoration: none;
      }

        .primaryOutlined:hover, .primaryOutlined:focus,
      :host([active]) .primaryOutlined {
        background-color: #005fa9;
        border: 2px solid #005fa9;
        border-radius: 2px;
        color: #fff;
        cursor: pointer;
        text-decoration: none;
        border-radius: 4px;
      }

      .primaryFilled {
        background-color: #005fa9;
        border: 2px solid #005fa9;
        padding: 16px 12px 16px 12px;
        color: #fff;
        border: 2px solid #005fa9;
        border-radius: 4px;
        text-decoration: none;
      }

      .primaryFilled:hover, 
      :host([active]) .primaryFilled {
        background-color: #fff;
        border: 2px solid #005fa9;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
        border-radius: 4px;
        text-decoration: none;
      }

      .tinted {
        background-color: #1e407c;
        border: 2px solid #fff;
        padding: 16px 12px 16px 12px;
        color: #ccf0ff;
        border: 2px solid #fff;
        opacity: 0.7;
        border-radius: 4px;
        text-decoration: none;
      }

      .tinted:hover,
      :host([active]) .tinted {
        background-color: #fff;
        border: 2px solid #005fa9;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: none;
        border-radius: 4px;
      }

      .lightOutlined {
        border: 2px solid #fff;
        color: #ccf0ff;
        padding: 16px 12px 16px 12px;
        border-radius: 4px;
        text-decoration: none;
        background-color: transparent;
      }

      .lightOutlined:hover,
      :host([active]) .lightOutlined {
        background-color: #ccf0ff;
        border: 2px solid #ccf0ff;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
        border-radius: 4px;
        text-decoration: none;
      }

      .lightFilled {
        border: 2px solid #ccf0ff;
        color: #1e407c;
        padding: 16px 12px 16px 12px;
        border-radius: 4px;
        text-decoration: none;
        background-color: #ccf0ff;
      }

      .lightFilled:hover,
      :host([active]) .lightFilled {
        background-color: transparent;
        border: 2px solid #ccf0ff;
        border-radius: 2px;
        color: #ccf0ff;
        cursor: pointer;
        text-decoration: underline;
        border-radius: 4px;
        text-decoration: none;
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.link = "https://www.psu.edu/news/research/";
    this.class = '';
  }

  render() {
    return html`<a class="${this.class}" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}
