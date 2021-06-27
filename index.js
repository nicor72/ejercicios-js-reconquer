
// Inicializar una vareable para contar el número de lesiones
// Elegir entre var o let. Justifique su respuesta. 😬

// let contador = 0;
// console.log(contador);

// Elegí let por: 	
// a. Orden desde arriba hacia abajo,
// b. Block scope: porque let es de naturaleza particular y var universal
// c. Porque según a y b, se pueden agarrar e identificar los errores de mejor 	manera,
// ya que con var es posibles que no se sepa dónde esté el error, 
// mientras que let sabes donde está el error particular.


// Declarar una función que sume nuevas lesiones y muestre en consola el valor del contador de lesiones
// Tip: la funcion debe recibir un parametro.


// function sumarLesiones(lesiones) {
//     // let contador = 30;
//     contador = lesiones+contador
//     console.log(contador);
// }

// sumarLesiones(34);
// sumarLesiones(6);
// sumarLesiones(30);

// function lesiones(...Restparameters){
//     const [lesion1,lesion2,...rest] = Restparameters;
//     console.log(lesion1,lesion2,rest);
//     console.log(Restparameters);   
// }

// lesiones(1,100,300,500)

// Ejecutar la función para que el contador muestre 64 lesiones
// BONUS
// Ejecutar dos veces más la funcion hasta llegar a 100 lesiones


// let lesiones1 = 50;
// let lesiones2 = 14;
// function sumarLesiones(lesiones1, lesiones2) {
//     lesiones1 + lesiones2;
// }
// console.log(50+14);

// Sesión 2 (miercoles 17 de junio) arreglos y objtos desestructuración.

const arreglo = [1,2,3,4]
const objeto = {id:1, nombre: "nicolás", apellido: "rossetti"}
console.log (arreglo[3])
console.log (objeto.nombre)
const {id} = objeto
console.log (id)
const [,ejemplo2] = arreglo
console.log (ejemplo2)



