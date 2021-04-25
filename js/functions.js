const productsArticle = document.querySelectorAll(".products__article");

function brilloPrecio() {
   document.querySelector(".products__article--price").className += " animation";
}

productsArticle.forEach(boton => {
    boton.addEventListener("mouseover", brilloPrecio)
});



// SLIDE
let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
  muestraSlides(indice+=n);
}

function posicionSlide(n){
  muestraSlides(indice=n);
}

/* cada 3 seg pasa la diapositiva */
setInterval(function tiempo(){
  muestraSlides(indice+=1)
},3000);

function muestraSlides(n){
  let i;
  let slides = document.getElementsByClassName('slider__slide');
  let puntos = document.getElementsByClassName('puntos__dot');

  if(n > slides.length){
    indice = 1;
  }
  if(n < 1){
    indice = slides.length();
  }
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = 'none'
  }
  for(i = 0; i < puntos.length; i++){
    puntos[i].className = puntos[i].className.replace(" active", "");
  }

  slides[indice-1].style.display = 'block';
  puntos[indice-1].className += ' active';

}