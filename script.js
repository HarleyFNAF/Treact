function openMenu() {
   document.body.classList.add("menu--open");
  
}

function closeMenu() {
  document.body.classList.remove("menu--open")
  
}

let testimonialIndex = 0
function nextTestimonial() {
  testimonialIndex++
}

function previousTestimonial() {
  testimonialIndex--;
}