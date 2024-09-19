"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const muteBtn = document.querySelector(".mute-btn");
  const steps = document.querySelectorAll(".step");
  const stepsButtons = document.querySelectorAll("[data-step]");

  setTimeout(() => {
    steps[0].classList.add("active");
  }, 300);

  stepsButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dataStep = btn.dataset.step;

      steps.forEach((step) => {
        const stepId = step.id;

        if (dataStep === stepId) {
          steps.forEach((step) => step.classList.remove("active"));

          setTimeout(() => {
            step.classList.add("active");
          }, 1000);
        }
      });
    });
  });

  muteBtn.addEventListener("click", function (event) {
    event.target.classList.toggle("mute");
  });

  const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    keyboard: {
      enabled: true,
    },

    autoHeight: true,
  });
});
