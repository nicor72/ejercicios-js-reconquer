
//Tareas sesión 1:
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

// const arreglo = [1,2,3,4]
// const objeto = {id:1, nombre: "nicolás", apellido: "rossetti"}
// console.log (arreglo[3])
// console.log (objeto.nombre)
// const {id} = objeto
// console.log (id)
// const [,ejemplo2] = arreglo
// console.log (ejemplo2)


//  Tarea sesión 2: (domingo 27 de junio)

// 1. Declarar un arreglo que contenga los siguientes verbos: ['jugar', 'anotar', 'pegar'] ⚽️

let gol = ['juega', 'pega', 'anota'];
console.log(gol)

// 2. Declarar un objeto que contenga lo siguiente:
// Nombre de tu jugador favorito de esta copa america
// Número de partidos jugados en la copa
// Número de goles anotados en la copa
// Número de faltas en la copa

let jugador = {nombre:'Ben Beretron', Npartidos:2, Ngoles:1, Nfaltas:10};
console.log(jugador);

// 3. Acceder directamente al nombre del jugador, 
// al verbo jugar y al número de partidos jugados y mostrar en consola
// TIP: Usar un solo console.log y se debe formar una oración del tipo "jugador jugó 3"

let gol = ['juega', 'pega', 'anota'];
let jugador = {nombre:'Ben Beretron', Npartidos:2, Ngoles:1, Nfaltas:10};
console.log (jugador.nombre, gol[0], jugador.Npartidos);

// 4. Destructurar el nombre del jugador, el verbo pegar y el número de faltas en la copa y mostrar en consola

let jugador = {nombre:'Ben Beretron', Npartidos:2, Ngoles:1, Nfaltas:10};
let {nombre} = jugador;
let gol = ['juega', 'pega', 'anota'];
let faltas, otro;
[,faltas, ...otro] = gol
let {Nfaltas} = jugador;
console.log(nombre,faltas,Nfaltas);

// BONUES: crear una función y ejecutarla, que reciba el nombre del jugador, 
// un verbo y una propiedad del jugador para mostrar en consola una oración del tipo:
// jugador anota 1
// BONUS BONUS agregar alfinal de la oración un string que complete la oración ej: jugador anota 1 'gol'
// BONUS BONUS BONUS Recibir en la función con rest parameters


function MiJugador(){
    let jugador = {nombre:'Ben Beretron', Npartidos:2, Ngoles:1, Nfaltas:10};
    let {nombre} = jugador;
    let gol = ['juega', 'pega', 'anota'];
    let goles;
    [,,goles] = gol
    let {Ngoles} = jugador;
    console.log(nombre,goles,Ngoles + "","GOL");
}
MiJugador();

// BONUS BONUS BONUS Recibir en la función con rest parameters

function misjuegos(){
    let gol = ['juega', 'pega', 'anota'];
    let [accion1,accion2,...rest] = gol;
    console.log(accion1,rest); 
    console.log(accion2,rest); 
    console.log(rest); 
    console.log(accion1,accion2,rest); 

}

misjuegos()

