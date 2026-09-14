const section = document.querySelector(".how-it-works");

if (section) {
  const track = section.querySelector(".how-it-works__track");
  const cards = [...section.querySelectorAll(".how-step")];
  const dots = [...section.querySelectorAll(".how-it-works__dot")];
  const previous = section.querySelector(".how-it-works__arrow--previous");
  const next = section.querySelector(".how-it-works__arrow--next");
  let activeIndex = 0;

  const render = () => {
    const isMobile = window.matchMedia("(max-width: 700px)").matches;
    const step = cards[0].getBoundingClientRect().width + 24;
    track.style.transform = isMobile ? `translateX(${-activeIndex * step}px)` : "none";

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.toggleAttribute("aria-current", isActive);
    });
  };

  const select = (index) => {
    activeIndex = (index + cards.length) % cards.length;
    render();
  };

  previous.addEventListener("click", () => select(activeIndex - 1));
  next.addEventListener("click", () => select(activeIndex + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => select(index)));
  window.addEventListener("resize", render);
  render();
}
