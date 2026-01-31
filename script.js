function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"})
}
const revealElements = document.querySelectorAll(".reveal")
window.addEventListener("scroll",function(){
  for(const el of revealElements){
    const windowHeight = window.innerHeight
    const revealTop = el.getBoundingClientRect().top
    if(revealTop < windowHeight - 100){el.classList.add("active")}
  }
})
