var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

function modalOn() {
  let bodyElem = document.querySelector("body");

  bodyElem.classList.add("modal-on");
}

function modalOff() {
  let bodyElem = document.querySelector("body");

  bodyElem.classList.remove("modal-on");
}

function run() {
  let registerButtons = document.querySelectorAll(".tc");
  let dismissButton = document.querySelector(".dismiss");

  for (const registerButton of registerButtons) {
    registerButton.addEventListener("click", modalOn);
    registerButton.addEventListener("touchstart", modalOn);
  }

  dismissButton.addEventListener("click", modalOff);
  dismissButton.addEventListener("touchstart", modalOff);

  showSlides();
}

document.addEventListener("DOMContentLoaded", run);
