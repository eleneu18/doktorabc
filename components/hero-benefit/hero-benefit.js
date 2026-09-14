class HeroBenefit extends HTMLElement {
  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;

    const item = document.createElement("div");
    const icon = document.createElement("img");
    const copy = document.createElement("p");
    const leadingText = document.createTextNode(this.dataset.before || "");
    const emphasis = document.createElement("strong");

    item.className = "hero-benefit";
    icon.className = "hero-benefit__icon";
    icon.src = "assets/icons/check.svg";
    icon.alt = "";
    icon.width = 18;
    icon.height = 18;
    copy.className = "hero-benefit__copy";
    emphasis.textContent = this.dataset.strong || "";
    copy.append(leadingText, emphasis);

    if (this.dataset.note) {
      const note = document.createElement("small");
      note.className = "hero-benefit__note";
      note.textContent = this.dataset.note;
      copy.append(note);
    }

    item.append(icon, copy);
    this.setAttribute("role", "listitem");
    this.replaceChildren(item);
  }
}

customElements.define("hero-benefit", HeroBenefit);
