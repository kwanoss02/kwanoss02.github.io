document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".border");
  
  faqItems.forEach(item => {
      item.addEventListener("click", () => {
          item.querySelector("p").classList.toggle("hidden");
          const svg = item.querySelector("svg");
          svg.classList.toggle("rotate-180");
      });
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
  }
}


window.addEventListener("scroll", reveal);