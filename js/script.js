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
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".stack-cards__item");
  const stackGap = 30; // Har card ke beech ka gap

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0, 1],
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Jab card screen mein aaye
        updateStacking();
      }
    });
  }, observerOptions);

  cards.forEach((card) => observer.observe(card));

  function updateStacking() {
    const scrollTop = window.pageYOffset;

    cards.forEach((card, index) => {
      const cardTop = card.parentElement.offsetTop + card.offsetTop;
      const distance = scrollTop - cardTop + 100; // 100 navbar offset hai

      if (distance > index * stackGap) {
        // Card ko stack position mein 'transform' se lock karna
        card.style.transform = `translateY(${distance - index * stackGap}px)`;
      } else {
        card.style.transform = `translateY(0px)`;
      }
    });
  }

  window.addEventListener("scroll", updateStacking);
});
