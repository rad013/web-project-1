console.log("testing");

$(document).ready(function () {
  $("#navigation").load("../pages/navigation-bar.html", function () {});

  $("#footer").load("../pages/footer.html", function () {});

  var screenWidth = window.innerWidth;
  for (var i = 1; i <= 3; i++) {
    var slider = document.getElementById("slide" + i + "-image");
    slider.style.width = screenWidth + "px";
  }

  var $slider = $("#slider");
  var WIDTH = screenWidth;

  $(".right").click(function () {
    $slider.animate({ left: -WIDTH }, "slow", function () {
      $("#slider :first-child").appendTo($slider);
      $slider.css("left", "0");
    });
  });

  $(".left").click(function () {
    $slider.animate({ left: WIDTH }, "slow", function () {
      $("#slider :last-child").prependTo($slider);
      $slider.css("left", "0");
    });
  });

  var slider = document.getElementById("slider");
  var slideWidth = screenWidth;
  var currentIndex = 0;
  var numSlides = 3;

  function slideNext() {
    currentIndex = (currentIndex + 1) % numSlides;
    slider.style.transform = "translateX(" + -currentIndex * slideWidth + "px)";
  }

  var slideInterval = setInterval(slideNext, 3000);
  var controlButtons = document.getElementsByClassName("control-button");
  for (var i = 0; i < controlButtons.length; i++) {
    controlButtons[i].addEventListener("click", resetSlideInterval);
  }

  function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(slideNext, 3000);
  }
});

let dropdownTimeout;
const dropdown = document.querySelector(".store-dropdown");

function showDropdown() {
  clearTimeout(dropdownTimeout);
  var dropdown = document.querySelector(".dropdown-content");
  dropdown.style.display = "flex";
}

function hideDropdown() {
  dropdownTimeout = setTimeout(function () {
    var dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = "none";
  }, 200);
}
