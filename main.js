let bars = document.querySelector("#bars");
let nav = document.querySelector("nav");

bars.addEventListener("click", () => {
  if (bars.classList[1] == "fa-bars") {
    nav.classList.add("show");
    bars.classList = "fa-solid fa-x";
  } else {
    nav.classList.remove("show");
    bars.classList = "fa-solid fa-bars";
  }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    const slider = document.querySelector('.testimonial-slides');
    const slideWidth = slides[0].offsetWidth + 30; // width of a single slide plus margin
    slider.style.transform = `translateX(${-slideWidth * index}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Show the first slide initially
showSlide(currentSlide);
