console.log('----------------------------------------------')
console.log('Ejercicio 3')

console.log('Paso 1: jugadores')
// Recorrer el array jugadores con un bucle for desde el principio
// Saltandose el segundo jugador y terminando el ciclo en el quinto jugador
// En cada ciclo mostrar el nombre del jugador en consola

const jugadores = ['Salas','Zamorano', 'Sanchez', 'Vidal','Medel','Bravo']

for (let i=0; i<jugadores.length; i++){
    if (i=== 1)
    continue;  
    console.log(jugadores[i])
}

console.log('')
console.log('Paso 2: mediciones')
// Recorrer el array mediciones con un bucle for desde el principio hasta el final
// En cada ciclo mostrar el tipo de cada medicion junto al valor de la medición en consola
// TIP: usar typeof()
const mediciones = [100, '86', 1.4, '5.5', 66, true, 'Positivo']

for (let i=0; i<mediciones.length; i++){
    console.log(typeof(mediciones[i]), mediciones[1])
}

console.log('')
console.log('Paso 3: conversión')
// Recorrer nuevamente el array de mediciones 👆 de principio a fin
// En cada ciclo transformar a tipo String los tipos Int y mostrar en consola
// TIP: usar .toString()
// BONUS: En en mismo bucle for pasar los tipo String a tipo Int con parseInt()
// BONUS BONUS: En en mismo bucle for pasar los tipo String a tipo Int con parseInt()

for (let i=0; i<mediciones.length; i++){
}

console.log('')
console.log('Paso 4: Doble loop')
// BONUS BONUS BONUS (CRACK)
// Usando los arrays ya declarados, recorrer el array jugadores y por cada jugador recorrer todas las mediciones
// TIP: usar un bucle for dentro otro bucle for


for (let i=0; i<jugadores.length; i++){
    console.log(jugadores[i])
    for (let i=0; i<mediciones.length; i++){
        console.log(mediciones[i])
    
    }
}



/////////////////////////////////////


// for (let i=0; i<5; i++){
//     if (i=== 1)
//     continue;   // el break termina todo  // el continue , se lo salta y sigue
//     console.log(i);
// }

// for (let i=5; i<=10; i++){
//     console.log(i);
// }


// for (let i=0; i<=10; i=i+2){
//     if(i===2)
//     continue;
//     console.log(i);
//     if(i===6)
//     break;    
// }


// const verbos = ['jugó', 'anotó', 'pegó']

// for (let i=0; i<verbos.length; i++){
//     console.log(verbos[i])
// }



// ////////////////////////////////////

// // Declarar un arreglo que contenga los siguientes verbos: ['jugar', 'anotar', 'pegar']
// // TIP: deben ser strings y pueden ser en cualquier tiempo verbal (ej: jugó)

// // const verbos = ['jugó', 'anotó', 'pegó']


// // Declarar un objeto que contenga lo siguiente:
// // Nombre de tu jugador favorito de esta copa america
// // Número de partidos jugados en la copa
// // Número de goles anotados en la copa
// // Número de faltas en la copa

// const jugador = { nombre: 'vargas', partidos: 6, goles: 3, faltas: 2}

// // Acceder directamente al nombre del jugador, al verbo jugar y al número de partidos jugados y mostrar en consola
// // TIP: Usar un solo console.log y se debe formar una oración del tipo "jugador jugó 3"

// console.log(jugador.nombre, verbos[0], jugador.partidos)

// // Destructurar el nombre del jugador, el verbo pegar y el número de faltas en la copa y mostrar en consola
// // TIP: Se debe destructurar antes del console.log y se debe formar una oración del tipo "jugador pega 10"

// const { nombre, faltas } = jugador
// const [,,pegó] = verbos
// console.log(nombre, pegó, faltas)

// // BONUS
// // crear una función y ejecutarla, que reciba el nombre del jugador, un verbo y una propiedad del jugador
// // para mostrar en consola una oración del tipo: 'jugador anota 1'
// // BONUS BONUS
// // agregar alfinal de la oración un string que complete la oración ej: jugador anota 1 'gol'

// function oracion (nombre, verbo, propiedad ){
//     console.log (nombre, verbo, propiedad , 'goles')
// }
//     oracion(jugador.nombre, verbos[1], jugador.goles)

// // BONUS BONUS BONUS (CRACK)
// // Recibir en la función con rest parameters

// function oracion2(...params){
//     console.log(params[0], params[1],params[2], 'goles')
// }
// oracion2(jugador.nombre, verbos[1], jugador.goles)


// //////////////////////////////////////



// console.log('Ejercicio 1')
// Inicializar una vareable para contar el número de lesiones
// Elegir entre var o let. Justifique su respuesta. 😬

// Declarar una función que sume nuevas lesiones y muestre en consola el valor del contador de lesiones
// Tip: la funcion debe recibir un parametro.
// Ejecutar la función para que el contador muestre 64 lesiones

// BONUS
// Ejecutar dos veces más la funcion hasta llegar a 100 lesiones



// let contador = 30;
// console.log(contador);

//  function lesiones (lesiones){
//      contador=lesiones+contador
//      console.log (contador)
//  }

//  lesiones(34);
//  lesiones(6);
//  lesiones(30);



//  function Lesiones(...RestParameters){
     
//      const [lesion1,lesion2, ...resto]=RestParameters
//      console.log (lesion1, lesion2)
//      console.log (resto);
//  }

//  Lesiones(1,100,300,600);
 


// function ejemplo(){
//  const arreglo = [1,2,3,4]
//  const objeto = {id:1, nombre:["camilo","alejandro"], apellido:"alarcon"}
//  console.log(arreglo[3])
// //  console.log(objeto['nombre'][1])
//     console.log(objeto.nombre[1])


//  const[valor1] = arreglo
//  console.log(valor1)

//  const{nombre,id,apellido} = objeto
//  console.log(nombre)
//  console.log(apellido)
//  console.log(id)
// }
// ejemplo()



//  function lesiones(...lesiones){
//     console.log(...lesiones + ',');
//     console.log(lesiones.length)
//     }
    
//     lesiones('lesion rodilla izquierda','lesion hombro derecho');

//     var ListaLesiones = ['lesion 1', 'lesion 2','lesion 3','lesion 4', 'lesion 5'];
//     console.log(ListaLesiones);

    
