function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"})
}

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

// Run on scroll
window.addEventListener("scroll", revealOnScroll)
// Run once on page load
window.addEventListener("load", revealOnScroll)
