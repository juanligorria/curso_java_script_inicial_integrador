// let pedido = new XMLHttpRequest();
// pedido.open('GET', '../Json/estudiantes.json', true,);




// pedido.onreadystatechange = ()=> {console.log(pedido)

// if (pedido.readyState == 4) {console.log("ready")}


// estudiantesTxt = pedido.response
// estudiantes = JSON.parse(estudiantesTxt)
// console.log(estudiantes)
// }
// pedido.send();



// pedir a una api y obtener un JSON+boton que muestra el resultado

let boton = document.querySelector("button");
boton.addEventListener("click", (event) => {
    let peticion = new XMLHttpRequest();

peticion.open('GET', "https://api.thecatapi.com/v1/images/search", true); 

peticion.onreadystatechange = () => {

    if (peticion.readyState == 4 && peticion.status==200) {
        resultado=JSON.parse(peticion.responseText);
        let gatuno = resultado[0];
        // console.log(gatuno);

        let urlGato = gatuno.url

        let imagen = document.querySelector ("img")
        imagen.src=urlGato
        console.log(urlGato);
}
}
peticion.send();

})
localStorage.setItem = ("nombre", "juan")






