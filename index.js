
// Inicializar una vareable para contar el número de lesiones
// Elegir entre var o let. Justifique su respuesta. 😬

let lesiones = 100;
console.log(lesiones);

// Elegí let por: 	
// a. Orden desde arriba hacia abajo,
// b. Block scope: porque let es de naturaleza particular y var universal
// c. Porque según a y b, se pueden agarrar e identificar los errores de mejor 	manera,
// ya que con var es posibles que no se sepa dónde esté el error, 
// mientras que let sabes donde está el error particular.


// Declarar una función que sume nuevas lesiones y muestre en consola el valor del contador de lesiones
// Tip: la funcion debe recibir un parametro.

let lesiones1 = 50;
let lesiones2 = 14;
function sumarLesiones(lesiones1, lesiones2) {

}

console.log(lesiones1, lesiones2);


// Ejecutar la función para que el contador muestre 64 lesiones

let lesiones1 = 50;
let lesiones2 = 14;
function sumarLesiones(lesiones1, lesiones2) {
    lesiones1 + lesiones2;
}
console.log(50+14);

// BONUS
// Ejecutar dos veces más la funcion hasta llegar a 100 lesiones

let lesiones1 = 50;
function sumarLesiones(lesiones1) {
}

console.log(lesiones1 * 2);