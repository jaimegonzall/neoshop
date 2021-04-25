document.querySelector('.load__button').addEventListener('click', traerDatos());


function traerDatos(){
    console.log("Carga la fnct traerDatos")
    /* console.log('dentro de la función'); */

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'api/products.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            /* console.log(datos); */
            /* console.table(datos['data']); */
            let products = document.querySelector('#products');

            /* Bucle para mostrar productos */
            for(let item of datos['data']){
                /* console.log(item.name, item.price, item.image, item.button_text); */
                products.innerHTML += `
                <article class="products__article">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <a href="${item.button_link}" class="button">${item.button_text}</a>
                <span class="products__article--price">${item.price}</span>
                </article>
                `
                /* En ciertos momentos del bucle se imprimen los CTA */
                if(datos['data'].indexOf(item) == 3){
                    products.innerHTML +=`<figure class="calltoaction cta1">
                    <img src="resources/cta/cta1.jpg" alt="Call to action">
                    </figure>`
                }
                if(datos['data'].indexOf(item) == 6){
                    products.innerHTML +=`<figure class="calltoaction cta2">
                    <img src="resources/cta/cta2.jpg" alt="Call to action">
                    </figure>`
                }
            }
            
        }
    }
}

