let slideIndexs = 1;
showSlide(slideIndexs);
function plusSlides(n) {
  showSlide(slideIndexs += n);
}
function currentSlide(n) {
  showSlide(slideIndexs = n);
}
function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndexs = 1 }
  if (n < 1) { slideIndexs = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexs - 1].style.display = "block";
  dots[slideIndexs - 1].className += " active";
}
let slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 11000); // Change image every 2 seconds
}


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})

const drawingsContainers = [...document.querySelectorAll('.drawings-container')];
const nxtBtnTwo = [...document.querySelectorAll('.nxt-btn-two')];
const preBtnTwo = [...document.querySelectorAll('.pre-btn-two')];

drawingsContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtnTwo[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtnTwo[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})
