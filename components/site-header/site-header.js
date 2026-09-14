class SiteHeader extends HTMLElement {
  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;

    const header = document.createElement("header");
    const ticker = document.createElement("trust-ticker");
    const brandBar = document.createElement("brand-bar");

    header.className = "site-header";
    header.append(ticker, brandBar);
    this.replaceChildren(header);
  }
}

customElements.define("site-header", SiteHeader);
