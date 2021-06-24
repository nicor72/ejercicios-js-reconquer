console.log('----------------------------------------------')
console.log('Ejercicio 2')

// Declarar un arreglo que contenga los siguientes verbos: ['jugar', 'anotar', 'pegar']
// TIP: deben ser strings y pueden ser en cualquier tiempo verbal (ej: jugó)
const verbos = ['jugó', 'anotó', 'pegó']

// Declarar un objeto que contenga lo siguiente:
// Nombre de tu jugador favorito de esta copa america
// Número de partidos jugados en la copa
// Número de goles anotados en la copa
// Número de faltas en la copa
const jugador = { nombre: 'Gary', partidos: 4, goles: 0, faltas: 10 }

// Acceder directamente al nombre del jugador, al verbo jugar y al número de partidos jugados y mostrar en consola
// TIP: Usar un solo console.log y se debe formar una oración del tipo "jugador jugó 3"
console.log(jugador.nombre, verbos[0], jugador.partidos)

// Destructurar el nombre del jugador, el verbo pegar y el número de faltas en la copa y mostrar en consola
// TIP: Se debe destructurar antes del console.log y se debe formar una oración del tipo "jugador pega 10"
const { nombre, faltas } = jugador
const [,,verboPegar] = verbos
console.log(nombre, verboPegar, faltas)

// BONUS
// crear una función y ejecutarla, que reciba el nombre del jugador, un verbo y una propiedad del jugador
// para mostrar en consola una oración del tipo: 'jugador anota 1'
// BONUS BONUS
// agregar alfinal de la oración un string que complete la oración ej: jugador anota 1 'gol'
function formarOracion(nombre, verbo, propiedad) {
    console.log(nombre, verbo, propiedad, ', igual sigue siendo un crack!')
}
formarOracion(jugador.nombre, verbos[1], jugador.goles)

// BONUS BONUS BONUS (CRACK)
// Recibir en la función con rest parameters
function oracionCrack(...params) {
    console.log(params[0], params[1], params[2], ', igual sigue siendo un crack!')
}
oracionCrack(jugador.nombre, verbos[1], jugador.goles)



console.log('----------------------------------------------')
console.log('Ejercicio 1')
// Inicializar una vareable para contar el número de lesiones
// Elegir entre var o let. Justifique su respuesta. 😬
let lesionesCounter = 0

// Declarar una función que sume nuevas lesiones y muestre en consola el valor del contador de lesiones
// Tip: la funcion debe recibir un parametro.
function sumaLesiones(nuevasLesiones) {
    lesionesCounter = lesionesCounter + nuevasLesiones
    console.log(lesionesCounter)
}

// Ejecutar la función para que el contador muestre 64 lesiones
sumaLesiones(64)

// BONUS
// Ejecutar dos veces más la funcion hasta llegar a 100 lesiones
sumaLesiones(6)
sumaLesiones(30)
