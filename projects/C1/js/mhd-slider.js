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
    var slides = document.getElementsByClassName("c-slider__slide");
    var dots = document.getElementsByClassName("c-slider__dot");

    // Estas dos condiciones crean el loop necesario al incrementar o decrementar el valor del indice
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    // Esconder los slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // Activar la clase del los puntos cuando cambia su indice
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" is-active", "");
    }

    // Hace aparecer y deja activo los slides y dots cuando cambian sus indices
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " is-active";
}