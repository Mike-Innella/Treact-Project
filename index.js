function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

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
