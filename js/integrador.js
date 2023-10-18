
let peticion = new XMLHttpRequest();

let maxPrice = -Infinity

// HAGO LA PETICION

peticion.open('GET',
    "https://portal.edu-apps.com.ar/api/products/?format=json", true);

peticion.onreadystatechange = () => {

    if (peticion.readyState == 4 && peticion.status == 200) {
        resultado = JSON.parse(peticion.responseText);

        let catalogo = resultado;
        console.log(catalogo);


 // MUESTRO  LISTA DE PRODUCTOS+FOTOS, 
//  DENTRO DE UN  DIV

        catalogo.forEach(element => {

            const autos = `<div><p><h3>Auto:</h3>${element.name}</p>

             <p><img width=200px, height=200px, 
             src=${element.image_field
                } alt="Imagen auto"><p/>

             <p>Precio:${element.price}</p>

             <p><button class="masinfo">Clickity Clickity</button><p/>`

            let caja = document.querySelector(".caja");
            caja.insertAdjacentHTML("beforeend", autos);

// PRODUCTO MAS CARO
        
        if (element.price > maxPrice) {
    maxPrice = element.price
 }


        });
    };
}




peticion.send();

