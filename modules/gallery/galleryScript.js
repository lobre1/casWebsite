let slideIndex = 1;
let secondInterval = 5;
let interval;

showSlides(slideIndex);
startInterval();

function startInterval(){
  interval = setInterval(function(){
      plusSlides(1)
      showSlides(slideIndex);
    }, secondInterval*1000);
}

function restartInterval(){
  clearInterval(interval);
  startInterval();
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  restartInterval();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  restartInterval();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gallerySlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
