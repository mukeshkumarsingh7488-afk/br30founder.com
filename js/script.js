// ===== TYPED TEXT =====
document.addEventListener("DOMContentLoaded", () => {
  // Check karke ki page par #element hai ya nahi
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
      // Cursor ka color set karne ke liye
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

  // Outline delay ke saath chalegi (Lag free logic)
  outline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" },
  );
});

// Scroll Progress Bar Logic
window.onscroll = function () {
  let winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // Percentage calculation
  let scrolled = (winScroll / height) * 100;

  // Bar ki width update karna
  let progressBar = document.getElementById("scroll-progress");
  if (progressBar) {
    progressBar.style.width = scrolled + "%";
  }
};

// Hover Effect on all clickable items
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

// nav dropedown
document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.getElementById("pageDropdownBtn");
  const navLinks = document.getElementById("navLinks");

  if (dropdownBtn) {
    dropdownBtn.onclick = (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("show");
    };
  }

  // Bahar click karne par dropdown band ho jaye
  document.addEventListener("click", () => {
    if (navLinks) navLinks.classList.remove("show");
  });
});

// stack card
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

// back btn scroll function
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
