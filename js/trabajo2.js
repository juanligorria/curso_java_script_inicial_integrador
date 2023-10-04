// let box = document.getElementById("caja_notas");

// box.addEventListener("mouseover", e => {box.style.backgroundColor = "grey"})






const cursoJSON = `{
    "estudiantes": [
        {
            "nombre": "Juan",
            "promedio": 7
        },
        {
            "nombre": "Pedro",
            "promedio": 9
        },
        {
            "nombre": "Maria",
            "promedio": 8
        },
        {
            "nombre": "Carlos",
            "promedio": 10
        },
        {
            "nombre": "Ana",
            "promedio": 7
        },
        {
            "nombre": "Pablo",
            "promedio": 10
        },
        {
            "nombre": "Matias",
            "promedio": 6
        },
        {
            "nombre": "Ezequiel",
            "promedio": 8
        },
        {
            "nombre": "Florencia",
            "promedio": 9
        },
        {
            "nombre": "Roxana",
            "promedio": 7
        }
    ]
}`

const curso = JSON.parse(cursoJSON);
let arrayTp = curso.estudiantes

let box = document.getElementById("caja_notas")

let contador=0
let acumulador=0
let promediogral=0



arrayTp.forEach(estudiantes => {
   
    const lista = "<p>"+estudiantes.nombre + ", promedio: " + estudiantes.promedio +"</p>";

  box.insertAdjacentHTML("afterbegin", lista);

})

// promedio

for (let index = 0; index < arrayTp.length; index++) {
    const estudiante = curso.estudiantes [index];
    const promedio = estudiante.promedio;
    const nombre = estudiante.nombre
    // if (promedio==10) {}
        acumulador = acumulador + promedio;
        contador = contador +1;  
        if (promedio == 10) 
        {document.write(`mejores notas: `,nombre, promedio,)}
    }
promediogral= acumulador/contador;

document.write(`El promedio general es: `, promediogral);

// Alumnos con 10
