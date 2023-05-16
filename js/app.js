window.addEventListener("scroll", function () {
  var header = document.querySelector('.header');
  header.classList.toggle("sticky", window.scrollY > 0);
});


// let containerDisplay = document.querySelectorAll('.element');
// for (let i = 0; i < containerDisplay.length; i++) {
//   containerDisplay[i].addEventListener('click', function () {
//     containerDisplay.forEach(item => {
//       item.classList.remove("active");
     
//     });
//     this.classList.toggle("active");
 
// });
// };

const questions = document.querySelectorAll('.element');

questions.forEach(function (question) {
    const btn = question.querySelector('.label');
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("active");
            }
        })
        question.classList.toggle("active");
    })
})


$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".navbar").slideToggle("1000");

    $(this).toggleClass("fa-bars fa-chevron-up");

  });

})


var slidePosition = 1;
SlideShow(slidePosition);


function plusSlides(n) {
  SlideShow(slidePosition += n);
}


function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

