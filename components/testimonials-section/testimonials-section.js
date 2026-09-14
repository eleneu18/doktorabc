import { setupCarousel } from "../carousel.js";

const section = document.querySelector(".testimonials-section");

setupCarousel({
  track: section.querySelector(".testimonials-section__track"),
  slides: [...section.querySelectorAll(".testimonial-card")],
  dots: [...section.querySelectorAll(".testimonials-section__dot")],
  previousButton: section.querySelector(".testimonials-section__arrow--previous"),
  nextButton: section.querySelector(".testimonials-section__arrow--next"),
  mediaQuery: "(max-width: 900px)",
});
