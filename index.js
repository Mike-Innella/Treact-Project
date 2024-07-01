function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

function activateOnLoad() {
  var landingContent = document.getElementById("landing--content");
  var featuresContent = document.getElementById("features");
  landingContent.classList.add("active");
  featuresContent.classList.add("active");
}
window.addEventListener("DOMContentLoaded", activateOnLoad);
window.addEventListener("scroll", function () {
  var landingContent = document.getElementById("landing--content");
  var positionFromTop = landingContent.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (positionFromTop - windowHeight <= 0) {
    landingContent.classList.add("active");
  }
});
window.addEventListener("scroll", function () {
  var featuresContent = document.getElementById("features");
  var positionFromTop = featuresContent.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (positionFromTop - windowHeight <= 0) {
    featuresContent.classList.add("active");
  }
});
window.addEventListener("scroll", function () {
  var qualityContent = document.getElementById("quality");
  var positionFromTop = qualityContent.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionFromTop - windowHeight <= 0) {
    qualityContent.classList.add("active");
  }
});
window.addEventListener("scroll", function () {
  var stepsContent = document.getElementById("steps");
  var positionFromTop = stepsContent.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionFromTop - windowHeight <= 0) {
    stepsContent.classList.add("active");
  }
});
window.addEventListener("scroll", function () {
  var valuesContent = document.getElementById("values");
  var positionFromTop = valuesContent.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionFromTop - windowHeight <= 0) {
    valuesContent.classList.add("active");
  }
});
window.addEventListener("scroll", function () {
  var priceContent = document.getElementById("pricing");
  var positionFromTop = priceContent.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionFromTop - windowHeight <= 0) {
    priceContent.classList.add("active");
  }
});
window.addEventListener("scroll", function () {
  var reviewContent = document.getElementById("testimonials");
  var positionFromTop = reviewContent.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionFromTop - windowHeight <= 0) {
    reviewContent.classList.add("active");
  }
});
window.addEventListener("scroll", function () {
  var faqContent = document.getElementById("faq");
  var positionFromTop = faqContent.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionFromTop - windowHeight <= 0) {
    faqContent.classList.add("active");
  }
});
window.addEventListener("scroll", function () {
  var getstartContent = document.getElementById("getstarted");
  var positionFromTop = getstartContent.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionFromTop - windowHeight <= 0) {
    getstartContent.classList.add("active");
  }
});
window.addEventListener("scroll", function () {
  var footerContent = document.getElementById("footer");
  var positionFromTop = footerContent.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionFromTop - windowHeight <= 0) {
    footerContent.classList.add("active");
  }
});

let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".review");
  const totalSlides = slides.length;

  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].classList.add("active");

  const transformValue = `translateX(-${currentSlide * 100}%)`;
  document.querySelector(".slides-container").style.transform = transformValue;

  console.log(`Transform applied: ${transformValue}`);
  console.log(`Current Slide: ${currentSlide}`);
}
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;

      const isOpen = panel.classList.contains("open");

      document.querySelectorAll(".accordion-panel").forEach((p) => {
        p.classList.remove("open");
        p.style.maxHeight = null;
      });

      if (!isOpen) {
        panel.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
