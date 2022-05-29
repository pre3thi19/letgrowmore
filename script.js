{
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
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
}
var navLinks = document.getElementById("navLinks");
function showMenu(){
  navLinks.style.display="block";
}
function hideMenu(){
  navLinks.style.display="none";
}











// image gallery slider








var zippyIndex = 1;
showSlidesnew(zippyIndex);

function plusSlidesnew(m) {
  showSlidesnew(zippyIndex += m);
}

function currentSlidenew(m) {
  showSlidesnew(zippyIndex = m);
}

function showSlidesnew(m) {
  var j;
  var slidesnew = document.getElementsByClassName("zippyslider");
  var arrow = document.getElementsByClassName("zip");
  if (m > slidesnew.length) {zippyIndex = 1}
  if (m < 1) {zippyIndex = slidesnew.length}
  for (j = 0; j < slidesnew.length; j++) {
      slidesnew[j].style.display = "none";
  }
  for (j = 0; j < arrow.length; j++) {
      arrow[j].className = arrow[j].className.replace(" active", "");
  }
  slidesnew[zippyIndex-1].style.display = "block";
  arrow[zippyIndex-1].className += " active";
}