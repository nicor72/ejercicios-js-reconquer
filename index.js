
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

// let gol = ['juega', 'pega', 'anota'];
// console.log(gol)

// 2. Declarar un objeto que contenga lo siguiente:
// Nombre de tu jugador favorito de esta copa america
// Número de partidos jugados en la copa
// Número de goles anotados en la copa
// Número de faltas en la copa

// let jugador = {nombre:'Ben Beretron', Npartidos:2, Ngoles:1, Nfaltas:10};
// console.log(jugador);

// 3. Acceder directamente al nombre del jugador, 
// al verbo jugar y al número de partidos jugados y mostrar en consola
// TIP: Usar un solo console.log y se debe formar una oración del tipo "jugador jugó 3"


// console.log (jugador.nombre, gol[0], jugador.Npartidos);

// 4. Destructurar el nombre del jugador, el verbo pegar y el número de faltas en la copa y mostrar en consola


// let {nombre,Nfaltas,Ngoles} = jugador;
// let [,faltas,anota] = gol;
// console.log(nombre,faltas,Nfaltas);

// BONUES: crear una función y ejecutarla, que reciba el nombre del jugador, 
// un verbo y una propiedad del jugador para mostrar en consola una oración del tipo:
// jugador anota 1
// BONUS BONUS agregar alfinal de la oración un string que complete la oración ej: jugador anota 1 'gol'
// BONUS BONUS BONUS Recibir en la función con rest parameters


// function MiJugador(nombre,goles,Ngoles){
//     console.log(nombre,goles,Ngoles + "","GOL");
// }
// MiJugador(nombre,anota,Ngoles);

// BONUS BONUS BONUS Recibir en la función con rest parameters

// function misjuegos(...rest){
//     console.log(rest[0],rest[1],rest[2]); 

// }

// misjuegos('juega','pega','anota')


// Tarea sesión 3 (domingo 4 de julio)

// En index.js codear lo siguiente:

// Recorrer el array jugadores con un bucle for desde el principio.

// const jugadores = ['Jordan', 'Pippen', 'Oneil', 'Rodman', 'Bryant', 'Barkley']

// for (let i = 0 ; i < jugadores.length; i++) {
//     console.log(jugadores[i])   
// }

// // Saltandose el segundo jugador y terminando el ciclo en el quinto jugador.
// // En cada ciclo mostrar el nombre del jugador en consola 

// for (let i = 0 ; i < jugadores.length; i++) {
//     if(i===1)
//     continue;
//     console.log(jugadores[i])
//     if(i===4)
//     break;
// }


// Recorrer el array mediciones con un bucle for desde el principio hasta el final. 
// En cada ciclo mostrar el tipo de cada medición junto al valor de la medición en consola
// TIP: usar typeof()

// const mediciones = [100, '86', 1.4, '5.5', 66, true, 'Positivo']
// for (let i = 0; i < mediciones.length; i++) {
    
//     console.log(mediciones[i], typeof(mediciones[i]))
// }


// Recorrer nuevamente el array de mediciones 👆 de principio a fin. 
// En cada ciclo transformar a tipo String los tipos Int y mostrar en consola
// TIP: usar .toString()

// const mediciones = [100, '86', 1.4, '5.5', 66, true, 'Positivo']
// for (let i = 0 ; i < mediciones.length; i++) {
//     if(typeof(mediciones[i])==='number'){
//     console.log(mediciones[i].toString(), typeof(mediciones[i].toString()))
//     }
      
// }


// BONUS 🏅
// En en mismo bucle for pasar los tipo String a tipo Int con parseInt()

// const mediciones = [100, '86', 1.4, '5.5', 66, true, 'Positivo']
// for (let i = 0 ; i < mediciones.length; i++) {
//     if(typeof(mediciones[i])==='string'){
//         console.log(parseInt(mediciones[i]), typeof(parseInt(mediciones[i])))
//         }
      
// }


// BONUS BONUS 🏅 🏅
// Mostrar también el nuevo tipo

// const mediciones = [100, '86', 1.4, '5.5', 66, true, 'Positivo']
// for (let i = 0 ; i < mediciones.length; i++) {
//     if(typeof(mediciones[i])==='string'){
//         console.log(parseInt(mediciones[i]), typeof(parseInt(mediciones[i])))
//         }
      
// }

// BONUS BONUS BONUS (CRACK) 🏅 🏅 🎖
// Usando los arrays ya declarados, recorrer el array jugadores y por cada jugador recorrer todas las mediciones

// for (let i = 0 ; i < jugadores.length; i++) {
//     console.log(jugadores[i])
//     for (let i = 0; i < mediciones.length; i++) {
//         console.log(mediciones[i])
//    }
// }



// TIP: usar un bucle for dentro de otro bucle for


// 07 de julio (cuarta sesión: Operadores)

// let contador = null
// let contador2 = 10
// //  if(contador==1){
// //     contador+=10
// //  }
// //  if(contador==11||contador==5){
// //     contador*=5
// //  } 
// //  console.log(contador)

//  const nuevoContador = contador || contador2
 
//  console.log(contador)



// console.group('Ejercicio 4')   

// const equipos = [
//     {
//         nombre: 'Brasil',
//         ganados: 3,
//         goles: 10,
//         puntos: 10,
//         eliminado: false,
//         player: "neymar"
//     },
//     {
//         nombre: 'Argentina',
//         ganados: 3,
//         goles: 7,
//         puntos: 10,
//         eliminado: false,
//         player: "messi"
//     },
//     {
//         nombre: 'Chile',
//         ganados: 1,
//         goles: 3,
//         puntos: 5,
//         eliminado: true,
//         player: "vidal"
//     }
// ];

// for(i = 0; i < equipos.length; i++) {
//     // console.log(equipos[i])

//     // Equality Operator
//     // Mostrar el equipo que sacó 5 puntos.
    
//     if (equipos[i].puntos === 5) {
//         console.log(equipos[i].nombre, '5 puntos')
//     }

//     // Logical Operator
//     // Mostrar el equipo que sacó 10 puntos y metió 10 goles.
    
//     if (equipos[i].puntos === 10 && equipos[i].goles === 10) {
//         console.log(equipos[i].nombre, 'tiene 10 puntos y 10 goles')
//     }

//     // Relational Operator
//     // Mostrar los equipos que sacaron mas de 5 goles.

//     if (equipos[i].goles > 5) {
//         console.log(equipos[i].nombre, 'tiene mas de 5 goles')
//     }

//     // BONUS
//     // Conditional Operator
//     // Mostrar 'perdió' si eliminado es true.
//     // Mostrar 'aún no pierde' si eliminado es falso
//     console.log(equipos[i].nombre, equipos[i].eliminado? "perdió" : "aún no pierde")

//     // BONUS BONUS
//     // Mostrar los equipos con 4 ganados o con mas de 1 gol
//     if (equipos[i].ganados===4 || equipos[i].goles>1) {
//         console.log(equipos[i].nombre, 'tiene 4 ganados o mas de 1 gol')
//     }

// //     // BONUS BONUS BONUS
// //     // Inventar otro if con dos operators
// //     // TIP: se puede agregar otra propiedad al arreglo equipos si quieren
// if (equipos[i].ganados===3 && equipos[i].player === "neymar") {
//     console.log(equipos[i].nombre, 'chao jogobonito')
// }

// }

// jueves 22 de julio IIFEs

console.group('Ejercicio 5');

// Transformar la siguiente funcion en una IIFE.
let app = (function iife() {
    let examen = {
        name: 'Resonancia Rodilla',
        date: '18-10-2019',
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

    function createdTypeInjury(injury){
        examen.Injury = injury  
    }

    return {
        examen,
        changeName,
        changeDate,
        createExamImage,
        createdTypeInjury
    }
})();

console.log(app)
app.changeName('ecografía')
app.changeDate("20-10-2019")
app.createExamImage({type: 'sangre', fecha: '22-07-2021'})
app.createdTypeInjury('Brazo')
console.log(app.examen)


let Aplication = (function() {
    let alumno = {
        name: 'Nicolás Rossetti',
        course: 'cuarto medio C',
    }

    console.log('Datos generales: ', alumno)

    function ChangeCourse(newCourse) {
        alumno.course = newCourse
    }

    return {
        alumno,
        ChangeCourse
    }
})();

    Aplication.ChangeCourse('cuarto medio A')
    console.log(Aplication.alumno)
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

