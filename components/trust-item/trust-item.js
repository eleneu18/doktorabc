class TrustItem extends HTMLElement {
  connectedCallback() {
    const iconName = this.dataset.icon;
    const label = this.textContent.trim();
    const icon = document.createElement("span");
    const image = document.createElement("img");
    const text = document.createElement("span");

    icon.className = "trust-item__icon";
    image.src = `assets/icons/${iconName}.svg`;
    image.alt = "";
    image.width = 16;
    image.height = 16;
    text.textContent = label;

    icon.append(image);
    this.replaceChildren(icon, text);
  }
}

customElements.define("trust-item", TrustItem);
