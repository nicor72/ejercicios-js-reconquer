
console.group('Ejercicio 5');

// Transformar la siguiente funcion en una IIFE.
const app = (function iife() {
    let examen = {
        name: 'Resonancia Rodilla',
        date: '18-10-2019'
    }

    console.log('Examen inicial: ', examen)

    function changeName(newName) {
        examen.name = newName
    }

    function changeDate(newDate) {
        examen.date = newDate
    }

    function createExamImage(examImage) {
        examen.examImage = examImage
    }

    return {
        examen,
        changeName,
        changeDate,
        createExamImage
    }
})();

// Usar la función changeName para cambiar el nombre del examen.
app.changeName('newName')

// Usar la función changeDate para cambiar la fecha del examen.
app.changeDate('123456')

// BONUS
// Usar la función createExamImage para crear un ExamImage.
// pasando a la función un objeto con so propiedades a elección
app.createExamImage({ image: 'pcr.jpg', date: '12-06-2020' })

// Mostrar el consola el nuevo examen
console.log(app.examen)

// BONUS BONUS
// Crear una nueva función y usarla

// BONUS BONUS BONUS (CRACK)
// Crear un nuevo IIFE con al menos una funcióm y usarla


console.groupEnd()
console.group('Ejercicio 4')

const equipos = [
    {
        nombre: 'Brasil',
        ganados: 3,
        goles: 10,
        puntos: 10,
        eliminado: false
    },
    {
        nombre: 'Argentina',
        ganados: 3,
        goles: 7,
        puntos: 10,
        eliminado: false
    },
    {
        nombre: 'Chile',
        ganados: 1,
        goles: 3,
        puntos: 5,
        eliminado: true
    }
];

for(i = 0; i < equipos.length; i++) {
    // console.log(equipos[i])

    // Equality Operator
    // Mostrar el equipo que sacó 5 puntos.
    if (equipos[i].puntos === 5) {
        console.log(equipos[i].nombre, '5 puntos')
    }

    // Logical Operator
    // Mostrar el equipo que sacó 10 puntos y metió 10 goles.
    if (equipos[i].puntos === 10 && equipos[i].goles === 10) {
        console.log(equipos[i].nombre, 'tiene 10 puntos y 10 goles')
    }

    // Relational Operator
    // Mostrar los equipos que sacaron mas de 5 goles.
    if (equipos[i].goles > 5) {
        console.log(equipos[i].nombre, 'tiene mas de 5 goles')
    }

    // BONUS
    // Conditional Operator
    // Mostrar 'perdió' si eliminado es true.
    // Mostrar 'aún no pierde' si eliminado es falso
    console.log(equipos[i].nombre, equipos[i].eliminado ? 'perdió' : 'aún no pierde')

    // BONUS BONUS
    // Mostrar los equipos con 4 ganados o con mas de 1 gol
    if (equipos[i].ganados === 4 || equipos[i].goles > 1) {
        console.log(equipos[i].nombre, 'tiene 4 ganados o mas de 1 gol')
    }

    // BONUS BONUS BONUS
    // Inventar otro if con dos operators
    // TIP: se puede agregar otra propiedad al arreglo equipos si quieren
}

console.groupEnd()
console.groupCollapsed('Ejercicio 3')

console.log('Paso 1: jugadores')
// Recorrer el array jugadores con un bucle for desde el principio
// Saltandose el segundo jugador y terminando el ciclo en el quinto jugador
// En cada ciclo mostrar el nombre del jugador en consola
const jugadores = ['Jordan', 'Pippen', 'Oneil', 'Rodman', 'Bryant', 'Barkley']

for (let i = 0; i < jugadores.length; i++) {
    if (i === 1) continue
    if (i > 4) break
    console.log(jugadores[i])
}

console.log('')
console.log('Paso 2: mediciones')
// Recorrer el array mediciones con un bucle for desde el principio hasta el final
// En cada ciclo mostrar el tipo de cada medicion junto al valor de la medición en consola
// TIP: usar typeof()
const mediciones = [100, '86', 1.4, '5.5', 66, true, 'Positivo']

for (let i = 0; i < mediciones.length; i++) {
    console.log(typeof(mediciones[i]), mediciones[i])
}

console.log('')
console.log('Paso 3: conversión')
// Recorrer nuevamente el array de mediciones 👆 de principio a fin
// En cada ciclo transformar a tipo String los tipos Int y mostrar en consola
// TIP: usar .toString()
// BONUS: En en mismo bucle for pasar los tipo String a tipo Int con parseInt()
// BONUS BONUS: En en mismo bucle for pasar los tipo String a tipo Int con parseInt()

for (let i = 0; i < mediciones.length; i++) {
    if (typeof(mediciones[i]) === 'number') {
        const toString = mediciones[i].toString()
        console.log(typeof(toString), toString)
    }

    if (typeof(mediciones[i]) === 'string') {
        const toNumber = parseInt(mediciones[i])
        console.log(typeof(toNumber), toNumber)
    }
}

console.log('')
console.log('Paso 4: Doble loop')
// BONUS BONUS BONUS (CRACK)
// Usando los arrays ya declarados, recorrer el array jugadores y por cada jugador recorrer todas las mediciones
// TIP: usar un bucle for dentro otro bucle for

for (let i = 0; i < jugadores.length; i++) {
    console.log(jugadores[i])
    for (let i = 0; i < mediciones.length; i++) {
        console.log(mediciones[i])
    }
}





console.groupEnd('')
console.groupCollapsed('Ejercicio 2')

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


console.groupEnd('')
console.groupCollapsed('Ejercicio 1')
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
