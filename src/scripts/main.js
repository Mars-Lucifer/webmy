document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const headerInner = document.getElementById("header-inner");

  if (header && headerInner) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.replace("py-[1.375rem]", "py-[0]");
        headerInner.classList.add(
          "bg-[var(--color-back)]/80",
          "backdrop-blur-[32px]",
          "rounded-[1.375rem]",
          "px-[1.375rem]",
          "py-[0.875rem]",
          "mt-[1.375rem]",
        );
      } else {
        header.classList.replace("py-[0]", "py-[1.375rem]");
        headerInner.classList.remove(
          "bg-[var(--color-back)]/80",
          "backdrop-blur-[32px]",
          "rounded-[1.375rem]",
          "px-[1.375rem]",
          "py-[0.875rem]",
          "mt-[1.375rem]",
        );
      }
    });
  }

  const burgerBtn = document.getElementById("burger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      const lines = burgerBtn.children;

      if (isMenuOpen) {
        mobileMenu.classList.replace("opacity-0", "opacity-100");
        mobileMenu.classList.replace(
          "pointer-events-none",
          "pointer-events-auto",
        );
        lines[0].classList.replace("-translate-y-1.5", "rotate-45");
        lines[1].classList.replace("translate-y-1.5", "-rotate-45");
      } else {
        mobileMenu.classList.replace("opacity-100", "opacity-0");
        mobileMenu.classList.replace(
          "pointer-events-auto",
          "pointer-events-none",
        );
        lines[0].classList.replace("rotate-45", "-translate-y-1.5");
        lines[1].classList.replace("-rotate-45", "translate-y-1.5");
      }
    });
  }

  const triggers = document.querySelectorAll(".lottie-trigger");
  triggers.forEach((trigger) => {
    const player = trigger.querySelector("lottie-player");
    if (player) {
      trigger.addEventListener("mouseenter", () => player.play());
      trigger.addEventListener("mouseleave", () => player.pause());
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const cards = document.querySelectorAll(".group");

  cards.forEach((card) => {
    const lottie = card.querySelector(".lottie-anim");
    if (!lottie) return;

    if (isDesktop) {
      lottie.stop(); // На десктопе изначально стоп
      card.addEventListener("mouseenter", () => lottie.play());
      card.addEventListener("mouseleave", () => lottie.stop());
    } else {
      lottie.play(); // На мобилке играет сразу
    }
  });
});
