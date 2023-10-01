// let boton = document.querySelector(".btn")
// boton.addEventListener("click", function (event)
// {console.log("marchok", event.button)
// if (event.button == 0) {console.log("izquierda")}
// });
// document.addEventListener("click", function (event) 
// {console.log("paposo", event.target.nodename)})

let botones= document.querySelectorAll(".btn");
botones.forEach(boton => boton.addEventListener
    ("click", function(event) {console.log("muy dificil") }))
