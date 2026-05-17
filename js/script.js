//#region 
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("element")) {
    var typed = new Typed("#element", {
      strings: [
        "Web. Developer.",
        "Trader.",
        "Investor.",
        "Graphic Designer.",
        "Content Creator.",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      cursorChar: "|",
      contentType: "html",
    });
  }
});

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
  dot.style.left = `${posX}px`;
  dot.style.top = `${posY}px`;
  outline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" },
  );
});

window.onscroll = function () {
  let winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  let progressBar = document.getElementById("scroll-progress");
  if (progressBar) {
    progressBar.style.width = scrolled + "%";
  }
};

document
  .querySelectorAll("a, .card, .contact-btn, .indicator-item")
  .forEach((link) => {
    link.addEventListener("mouseenter", () => {
      outline.style.transform = "translate(-50%, -50%) scale(1.5)";
      outline.style.backgroundColor = "rgba(160, 32, 240, 0.1)";
    });
    link.addEventListener("mouseleave", () => {
      outline.style.transform = "translate(-50%, -50%) scale(1)";
      outline.style.backgroundColor = "transparent";
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.getElementById("pageDropdownBtn");
  const navLinks = document.getElementById("navLinks");
  if (dropdownBtn) {
    dropdownBtn.onclick = (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("show");
    };
  }
  document.addEventListener("click", () => {
    if (navLinks) navLinks.classList.remove("show");
  });
});
gsap.registerPlugin(ScrollTrigger);
const cards = gsap.utils.toArray(".stack-cards__item");
const headerOffset = 100;
cards.forEach((card, index) => {
  ScrollTrigger.create({
    trigger: card,
    start: `top-=${headerOffset} top`,
    endTrigger: "#stack-cards",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false,
    scrub: 1,
    anticipatePin: 1,
  });
  if (index < cards.length - 1) {
    gsap.to(card, {
      scrollTrigger: {
        trigger: cards[index + 1],
        start: `top-=${headerOffset + 150} top`,
        end: `top-=${headerOffset} top`,
        scrub: 1,
      },
      opacity: 0,
      scale: 0.98,
      ease: "none",
    });
  }
});
ScrollTrigger.refresh();
window.addEventListener("load", () => {
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      ScrollTrigger.refresh();
      const targetCard = document.querySelector(hash);
      if (targetCard) {
        const targetST = ScrollTrigger.getAll().find(
          (st) => st.trigger === targetCard,
        );
        if (targetST) {
          const extraScroll = 190;
          const offset = 100;

          window.scrollTo({
            top: targetST.start + extraScroll - offset,
            behavior: "auto",
          });
        }
      }
    }, 300);
  }
});
//#endregion