const section = document.querySelector(".testimonials-section");

if (section) {
  const track = section.querySelector(".testimonials-section__track");
  const cards = [...section.querySelectorAll(".testimonial-card")];
  const dots = [...section.querySelectorAll(".testimonials-section__dot")];
  const previous = section.querySelector(".testimonials-section__arrow--previous");
  const next = section.querySelector(".testimonials-section__arrow--next");
  let activeIndex = 0;

  const render = () => {
    const isMobile = window.matchMedia("(max-width: 700px)").matches;
    const cardStep = cards[0].getBoundingClientRect().width + 20;
    track.style.transform = isMobile ? `translateX(${-activeIndex * cardStep}px)` : "none";

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
