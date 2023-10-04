// document.querySelector("input").value
const modalOn = document.querySelector(".modalOn")
const modal = document.getElementById("modal")

const modalOff = document.querySelector(".cerrarmodal")

modalOn.addEventListener("click", () => {modal.style.display = `flex`});
modalOff.addEventListener("click", () => {modal.style.display = `none`});