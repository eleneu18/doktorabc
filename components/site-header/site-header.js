class SiteHeader extends HTMLElement {
  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;

    const header = document.createElement("header");
    const ticker = document.createElement("trust-ticker");

    header.className = "site-header";
    header.append(ticker);
    this.replaceChildren(header);
  }
}

customElements.define("site-header", SiteHeader);
