const estudiantes = [
    { nombre: "Juan", edad: 20, notas: [85, 98, 78, 88, 90] },
    { nombre: "María", edad: 21, notas: [75, 80, 92, 89, 78] },
    { nombre: "Carlos", edad: 22, notas: [95, 88, 76, 92, 84] },
    { nombre: "Pedro", edad: 21, notas: [80, 82, 88, 90, 85] },
    { nombre: "Daniel", edad: 21, notas: [85, 80, 61, 90, 82] }
]

let acumulador = 0;
let contador = 0;
let promedio = 0;

for (let index = 0; index < estudiantes.length; index++) {
    const estudiante = estudiantes [index];
    const notas = estudiante.notas;
    document.write(notas);

    for (let j = 0; j < notas.length; j++) {
        const nota = notas[j];
        acumulador = acumulador + nota;
        contador = contador +1;  
    }
promedio = acumulador/contador;
}
console.log(promedio)
