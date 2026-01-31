/* =========================
   Smooth Scroll Function
========================= */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* =========================
   Scroll Reveal (Efficient)
========================= */
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target); // reveal once
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach(el => revealObserver.observe(el));

/* =========================
   Animate Skill Bars
========================= */
const skillsSection = document.querySelector("#skills");
let skillsAnimated = false;

function animateSkills() {
  if (skillsAnimated) return;
  const skills = document.querySelectorAll(".skill-card .progress");
  skills.forEach(skill => {
    skill.style.width = skill.getAttribute("data-width");
  });
  skillsAnimated = true;
}

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) animateSkills();
    });
  },
  { threshold: 0.2 }
);

if (skillsSection) skillsObserver.observe(skillsSection);

/* =========================
   Typed Hero Text Effect
========================= */
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

window.addEventListener("load", typeHero);
