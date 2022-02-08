var btnEl = document.getElementsByClassName("btn")
let slides = document.getElementById("slide")

btnEl[0].onclick = function (){
    slides.style.transform = "translatex(0px)"
}
btnEl[1].onclick = function (){
    slides.style.transform = "translatex(-1880px)"
}
btnEl[2].onclick = function (){
    slides.style.transform = "translatex(-3760px)"
}
btnEl[3].onclick = function (){
    slides.style.transform = "translatex(-5640px)"
}

var slideIndex = 0;
showSlides();

/*
function showSlides() {
    var i;
    let slide1 = document.getElementsByClassName("sliders1")
    var slides = document.getElementsByClassName("k");
    for (i = 1; i < slides.length; i++) {
       slides[i].style.display = i;
    }
    
    setInterval(function() {
        slides[slideIndex].style.display = "none";
    	slideIndex ++;
      if(slideIndex >= slides.length) {
          slideIndex = 0;
      }
      else
      {
        slides[slideIndex].style.display = "block";
      }
    }, 2000);
}
*/
let sliderMain =[...document.querySelectorAll("product-subitem")]
let nextBtn =[...document.querySelectorAll("btt")]

sliderMain.forEach((item, i)=>{
    let conDim = item.getBoundingClientRect()
    let contWit = conDim.width
})

nextBtn[i].addEventListener('click', ()=> {
    item.scrollLeft += contWit
})