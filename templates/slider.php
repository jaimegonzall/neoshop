<section class="slider">

    <div class="slider__slide fade">
        <img src="resources/slider/slide1.jpg" alt="">
        <div class="slide--text">
            <h3>Título para la primera slide</h3>
            <a href="#" class="button">Comprar</a>
        </div>
    </div>

    <div class="slider__slide fade">
        <img src="resources/slider/slide2.jpg" alt="">
        <div class="slide--text">
            <h3>Título para el segundo slide</h3>
            <a href="#" class="button">Comprar</a>
        </div>
    </div>

    <div class="slider__slide fade">
        <img src="resources/slider/slide3.jpg" alt="">
        <div class="slide--text">
            <h3>Título para el tercer slide</h3>
            <a href="#" class="button">Comprar</a>
        </div>
    </div>

    <!-- Flechas del slider -->
    <div class="slider--control">
        <a href="#" class="slider--control--prev" onclick="avanzaSlide(-1)">&#10094;</a>
        <a href="#" class="slider--control--next" onclick="avanzaSlide(1)">&#10095;</a>
    </div>

    <!-- Botones inferiores del slider -->
    <div class="slider--puntos">
        <span class="puntos__dot active" onclick="posicionSlide(1)"></span>
        <span class="puntos__dot" onclick="posicionSlide(2)"></span>
        <span class="puntos__dot" onclick="posicionSlide(3)"></span>
    </div>

</section>