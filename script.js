function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

let testimonialIndex = 0;
function nextTestimonial() {
  testimonialIndex++;
  updateTestimonial();
}

function previousTestimonial() {
  testimonialIndex--;
  updateTestimonial();
}

function updateTestimonial() {
  const track = document.querySelector(".slick-track");

  track.style.transform = `translate3d(-${210 + testimonialIndex * 210}px, 0px, 0px)`;
}