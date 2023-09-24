//  #1Numeros del 1 al 10 fon for. FUNCIONA

//  for (let index = 0; index < 11; index++) {
//     document.write(index);
    
// }


// #2Mostrar los numeros del 12 al 24. FUNCIONA

//  for (let index = 12; index <=24; index++) 
//  {document.write (index + ",")
    
//  }

// #3 — Print the ODD numbers from 7 to 31 FUNCIONA

// for (let index = 7; index <= 31; index++) {
//     if (index % 2 != 0) {document.write(index);}
    
// }
// maximos y minimos en Array FUNCIONAN, PERO NECESITAN LOS 3 PUNTOS 
// EN EL ARRAY.

// var myArray = [10, 50, 60, 2, 30];
// var m = Math.min(...myArray);
// document.write(m)

// let numeros = [5, 20, 50, 11, 200];
// let masAlto = Math.max (...numeros);
// document.write(masAlto);

// #4 — Print the EVEN numbers from 10 to -20 FUNCIONA. 
// Hay que recordar que %2 noes division, sino el resto de la division

// for (let index = 10; index < 20; index++) {
//     if (index % 2 == 0) {document.write (index)};
// }
// #5 — Iterate through all numbers from 1 to 45. Print the following:

//     For multiples of 3 print “Fizz”
//     For multiples of 5 print “Buzz”
//     For multiples of 3 and 5 print “FizzBuzz”


// for (let index = 1; index <= 45; index++) {
//     if (index % 3 == 0 && index % 5 == 0) {document.write("Ohlala")}
//     else if (index % 3 == 0) {document.write("Fizz")}
//     else if (index % 5 == 0) {document.write("Buzz")}
// }

// #6 — Print all the elements of the following array FUNCIONA

// let pochaco = ["element1", "element2", "element3", "element4"];

// for (let index = 0; index < pochaco.length; index++) {
//     document.write(pochaco[index]);   
// }

// #7 — SUMA PROMEDIO DE UN ARRAY. Ultima linea muestra
// el primer numero de un array FUNCIONAAAAAA!!!

// let numbers = [1, 13, 22, 123, 49];
// let suma = 0;
// let cantidadElementos = numbers.length;

// for (let index = 0; index < numbers.length; index++) {
//     suma += numbers[index];
    
// }
   
//  document.write(`el resultado es:`+suma);
//  document.write(cantidadElementos);
//  let promedio = suma/cantidadElementos;
//  document.write(promedio)


//  Muestra el primer elemento del array
//   let primerNumero = numbers.shift();
//   alert(primerNumero)

//   Revierte el orden del array
//   numbers.reverse()
//   document.write(numbers);

//   let comma = 23.548756;
//   document.write(comma.toFixed(2));

// let numero = -1/0;
// alert (numero);

// IF+ELSE cada else if lleve una condicion
//   let sabor = "limon" 

//   if (sabor === "chocolate") {
//     alert (`mi sabor favorito es` + sabor); }

//     else if (sabor === "dulce de leche") {alert(` Yo no pedi esto`)}
  
//  else {alert (`anda a cagar`)}

// let speed = 150;

// if ((speed > 80) && (speed< 121)) 
// {alert(` you are not speeding, moron`)}
// else {alert("slow the fuck down!!!")}


// function velocidad (distancia, tiempo)
// {return(distancia/tiempo)}

// let mivelocidad = velocidad (80, 0.2)
// alert(mivelocidad)

// let pisoDpto = 28; 
// for (let index = 0; index < 28; index++) {
// if(index==3) {continue};
//     document.write(pisoDpto);}

let count = 0;

do {
    document.writeln("I don't know what I am doing here! <br>");
    
    count++;
} while (count < 10);