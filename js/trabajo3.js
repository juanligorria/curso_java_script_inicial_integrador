const modalOn = document.querySelector(".modalOn");
const modal = document.getElementById("modal");
const cajaInterior = document.getElementById("cajainterior")
const cajacierre = document.getElementsByClassName("cerrarmodal");
const input = document.getElementById("inputmodal");
const modalOff = document.querySelector(".cerrarmodal");
const botonEnviar = document.getElementById("enviar");

modalOn.addEventListener("click", () => {modal.style.display = `flex`});

modalOff.addEventListener("click", () => {modal.style.display = `none`});

botonEnviar.addEventListener("click", () => {modal.style.display = `none`, 
console.log(input.value)})
