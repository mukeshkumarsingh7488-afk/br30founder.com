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

// stacky card logic
var StackCards = function (element) {
  this.element = element;
  this.items = this.element.getElementsByClassName("js-stack-cards__item");
  this.scrollingListener = false;
  this.scrolling = false;
  initStackCardsEffect(this);
};

function initStackCardsEffect(element) {
  // we'll create the effect here
}

var stackCards = document.getElementsByClassName("js-stack-cards"),
  intersectionObserverSupported =
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype,
  reducedMotion = Util.osHasReducedMotion();

if (stackCards.length > 0 && intersectionObserverSupported && !reducedMotion) {
  for (var i = 0; i < stackCards.length; i++) {
    new StackCards(stackCards[i]);
  }
}

// stack card
function initStackCardsEffect(element) {
  // use Intersection Observer to trigger animation
  var observer = new IntersectionObserver(stackCardsCallback.bind(element));
  observer.observe(element.element);
}

function stackCardsCallback(entries) {
  // Intersection Observer callback
  if (entries[0].isIntersecting) {
    // cards inside viewport - add scroll listener
    if (this.scrollingListener) return; // listener for scroll event already added
    stackCardsInitEvent(this);
  } else {
    // cards not inside viewport - remove scroll listener
    if (!this.scrollingListener) return; // listener for scroll event already removed
    window.removeEventListener("scroll", this.scrollingListener);
    this.scrollingListener = false;
  }
}

function stackCardsInitEvent(element) {
  element.scrollingListener = stackCardsScrolling.bind(element);
  window.addEventListener("scroll", element.scrollingListener);
}

function stackCardsScrolling() {
  if (this.scrolling) return;
  this.scrolling = true;
  window.requestAnimationFrame(animateStackCards.bind(this));
}

function animateStackCards() {
  // apply transform values to different card elements
}

function animateStackCards() {
  var top = this.element.getBoundingClientRect().top;

  for (var i = 0; i < this.items.length; i++) {
    // cardTop/cardHeight/marginY are the css values for the card top position/height/Y offset
    var scrolling = this.cardTop - top - i * (this.cardHeight + this.marginY);
    if (scrolling > 0) {
      // card is fixed - we can scale it down
      this.items[i].setAttribute(
        "style",
        "transform: translateY(" +
          this.marginY * i +
          "px) scale(" +
          (this.cardHeight - scrolling * 0.05) / this.cardHeight +
          ");",
      );
    }
  }

  this.scrolling = false;
}
