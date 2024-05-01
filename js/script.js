const sliderItems = document.querySelectorAll(".slider__item");
let count = 0;

document.querySelector('.slider').addEventListener("click", (e) => {

  if (e.target.closest(".slider__btn-right")) {
    nextSlide();
  }

  if (e.target.closest(".slider__btn-left")) {
    prevSlide();
  }

})


function setSlide() {
  let currentSlide = sliderItems[count];
  let imgSlide = currentSlide.firstElementChild.firstElementChild;
  let sliderBg = document.querySelector('.slider__bg-image');

  sliderItems.forEach(el => {
    el.classList.remove('_active');
  });

  sliderBg.classList.remove('_active-bg');

  currentSlide.classList.add('_active');
  sliderBg.firstChild.src = imgSlide.src;

  setTimeout(() => sliderBg.classList.add('_active-bg'))
}

setSlide();


function nextSlide() {
  count++;

  if (count >= sliderItems.length) {
    count = 0;
  }
  setSlide();
}

function prevSlide() {
  count--;

  if (count < 0) {
    count = sliderItems.length - 1;
  }

  setSlide();
}


