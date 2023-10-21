let peticion = new XMLHttpRequest();


precioMax = -Infinity;

// HAGO LA PETICION

peticion.open('GET',
    "https://portal.edu-apps.com.ar/api/products/?format=json", true);

peticion.onreadystatechange = () => {

    if (peticion.readyState == 4 && peticion.status == 200) {
        resultado = JSON.parse(peticion.responseText);

        let catalogo = resultado;
        // console.log(catalogo);



  // MUESTRO  LISTA DE PRODUCTOS+FOTOS, 
  //  DENTRO DE UN  DIV

        catalogo.forEach(element => {

            const autos = `<div class="auto"><p>
            <h3>Auto:</h3>${element.name}</p>

             <p><img width=250px, height=200px, 
             src=${element.image_field
                } class= "imagen", alt="Imagen no disponible"><p/>

             <p>Precio:${element.price}</p>

             <p><button class="masinfo">Mas info</button><p/>`



            let caja = document.querySelector(".caja");
            caja.insertAdjacentHTML("beforeend", autos);


// PRODUCTO MAS CARO// SOLO PUDE MOSTRARLO POR .LOG!
            catalogo.forEach(element => {

                if (element.price > precioMax) {
                    precioMax = element.price
                }
            })
            if (element.price == precioMax)     
            {console.log(element.name, element.price)} ;

            })


// MODAL

        catalogo.forEach(element => {
            
             modalinterior.innerHTML=`<span class="cerrar-modal" 
             id="cerrar-modal">&times;</span>
             <p>${element.name}</p>
            <img src=${element.image_field} 
             alt="Imagen no disponible">
             <p>Precio:${element.price}</p> 
             <p>${element.description}</p>`
            // modal.style.display = 'flex'

            
            modalon.addEventListener('click', () => {
                modal.style.display = 'flex';
                console.log("funciona el boton")
             })
            
            
            
             })
            
    };

}
peticion.send();

const modalinterior = document.querySelector('.modal-interior');
const modalon = document.getElementsByClassName("masinfo");
const modal = document.getElementById('modal-fondo');

const modaloff= document.getElementById('cerrar-modal');







// document.addEventListener('click', (event) => {
//    if (event.target === modal) {
//       modal.style.display = 'none';
//    }
// });
