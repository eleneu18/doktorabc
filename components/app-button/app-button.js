class AppButton extends HTMLElement {
  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;

    const label = this.textContent.trim();

    const button = document.createElement("button");
    button.className = "app-button__control";
    button.type = this.getAttribute("type") || "button";
    button.textContent = label;

    this.replaceChildren(button);
  }
}

customElements.define("app-button", AppButton);
