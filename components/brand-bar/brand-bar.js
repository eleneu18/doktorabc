class BrandBar extends HTMLElement {
  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;

    const section = document.createElement("div");
    const logo = document.createElement("img");

    section.className = "brand-bar";
    logo.className = "brand-bar__logo";
    logo.src = "assets/logos/doktorabc-dark.svg";
    logo.alt = "DoktorABC";
    logo.width = 215;
    logo.height = 35;

    section.append(logo);
    this.replaceChildren(section);
  }
}

customElements.define("brand-bar", BrandBar);
