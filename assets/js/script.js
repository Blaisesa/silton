const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}
// auto-slide
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 3000);

// show first slide
showSlide(current);
