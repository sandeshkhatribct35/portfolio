function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"})
}

// Scroll reveal
const revealElements = document.querySelectorAll(".reveal")
function revealOnScroll() {
  for(const el of revealElements){
    const windowHeight = window.innerHeight
    const revealTop = el.getBoundingClientRect().top
    if(revealTop < windowHeight - 100){
      el.classList.add("active")
    }
  }
}
window.addEventListener("scroll", revealOnScroll)
window.addEventListener("load", revealOnScroll)

// Animate skill bars
function animateSkills(){
  const skills = document.querySelectorAll(".skill-card .progress")
  for(const skill of skills){
    const width = skill.getAttribute("data-width")
    skill.style.width = width
  }
}
window.addEventListener("scroll", function(){
  const skillsSection = document.querySelector("#skills")
  if(skillsSection.getBoundingClientRect().top < window.innerHeight - 100){
    animateSkills()
  }
})
window.addEventListener("load", animateSkills)

// Typed hero text effect
const heroTexts = ["Hi, I'm Sandesh Khatri", "Quarter-Stack Developer", "Building Next-Level Software"];
let typedIndex = 0, charIndex = 0;
const typedElement = document.querySelector(".typed-text");

function typeHero(){
  if(charIndex < heroTexts[typedIndex].length){
    typedElement.textContent += heroTexts[typedIndex][charIndex];
    charIndex++;
    setTimeout(typeHero,80);
  } else {
    setTimeout(eraseHero,2000);
  }
}

function eraseHero(){
  if(charIndex > 0){
    typedElement.textContent = heroTexts[typedIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(eraseHero,50);
  } else {
    typedIndex = (typedIndex+1)%heroTexts.length;
    setTimeout(typeHero,500);
  }
}

window.addEventListener("load", typeHero);
