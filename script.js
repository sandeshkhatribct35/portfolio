// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Typed Hero Text Effect
const heroTexts = [
  "Hi, I'm Sandesh Khatri",
  "Quarter-Stack Developer",
  "Building Next-Level Software"
];

let typedIndex = 0, charIndex = 0;
const typedElement = document.querySelector(".typed-text");

function typeHero() {
  if (!typedElement) return;
  if (charIndex < heroTexts[typedIndex].length) {
    typedElement.textContent += heroTexts[typedIndex][charIndex];
    charIndex++;
    setTimeout(typeHero, 80);
  } else {
    setTimeout(eraseHero, 2000);
  }
}

function eraseHero() {
  if (charIndex > 0) {
    typedElement.textContent = heroTexts[typedIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseHero, 50);
  } else {
    typedIndex = (typedIndex + 1) % heroTexts.length;
    setTimeout(typeHero, 500);
  }
}

// Start typing on page load
window.addEventListener("load", typeHero);
