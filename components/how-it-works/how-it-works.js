import { setupCarousel } from "../carousel.js";

const section = document.querySelector(".how-it-works");

setupCarousel({
  track: section.querySelector(".how-it-works__track"),
  slides: [...section.querySelectorAll(".how-step")],
  dots: [...section.querySelectorAll(".how-it-works__dot")],
  previousButton: section.querySelector(".how-it-works__arrow--previous"),
  nextButton: section.querySelector(".how-it-works__arrow--next"),
  mediaQuery: "(max-width: 700px)",
});
