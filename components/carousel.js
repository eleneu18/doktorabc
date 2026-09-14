export function setupCarousel({
  track,
  slides,
  dots,
  previousButton,
  nextButton,
  mediaQuery,
}) {
  const carouselLayout = window.matchMedia(mediaQuery);
  let currentSlide = 0;

  function render() {
    if (carouselLayout.matches) {
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(${-currentSlide * (slideWidth + gap)}px)`;
    } else {
      track.style.removeProperty("transform");
    }

    dots.forEach((dot, index) => {
      const isCurrent = index === currentSlide;
      dot.classList.toggle("is-active", isCurrent);
      dot.toggleAttribute("aria-current", isCurrent);
    });
  }

  function goToSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    render();
  }

  previousButton.addEventListener("click", () => goToSlide(currentSlide - 1));
  nextButton.addEventListener("click", () => goToSlide(currentSlide + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => goToSlide(index)));
  window.addEventListener("resize", render);

  render();
}
