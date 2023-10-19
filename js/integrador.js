let peticion = new XMLHttpRequest();


precioMax = -Infinity;

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

             <p><img width=250px, height=200px, 
             src=${element.image_field
                } alt="Imagen auto"><p/>

             <p>Precio:${element.price}</p>

             <p><button class="masinfo">Mas info</button><p/>`



            let caja = document.querySelector(".caja");
            caja.insertAdjacentHTML("beforeend", autos);

            // PRODUCTO MAS CARO

            catalogo.forEach(element => {

                if (element.price > precioMax) {
                    precioMax = element.price
                }
            });

            if (element.price == precioMax) 
            
            {console.log(element.name, element.price)} 
            



        });
    };
}

peticion.send();

let modal=document.getElementById("modal")

addEventListener ("click", () => {modal.style.display="flex"})