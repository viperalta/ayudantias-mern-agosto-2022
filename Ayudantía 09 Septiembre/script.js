const slides = document.getElementsByClassName("slide");

console.log(slides);

let slideIndex = 0;

function renderSlides() {

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none"
    }
    slides[slideIndex].style.display="initial"
}

renderSlides();

function nextSlide(){
    if(slideIndex===slides.length-1){
        slideIndex=0;
    }else{
        slideIndex++;
    }

    renderSlides();
}

function prevSlide(){
    if(slideIndex===0){
        slideIndex=slides.length-1;
    }else{
        slideIndex--;
    }

    renderSlides();
}