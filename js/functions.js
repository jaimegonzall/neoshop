/**
 * TODO: Desarrollar el código del slider
 */

/**
 * TODO: Desarrollar el código para cargar productos por Ajax
 */

/* 
let sliderFrame = document.querySelector(".slider");

sliderFrame.innerHTML += "<button id='retroceder'>Retroceder</button>";
sliderFrame.innerHTML += "<button id='avanzar'>Avanzar</button>";

 */


/* let productsFrame = document.querySelector(".products"); */

/* productsFrame.innerHTML += "<button id='retroceder'>Retroceder</button>"; */


// TRAIGO EL JSON

/*
const requestURL = './api/slides.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const PRODUCTOS = request.response;
    populateHeader(PRODUCTOS);
    showHeroes(PRODUCTOS);
  }


  function showProductos(jsonObj) {
    const bambas = jsonObj['data'];
  }
  showProductos(jsonObj);

  for (var i = 0; i < bambas.length; i++) {
    const bamba = document.createElement('article');
    const name = document.createElement('h3');
    const price = document.createElement('span');
    const button_text = document.createElement('a');
    const button_link = document.createElement('p');
    const image = document.createElement('img');

    name.textContent = bambas[i].name;
    price.textContent = bambas[i].price + ' €';
    button_text.textContent = 'Age: ' + bambas[i].button_text;

    
}
productsFrame.innerHTML += "<article>ytygyhg<img src=";
*/





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