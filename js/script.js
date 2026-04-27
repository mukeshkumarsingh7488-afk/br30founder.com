// ===== TYPED TEXT =====
document.addEventListener("DOMContentLoaded", () => {
  // Check karke ki page par #element hai ya nahi
  if (document.getElementById("element")) {
    var typed = new Typed("#element", {
      strings: ["Web. Developer.", "Trader.", "Investor.", "Content Creator."],
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
const stackGap = 35;
const headerOffset = 100;

cards.forEach((card, index) => {
  const isLast = index === cards.length - 1;

  ScrollTrigger.create({
    trigger: card,
    start: `top-=${headerOffset + index * stackGap} top`,
    // Agar aakhiri card hai toh pinSpacing true rakhein
    endTrigger: "#stack-cards",
    end: "bottom bottom",
    pin: true,
    pinSpacing: isLast ? true : false, // Sirf last card spacing chhoddhega
    scrub: true,
    onEnter: () => card.classList.add("is-stacked"),
    onLeaveBack: () => card.classList.remove("is-stacked"),
  });

  // Fade effect for previous cards
  if (index < cards.length - 1) {
    gsap.to(card, {
      scrollTrigger: {
        trigger: cards[index + 1],
        start: `top-=${headerOffset + 200} top`,
        end: `top-=${headerOffset} top`,
        scrub: true,
      },
      scale: 0.95,
      opacity: 0.5, // Parchai kam dikhne ke liye opacity thodi kam
      transformOrigin: "top center",
    });
  }
});
