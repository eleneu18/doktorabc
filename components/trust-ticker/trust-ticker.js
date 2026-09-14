class TrustTicker extends HTMLElement {
  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;

    const claims = [
      ["pill", "Discreet & qualified treatments"],
      ["consultation", "Online consultation & prescription"],
      ["shipping", "Shipping 1–2 days"],
      ["shield-check", "Secure information"],
      ["badge-euro", "Affordable pricing with no hidden fees"],
      ["users", "600K+ Customers"],
      ["book-check", "40+ Categories"],
      ["star", "3M+ Orders"],
      ["award", "7+ Years of trust"],
    ];

    const ticker = document.createElement("div");
    const label = document.createElement("p");
    const viewport = document.createElement("div");
    const track = document.createElement("div");

    ticker.className = "trust-ticker";
    label.className = "trust-ticker__label";
    label.textContent = "Why Doktorabc?";
    viewport.className = "trust-ticker__viewport";
    track.className = "trust-ticker__track";

    track.append(
      this.createGroup(claims),
      this.createGroup(claims, true),
    );
    viewport.append(track);
    ticker.append(label, viewport);
    this.replaceChildren(ticker);
  }

  createGroup(claims, isDuplicate = false) {
    const group = document.createElement("div");
    group.className = "trust-ticker__group";

    if (isDuplicate) group.setAttribute("aria-hidden", "true");

    claims.forEach(([icon, label]) => {
      const item = document.createElement("trust-item");
      item.dataset.icon = icon;
      item.textContent = label;
      group.append(item);
    });

    return group;
  }
}

customElements.define("trust-ticker", TrustTicker);
