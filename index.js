console.group('Ejercicio 7')

const autoreportes = [
    {
        jugador: 'Chupete Suazo',
        CK: 99,
        Orina: 'Amarilla',
        animo: 'A full'
    },{
        jugador: 'Mago Valdivia',
        CK: 1,
        Orina: 'Verde',
        animo: 'con caña'
    }
]

// 1. Usando forEach recorrer el arreglo autoreportes y mostrar el estado de animo de cada jugador:

// 2. Usando map recorrer el arreglo autoreportes y devolver la orina de cada jugador. Guardar en una constante:

// 3. Usar map o forEach (justifique su respuesta). para guardar en una constante todos los indices del arreglo.

// BONUS
// 4. Usar filter para filtrar las CK mayores a 50

// BONUS BONUS
// 5. Usar find para encontrar a chupete suazo

// BONUS BONUS BONUS
// 6. usar forEach para agregar una nueva propiedad momento: 'Entrenamiento' a cada jugador: 




console.groupEnd()


console.groupCollapsed('Ejercicio 6')

// 1. Crear una función que reciba un argumento y devuelva el tipo de este.
// TIP: usar typeof()

// 2. Crear la versión arrow function de la función anterior.

// 3. Agregar un default parameter al argumento de la función. Que sea undefined por defecto.

// BONUS
// 4. Escribir la arrow function en una linea.

// BONUS BONUS
// 5. Pasarle un array o un objeto a la función.

// BONUS BONUS BONUS (CRACK)
// 6. Crear un array con diferentes tipos (int, string, boolean, etc) 
// y usar un for para recorrerlo y en cada iteración usar la función creada para mostrar el tipo en consola.


console.groupEnd()

console.groupCollapsed('Ejercicio 5');

// Transformar la siguiente funcion en una IIFE.
function iife() {
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
}

// Usar la función changeName para cambiar el nombre del examen.

// Usar la función changeDate para cambiar la fecha del examen.

// BONUS
// Usar la función createExamImage para crear un ExamImage.
// pasando a la función un objeto con dos propiedades a elección

// Mostrar el consola el nuevo examen

// BONUS BONUS
// Crear una nueva función y usarla

// BONUS BONUS BONUS (CRACK)
// Crear un nuevo IIFE con al menos una función y usarla


console.groupEnd()


console.groupCollapsed('Ejercicio 4')

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

// for(i = 0; i < equipos.length; i++) {
//     // console.log(equipos[i])

//     // Equality Operator
//     // Mostrar el equipo que sacó 5 puntos.
//     if (/*Aqui Equality Operator*/) {
//         console.log(equipos[i].nombre, '5 puntos')
//     }

//     // Logical Operator
//     // Mostrar el equipo que sacó 10 puntos y metió 10 goles.
//     if (/*Aqui Logical Operator*/) {
//         console.log(equipos[i].nombre, 'tiene 10 puntos y 10 goles')
//     }

//     // Relational Operator
//     // Mostrar los equipos que sacaron mas de 5 goles.
//     if (/*Aqui Relational Operator*/) {
//         console.log(equipos[i].nombre, 'tiene mas de 5 goles')
//     }

//     // BONUS
//     // Conditional Operator
//     // Mostrar 'perdió' si eliminado es true.
//     // Mostrar 'aún no pierde' si eliminado es falso
//     console.log(equipos[i].nombre, /*Aqui Conditional Operator*/)

//     // BONUS BONUS
//     // Mostrar los equipos con 4 ganados o con mas de 1 gol
//     if (/*Aqui los dos Operators*/) {
//         console.log(equipos[i].nombre, 'tiene 4 ganados o mas de 1 gol')
//     }

//     // BONUS BONUS BONUS
//     // Inventar otro if con dos operators
//     // TIP: se puede agregar otra propiedad al arreglo equipos si quieren
// }

console.groupEnd('')
console.groupCollapsed('Ejercicio 3')

console.log('Paso 1: jugadores')
// Recorrer el array jugadores con un bucle for desde el principio
// Saltandose el segundo jugador y terminando el ciclo en el quinto jugador
// En cada ciclo mostrar el nombre del jugador en consola
const jugadores = ['Jordan', 'Pippen', 'Oneil', 'Rodman', 'Bryant', 'Barkley']


console.log('')
console.log('Paso 2: mediciones')
// Recorrer el array mediciones con un bucle for desde el principio hasta el final
// En cada ciclo mostrar el tipo de cada medicion junto al valor de la medición en consola
// TIP: usar typeof()
const mediciones = [100, '86', 1.4, '5.5', 66, true, 'Positivo']


console.log('')
console.log('Paso 3: conversión')
// Recorrer nuevamente el array de mediciones 👆 de principio a fin
// En cada ciclo transformar a tipo String los tipos Int y mostrar en consola
// TIP: usar .toString()
// BONUS: En en mismo bucle for pasar los tipo String a tipo Int con parseInt()
// BONUS BONUS: En en mismo bucle for pasar los tipo String a tipo Int con parseInt()


console.log('')
console.log('Paso 4: Doble loop')
// BONUS BONUS BONUS (CRACK)
// Usando los arrays ya declarados, recorrer el array jugadores y por cada jugador recorrer todas las mediciones
// TIP: usar un bucle for dentro otro bucle for





console.groupEnd('')
console.groupCollapsed('Ejercicio 2')

// Declarar un arreglo que contenga los siguientes verbos: ['jugar', 'anotar', 'pegar']
// TIP: deben ser strings y pueden ser en cualquier tiempo verbal (ej: jugó)


// Declarar un objeto que contenga lo siguiente:
// Nombre de tu jugador favorito de esta copa america
// Número de partidos jugados en la copa
// Número de goles anotados en la copa
// Número de faltas en la copa


// Acceder directamente al nombre del jugador, al verbo jugar y al número de partidos jugados y mostrar en consola
// TIP: Usar un solo console.log y se debe formar una oración del tipo "jugador jugó 3"


// Destructurar el nombre del jugador, el verbo pegar y el número de faltas en la copa y mostrar en consola
// TIP: Se debe destructurar antes del console.log y se debe formar una oración del tipo "jugador pega 10"


// BONUS
// crear una función y ejecutarla, que reciba el nombre del jugador, un verbo y una propiedad del jugador
// para mostrar en consola una oración del tipo: 'jugador anota 1'
// BONUS BONUS
// agregar alfinal de la oración un string que complete la oración ej: jugador anota 1 'gol'


// BONUS BONUS BONUS (CRACK)
// Recibir en la función con rest parameters



console.groupEnd('')
console.groupCollapsed('Ejercicio 1')

// Inicializar una vareable para contar el número de lesiones
// Elegir entre var o let. Justifique su respuesta. 😬


// Declarar una función que sume nuevas lesiones y muestre en consola el valor del contador de lesiones
// Tip: la funcion debe recibir un parametro.


// Ejecutar la función para que el contador muestre 64 lesiones


// BONUS
// Ejecutar dos veces más la funcion hasta llegar a 100 lesiones

