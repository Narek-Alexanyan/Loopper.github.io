function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


// slider ##########################


let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
    
  }
  x[slideIndex-1].style.display = "block"; 

}

$(document).ready(function(){
    $('.lectus-slider').slick({
        speed: 800,
        adaptiveHeight: true,
        easing: 'ease',
        autoplay: true,
        
    });
});