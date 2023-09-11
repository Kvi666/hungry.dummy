// Sticky Navbar
$(window).scroll(function () {
  if ($(this).scrollTop() > 45) {
    $(".navbar").addClass("sticky-top shadow-sm");
  } else {
    $(".navbar").removeClass("sticky-top shadow-sm");
  }
});

// const button = document.getElementById(".reveal");
// const animatedElement = document.querySelector(".reveal");

// button.addEventListener("click", () => {
//   animatedElement.style.opacity = 1;
// });

// on screen

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 0;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
