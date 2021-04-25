<a name="top"></a>

# Neoshop
Esta es una prueba técnica desarrollada por NEOZINK para sus aspirantes al departamento de desarrollo.

🖼 [Resultado esperado](https://raw.githubusercontent.com/jaimegonzall/neoshop/main/resources/docs/screenshot1.png)

## Tabla de contenidos 📑
1. [Requisitos deploy](#item1)
2. [¿Qué hay que hacer?](#item2)
3. [Tecnologías](#item3)
4. [Estado del proyecto](#item4)
5. [Bugs sin resolver](#item5)
6. [Licencia](#item6)

<a name="item1"></a>

## Requisitos deploy 🚀

* Un navegador web.
* Un servidor con PHP 7.0 o superior
    * [XAMP para Windows y Mac](https://www.apachefriends.org/es/index.html).
* Compilador de [Sass](https://sass-lang.com/).


<a name="item2"></a>

## ¿Qué hay que hacer?

El objetivo del ejercicio es el siguiente:

* Desarrollar un slider o pase de diapositivas para la cabecera. Idealmente con pase automático cada X segundos y pase manual con botones.
* Desarrollar un layout de productos para la parte inferior utilizando tecnologías de CSS modernas como Grid o Flex.
    * Existen dos banners o CTAs en este layout que deberán colocarse en la quinta y novena posición ocupando el doble de ancho que el resto de elementos del layout.
* Obtener la información para el slider y los productos de dos ficheros en JSON que nos servirá a modo de simulación de base de datos o API.
* Toda la página debe ser completamente responsiva y deberá verse correctamente, al menos, en las siguientes resoluciones de pantalla:
    * 1920px de ancho (FullHD)
    * 1440px de ancho (HiDPI screen)
    * 1366px de ancho (iPad Pro landscape)
    * 1280px de ancho (MDPI screen)
    * 1024px de ancho (iPad landscape)
    * 768px de ancho (iPad portrait, Tablet portrait)
    * 480px de ancho (Smartphone)
    * 375px de ancho (Smartphone)

<a name="item3"></a>

## Tecnologías ⚙️
* HTML
* CSS
* SASS
* Javascript
* PHP

<a name="item4"></a>

## Estado del proyecto 🛠️
Desde luego este no es un proyecto apto para el pase a producción. No están tenidas en cuenta todos las metodologías solicitadas por el cliente sino que he puesto sobre el código los conocimientos que ahora tengo y algún extra obtenido de la documentación de cada lenguaje.

<a name="item5"></a>

## Bugs sin resolver 🐞
* El Json de productos no se obtiene con PHP, sino con JS ('products-controller.js').
* El slider es estático, no depende de su json.
* El pase del slider de forma manual hace que puedan saltar dos diapositivas muy seguidas.
* Hubiera querido hacer el menú hamburguesa.
* El código JS no responde a los principios SOLID.
* No se ha aprovechado todo el pontecial de SASS.


<a name="item6"></a>

## Licencia 📄
Este proyecto no está bajo ninguna Licencia. Puedes copiar y usarlo y modificarlo a tu gusto con tal de que aprendas.

👨‍💻 con ❤️ por [Jaimegonzall](https://github.com/jaimegonzall) 

[Linkedin](https://www.linkedin.com/in/jaimegonzall/)

[Subir](#top)