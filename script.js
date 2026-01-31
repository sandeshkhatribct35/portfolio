/* =========================
   SMOOTH SCROLL
========================= */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* =========================
   TYPED HERO TEXT EFFECT
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

/* =========================
   SKILLS PROGRESS ANIMATION
========================= */
function animateSkills() {
  const skills = document.querySelectorAll(".progress");
  const skillsSection = document.querySelector("#skills");
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (sectionTop < triggerPoint) {
    skills.forEach(skill => {
      const width = skill.getAttribute("data-width");
      skill.style.width = width; // animate to percentage
    });
  }
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

/* =========================
   REVEAL ON SCROLL
========================= */
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   OPTIONAL: NAV TOGGLE FOR MOBILE
========================= */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.querySelector("i").classList.toggle("fa-bars");
    navToggle.querySelector("i").classList.toggle("fa-times");
  });
}
