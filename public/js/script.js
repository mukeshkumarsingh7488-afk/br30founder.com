//#region

document.addEventListener("DOMContentLoaded", () => {
  // Typed.js
  if (window.typedInstance) {
    window.typedInstance.destroy();
  }

  const typedEl = document.querySelector("#element");

  if (typedEl && window.Typed) {
    typedEl.innerHTML = "";

    window.typedInstance = new Typed("#element", {
      strings: [
        "Web Developer.",
        "Trader.",
        "Investor.",
        "Graphic Designer.",
        "Market Analyst.",
        "Algo Developer.",
        "Trading Entrepreneur.",
        "Fintech Entrepreneur.",
        "Trading Indicator Developer."
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  }

  // Custom cursor
  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");

  if (dot && outline) {
    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      outline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`
        },
        { duration: 500, fill: "forwards" }
      );
    });

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
  }

  // Scroll progress
  window.onscroll = function () {
    const winScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const progressBar = document.getElementById("scroll-progress");

    if (progressBar) {
      progressBar.style.width = scrolled + "%";
    }
  };

  // Navigation dropdown
  const dropdownBtn = document.getElementById("pageDropdownBtn");
  const navLinks = document.getElementById("navLinks");

  if (dropdownBtn && navLinks) {
    dropdownBtn.onclick = (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("show");
    };

    document.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  }

  // GSAP stacked cards
  if (window.gsap && window.ScrollTrigger) {
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
        anticipatePin: 1
      });

      if (index < cards.length - 1) {
        gsap.to(card, {
          scrollTrigger: {
            trigger: cards[index + 1],
            start: `top-=${headerOffset + 150} top`,
            end: `top-=${headerOffset} top`,
            scrub: 1
          },
          opacity: 0,
          scale: 0.98,
          ease: "none"
        });
      }
    });

    ScrollTrigger.refresh();

    // Restore hash navigation position
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
              (st) => st.trigger === targetCard
            );

            if (targetST) {
              const extraScroll = 190;
              const offset = 100;

              window.scrollTo({
                top: targetST.start + extraScroll - offset,
                behavior: "auto"
              });
            }
          }
        }, 300);
      }
    });
  }
});

//#endregion
