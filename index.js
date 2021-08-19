//tarea

// hacer una funcion que devuelva la cantidad de dias que lleva muerto carlitos menem  (dinamico)  (5 estrellas normales)
//Tip: una funcion que no reciba argumentos (solo en el primero).//

let fechaFallecimiento = new Date('02/14/2021');
let today = new Date();
let year = today.getFullYear() - fechaFallecimiento.getFullYear();

fechaFallecimiento.setFullYear(today.getFullYear);

if(today > fechaFallecimiento){
    --year;
}

console.log('Carlitos Menem lleva:', year , ' años fallecido');


// pasarle una fecha futura (x5 estrellas crack)

let fecha1 = new Date('02/14/2021');
let fecha2 = new Date('02/14/2069');

let milisegundosDia = 24 * 60 * 60 * 1000;
let milisegundosTranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());
let diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosDia);

console.log( 'Carlitos Menem fallecio hace:', diasTranscurridos,'dias');


console.group('Ejercicio 8')

// 1. Crear un array con objetos (igual que el ejemplo del ejercicio anterior):

const automoviles = [
    {
        marca: 'Ferrari',
        año: 2021,
        color: 'rojo'
        
    },{
        marca: 'Tesla',
        año: 2022,
        color: 'blanco'       
    },
    {
        marca: 'Mclaren',
        año: 2020,
        color: 'amarillo'       
    }
]
// 2. Recorrer el arreglo y devolver una propiedad. Guardar en una constante:

const marcas = automoviles.map((automovil)=>(automovil.marca))
console.log(marcas)

// 3. Usar map o forEach para guardar en una constante todos los indices del arreglo.

const autos = automoviles.map((automovil,index)=>(index))
console.log(autos)

// 4. Usar filter o find para encontrar o filtrar una propiedad.

const año = automoviles.filter((marca) => marca.año == 2022)
console.log(año)


// BONUS
// 5. con el siguiente arreglo, usar forEach para sumar todos sus valores
// TIP: declarar un let en 0 antes del forEach

const numbers = [3, 55, 62, 178]

let suma= 0
numbers.forEach(function(a){suma += a;});
console.log(suma);

// BONUS BONUS
// 6. usar reduce para sumar los valores del arreglo

let sumar = numbers.reduce((a, b) => a + b);
console.log(sumar);

// BONUS BONUS BONUS
// 7. Mostrar el ultimo elemento del array sin importat su largo

console.log(automoviles[automoviles.length-1])

// const autos = automoviles.map((automovil,index)=>(index))
// console.log(autos)

console.groupEnd()

/////////////////////////////


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

autoreportes.forEach((autoreporte)=>{
    console.log(autoreporte.animo)
})


// 2. Usando map recorrer el arreglo autoreportes y devolver la orina de cada jugador. Guardar en una constante:

const onrinas = autoreportes.map((autoreporte)=>(autoreporte.orina))

// 3. Usar map o forEach (justifique su respuesta). para guardar en una constante todos los indices del arreglo.

//con map:
const onrinas_2 = autoreportes.map((autoreporte,index)=>(index))

const nombres = autoreportes.map((jugador)=>jugador.jugador)

//------------//
//con foreach

let orinas = []
autoreportes.forEach((autoreporte,indice)=>{
    orinas.push(indice)
})


// BONUS
// 4. Usar filter para filtrar las CK mayores a 50

const PlayerCK = autoreportes.filter((player) => player.ck > '50')

// BONUS BONUS
// 5. Usar find para encontrar a chupete suazo

autoreportes.find((jugador)=>{
    jugador === 'Chupete Suazo'
    return autoreportes
})


autoreportes.find(({jugador,Orina,Ck})=> Orina === 'amarilla' && jugador === 'Chupete Suazo')



// BONUS BONUS BONUS
// 6. usar forEach para agregar una nueva propiedad momento: 'Entrenamiento' a cada jugador: 


autoreportes.forEach((autoreporte)=>{ 
autoreporte.momento='entrenamiento'
autoreporte.pcr='test'
})

//otra manera
autoreportes.forEach((autoreporte)=>{ 
    autoreporte={
        momento: 'entrenamiento',
        pcr: 'test',
        ...autoreporte
    }
    })




///////////////////////////////////

const verbos = ['jugó', 'anotó', 'pegó']

verbos.map((verbo)=>{
    console.log(verbo)
    return verbos
})


verbos.find((verbo)=>{
    verbo === 'pego'
    return verbos
})


for (let i=0; i<verbos.length; i++){
    getID(verbos[i]);
    console.log(getID(verbos[i]))
}

console.groupEnd()


/////////////////////////////////////
console.group('Ejercicio 6')

// 1. Crear una función que reciba un argumento y devuelva el tipo de este.
// TIP: usar typeof()

    function getID(argumento){
        return typeof(argumento)
    }

// 2. Crear la versión arrow function de la función anterior.

    let getID2 = (argumento) => typeof(argumento)

// 3. Agregar un default parameter al argumento de la función. Que sea undefined por defecto.

    let getID3 = (argumento = undefined) => typeof(argumento)
    console.log(getID)

// BONUS
// 4. Escribir la arrow function en una linea.

    let arrow = () => console.log(arrow)

// BONUS BONUS
// 5. Pasarle un array o un objeto a la función.

    


// BONUS BONUS BONUS (CRACK)
// 6. Crear un array con diferentes tipos (int, string, boolean, etc) 
// y usar un for para recorrerlo y en cada iteración usar la función creada para mostrar el tipo en consola.

// const verbos = ['jugó', 'anotó', 'pegó']

// for (let i=0; i<verbos.length; i++){
//     getID(verbos[i]);
//     console.log(getID(verbos[i]))
// }

// console.groupEnd()



////////////////////////////

// console.group('Ejercicio 5');

// Transformar la siguiente funcion en una IIFE.
// let app = (function iife() {
//     let examen = {
//         name: 'Resonancia Rodilla',
//         date: '18-10-2019'
//     }

//     // console.log('Examen inicial: ', examen)

//     function changeName(newName) {
//         examen.name = newName
//     }

//     function changeDate(newDate) {
//         examen.date = newDate
//     }

//     function createExamImage(examImage) {
//         examen.examImage = examImage
        
//     }

//     function createDiagnostic(examDiagnostic) {
//         examen.examDiagnostic = examDiagnostic
        
//     }

//     return {
//         examen,
//         changeName,
//         changeDate,
//         createExamImage,
//         createDiagnostic
//     }
// })();

// console.log(app)
// app.changeName("examen-2");
// app.changeDate("18-10-2020");
// app.createDiagnostic("el paciente no tiene nada, un milagro");
// app.createExamImage({prop1:"nombre1" , prop2:"nombre2"});

// console.log(app.examen)

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

// let app2 = (function() {
//     // let examen = {
//     //     name: 'Resonancia Rodilla',
//     //     date: '18-10-2019'
//     // }

//     function changeName(newName) {
//         examen.name = newName
//         console.log(this.examen)
//     }

//     // const changeName = () => console.log(examen)
    


//     return {
//         examen:{
//             name: 'Resonancia Rodilla',
//             date: '18-10-2019'
//         },
//         changeName:function changeName(newName) {
//             // examen.name = newName
//             console.log(this.examen)
//         }
        
//     }
// })();

// app2.changeName("nombre1")


     
//////////////////////////////////////////////////
     
    //  const lesiones = (function(){
    //         let contador = 30;
    //         console.log(contador)
    //         function suma (lesiones){
    //             console.log(contador)
    //             return lesiones+contador
    //         }
    //         return {suma, contador}
    //      })()

    //     // console.log (lesiones.suma(lesiones.contador))
    //     // console.log(lesiones.contador) 
    //     // console.log(contador)

///////////////////////////////////
// console.groupEnd()
// console.groupCollapsed('Ejercicio 4')

// const equipos = [
//     {
//         nombre: 'Brasil',
//         ganados: 3,
//         goles: 10,
//         puntos: 10,
//         eliminado: false,
//         faltas: 19
//     },
//     {
//         nombre: 'Argentina',
//         ganados: 3,
//         goles: 7,
//         puntos: 10,
//         eliminado: false,
//         faltas: 5
//     },
//     {
//         nombre: 'Chile',
//         ganados: 1,
//         goles: 3,
//         puntos: 5,
//         eliminado: true,
//         faltas: 3
//     }
// ];

// for(i = 0; i < equipos.length; i++) {
//     // console.log(equipos[i])

//     // Equality Operator
//     // Mostrar el equipo que sacó 5 puntos.
//     if (equipos[i].puntos===5) {
//         console.log(equipos[i].nombre, '5 puntos')
//     }

//     // Logical Operator
//     // Mostrar el equipo que sacó 10 puntos y metió 10 goles.
//     if (equipos[i].puntos===10 && equipos[i].goles===10) {
//         console.log(equipos[i].nombre, 'tiene 10 puntos y 10 goles')
//     }

//     // Relational Operator
//     // Mostrar los equipos que sacaron mas de 5 goles.
//     if (equipos[i].goles>5) {
//         console.log(equipos[i].nombre, 'tiene mas de 5 goles')
//     }

//     // BONUS
//     // Conditional Operator
//     // Mostrar 'perdió' si eliminado es true.
//     // Mostrar 'aún no pierde' si eliminado es falso
//     console.log(equipos[i].nombre, equipos[i].eliminado? "Perdió" : "Aún no pierde")

//     // BONUS BONUS
//     // Mostrar los equipos con 4 ganados o con mas de 1 gol
//     if (equipos[i].ganados===4 || equipos[i].goles>1) {
//         console.log(equipos[i].nombre, 'tiene 4 ganados o mas de 1 gol')
//     }

//     // BONUS BONUS BONUS
//     // Inventar otro if con dos operators
//     // TIP: se puede agregar otra propiedad al arreglo equipos si quieren

//     if (equipos[i].goles>2 || equipos[i].faltas>10){
//         console.log(equipos[i].goles ,equipos[i].faltas, equipos[i].nombre, 'es el equipo con mas faltas' )
//     }
// }


// console.log('----------------------------------------------')
// console.log('Ejercicio 3')

// console.log('Paso 1: jugadores')
// Recorrer el array jugadores con un bucle for desde el principio
// Saltandose el segundo jugador y terminando el ciclo en el quinto jugador
// En cada ciclo mostrar el nombre del jugador en consola

// const jugadores = ['Salas','Zamorano', 'Sanchez', 'Vidal','Medel','Bravo']

// for (let i=0; i<jugadores.length; i++){
//     if (i=== 1)
//     continue;  
//     if (i===5)
//     break;
//     console.log(jugadores[i])
// }

// console.log('')
// console.log('Paso 2: mediciones')
// Recorrer el array mediciones con un bucle for desde el principio hasta el final
// En cada ciclo mostrar el tipo de cada medicion junto al valor de la medición en consola
// TIP: usar typeof()
// const mediciones = [100, '86', 1.4, '5.5', 66, true, 'Positivo']

// for (let i=0; i<mediciones.length; i++){
//     console.log(typeof(mediciones[i]), mediciones[i])
// }

// console.log('')
// console.log('Paso 3: conversión')
// Recorrer nuevamente el array de mediciones 👆 de principio a fin
// En cada ciclo transformar a tipo String los tipos Int y mostrar en consola
// TIP: usar .toString()
// BONUS: En en mismo bucle for pasar los tipo String a tipo Int con parseInt()
// BONUS BONUS: En en mismo bucle for pasar los tipo String a tipo Int con parseInt()

// for (let i=0; i<mediciones.length; i++){
//     if (typeof(mediciones[i])==="number"){
//         console.log(mediciones[i].toString(), typeof(mediciones[i].toString()))
//     }
//     if (typeof(mediciones[i])==="string"){
//         console.log(parseInt(mediciones[i]),typeof(parseInt(mediciones[i])))
//     }
// }

// console.log('')
// console.log('Paso 4: Doble loop')
// BONUS BONUS BONUS (CRACK)
// Usando los arrays ya declarados, recorrer el array jugadores y por cada jugador recorrer todas las mediciones
// TIP: usar un bucle for dentro otro bucle for


// for (let i=0; i<jugadores.length; i++){
//     console.log(jugadores[i])
//     for (let i=0; i<mediciones.length; i++){
//         console.log(mediciones[i])
    
//     }
// }



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

    
