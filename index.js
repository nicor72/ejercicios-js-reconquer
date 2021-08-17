
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

// console.group('Ejercicio 5');

// // Transformar la siguiente funcion en una IIFE.
// let app = (function iife() {
//     let examen = {
//         name: 'Resonancia Rodilla',
//         date: '18-10-2019',
//     }

//     console.log('Examen inicial: ', examen)

    
//     function changeName(newName) {
//         examen.name = newName

//     }

//     function changeDate(newDate) {
//         examen.date = newDate
//     }

//     function createExamImage(examImage) {
//         examen.examImage = examImage
//     }

//     function createdTypeInjury(injury){
//         examen.Injury = injury  
//     }

//     return {
//         examen,
//         changeName,
//         changeDate,
//         createExamImage,
//         createdTypeInjury
//     }
// })();

// console.log(app)
// app.changeName('ecografía')
// app.changeDate("20-10-2019")
// app.createExamImage({type: 'sangre', fecha: '22-07-2021'})
// app.createdTypeInjury('Brazo')
// console.log(app.examen)


// let Aplication = (function() {
//     let alumno = {
//         name: 'Nicolás Rossetti',
//         course: 'cuarto medio C',
//     }

//     console.log('Datos generales: ', alumno)

//     function ChangeCourse(newCourse) {
//         alumno.course = newCourse
//     }

//     return {
//         alumno,
//         ChangeCourse
//     }
// })();

//     Aplication.ChangeCourse('cuarto medio A')
//     console.log(Aplication.alumno)
// // Usar la función changeName para cambiar el nombre del examen.

// // Usar la función changeDate para cambiar la fecha del examen.

// // BONUS
// // Usar la función createExamImage para crear un ExamImage.
// // pasando a la función un objeto con dos propiedades a elección

// // Mostrar el consola el nuevo examen

// // BONUS BONUS
// // Crear una nueva función y usarla

// // BONUS BONUS BONUS (CRACK)
// // Crear un nuevo IIFE con al menos una función y usarla


// console.groupEnd()

// console.group('Ejercicio 6')

// 1. Crear una función que reciba un argumento y devuelva el tipo de este.
// TIP: usar typeof()

// function devolverArgumento(argumentos) {
//     console.log(typeof(argumentos));
//     return typeof(argumentos)
// }
// devolverArgumento(34);
// devolverArgumento('nombre');


// 2. Crear la versión arrow function de la función anterior.

// let devolverArgumento = (argumentos) => { 
// console.log(typeof(argumentos));
// return typeof(argumentos)
// }
//  devolverArgumento(34);
//  devolverArgumento('nombre');   

// 3. Agregar un default parameter al argumento de la función. Que sea undefined por defecto.

// let devolverArgumento = (argumentos = undefined) => { 
//     console.log(typeof(argumentos));
//     return typeof(argumentos)
//     }
//      devolverArgumento(34);
//      devolverArgumento('nombre');  
//      devolverArgumento();

// BONUS
// 4. Escribir la arrow function en una linea.


// BONUS BONUS
// 5. Pasarle un array o un objeto a la función.

// let arreglo = ['a','b','c','d']
// // let objeto = {
// //     id: 1,
// //     nombre: 'nicolás'
// // }
// function devolverArgumento(argumentos) {
//     console.log(typeof(argumentos));
//     return typeof(argumentos)
// }
// devolverArgumento(arreglo);
// devolverArgumento(objeto);


// BONUS BONUS BONUS (CRACK)
// 6. Crear un array con diferentes tipos (int, string, boolean, etc) 
// y usar un for para recorrerlo y en cada iteración usar la función creada para mostrar el tipo en consola.

// for(i = 0; i < arreglo.length; i++) {
// const resultado = devolverArgumento(arreglo[i])
// console.log(resultado)
// }

// const resultado = arreglo.map((current, key) => {
//     devolverArgumento(current)
//     console.log(current, key)
//     return key
// })

// console.log(resultado)

// console.groupEnd()

// console.group('Ejercicio 7')

// const autoreportes = [
//     {
//         jugador: 'Chupete Suazo',
//         CK: 99,
//         Orina: 'Amarilla',
//         animo: 'A full'
//     },{
//         jugador: 'Mago Valdivia',
//         CK: 1,
//         Orina: 'Verde',
//         animo: 'con caña'
//     }
// ]

// 1. Usando forEach recorrer el arreglo autoreportes y mostrar el estado de animo de cada jugador:

// autoreportes.forEach(({animo}, index) => console.log({animo}, index));

// 2. Usando map recorrer el arreglo autoreportes y devolver la orina de cada jugador. Guardar en una constante:

// autoreportes.map(({Orina}, index) => console.log({Orina}, index))

// const orina = autoreportes.map(orina => orina.Orina);
// console.log(orina);

// 3. Usar map o forEach (justifique su respuesta). para guardar en una constante todos los indices del arreglo.
//  MI RESPUESTA ES MAP PORQUE LO GUARDA COMO ARREGLO, PERO LA VERDAD NO ESTOY SEGURO.

// const guardarindicesmap  = autoreportes.map(({Orina}, index) => index)
// console.log(guardarindicesmap)


// BONUS
// 4. Usar filter para filtrar las CK mayores a 50

// let ckmenor50 = autoreportes.filter(ckmenor50 => ckmenor50.CK > 50);
// console.log(ckmenor50);

// BONUS BONUS
// 5. Usar find para encontrar a chupete suazo

// let chupete = autoreportes.find(chupete => chupete.jugador === 'Chupete Suazo');
// console.log(chupete)

// BONUS BONUS BONUS
// 6. usar forEach para agregar una nueva propiedad momento: 'Entrenamiento' a cada jugador: 

// autoreportes.forEach((autoreporte)=> {
//     autoreporte={
//         momento: 'Entrenamiento',
//         minutos: 90,
//         ...autoreporte
//     }
// })

// console.groupEnd()


// console.group('Ejercicio 8')

// // 1. Crear un array con objetos (igual que el ejemplo del ejercicio anterior):


// const pedidos = [
//     {
//         categoría: 'MATERIALES COVID-19',
//         nombre: 'Mascarillas 3 pliegues',
//         solicitud: 'cajas (32u)',
//         cantidad: 10
//     },{
//         categoría: 'MEDICAMENTOS',
//         nombre: 'Amoxicilina 500mg',
//         solicitud: 'cajas (6u)',
//         cantidad: 7
//     }
// ]


// // 2. Recorrer el arreglo y devolver una propiedad. Guardar en una constante:
// // si pongo forEach me sale undifined revisar eso (el forEach no devuelve nada acordarse.)

// const nombres = pedidos.map(pedido => pedido.nombre);
// console.log(nombres);

// // 3. Usar map o forEach para guardar en una constante todos los indices del arreglo.

// const indices  = pedidos.map((pedido, index) => index)
// console.log(indices)

// // 4. Usar filter o find para encontrar o filtrar una propiedad.
// // por qué no me sale la cantidad 7?? /el find ecuentr el primero que encuentra)

// const cantidades = pedidos.find(pedido => pedido.cantidad > 5)
// console.log(cantidades)

// // let cantidades = pedidos.find(cantidades => cantidades.cantidad < 5);
// // console.log(cantidades)

// let cantidadMayor5 = pedidos.filter(cantidadMayor5 => cantidadMayor5.cantidad > 5);
// console.log(cantidadMayor5);

// // BONUS
// // 5. con el siguiente arreglo, usar forEach para sumar todos sus valores
// // TIP: declarar un let en 0 antes del forEach

// const numbers = [3, 55, 62, 178]; 
// let suma = 0;
// numbers.forEach(function (numero) {
//     suma += numero;
// })
// console.log(suma)


// // BONUS BONUS
// // 6. usar reduce para sumar los valores del arreglo
// // a= acumulador o valor inicial
// // b= current valor

// let total = numbers.reduce((a, b) => a + b, 0);
// console.log(total)

// // BONUS BONUS BONUS
// // 7. Mostrar el ultimo elemento del array sin importat su largo

// // numbers.forEach((valor, index) => 
// console.log(numbers[numbers.length -1]);

// console.groupEnd()


// Ejercicio 9: Hacer una función que devuelva la cantidad de días que lleva muerto Carlitos Menem (2021-02-14)

// let fechaMuerteCarlitos = new Date('02/14/2021');
// let currentTime = new Date();
// let futurama = new Date('10/14/2071');

// const milisegundosDia = 24 * 60 * 60 * 1000;

// let milisegundosTranscurridos = Math.abs(fechaMuerteCarlitos.getTime() - currentTime.getTime());
// let diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosDia);
// let milisegundosHastaFuturama = Math.abs(fechaMuerteCarlitos.getTime() - futurama.getTime());
// let diasHastaFuturama = Math.round(milisegundosHastaFuturama/milisegundosDia);
// let añosHastaFuturama = Math.abs(fechaMuerteCarlitos.getFullYear() - futurama.getFullYear());


// console.log(fechaMuerteCarlitos);
// console.log(currentTime);
// console.log(milisegundosDia);
// console.log(milisegundosTranscurridos);
// console.log(diasTranscurridos);
// console.log(milisegundosHastaFuturama);
// console.log(diasHastaFuturama);
// console.log(añosHastaFuturama);

// console.log(); 


// FUNCIÓN PARA SABER CUÁNTOS DÍAS HA TRANSCURRIDO DESDE LA MUERTE DE CARLITOS A LA FECHA Y AL (2071, 10, 14)

function calcularDiferenciaDias(fecha1,fecha2) {
   if((!fecha1 instanceof Date) || (!fecha2 instanceof Date)) {
       throw TypeError('Carlitos necesita que ambos argumentos sean de tipo fecha(Date)');
   }

   let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000;
   diferencia /= (60 * 60 * 24);

   return Math.abs(Math.floor(diferencia))
}

console.log(new Date());

console.log();

try {
    console.log(calcularDiferenciaDias(new Date(), new Date(new Date().setDate(new Date().getDate() + 1))));
} catch (e) {
    console.log('Error: ${e.message}');
}

console.log();

try {
    console.log(calcularDiferenciaDias(new Date(2021, 8, 16), new Date(2021, 1, 14)));
} catch (e) {
    console.log('Error: ${e.message}');
}

console.log();

try {
    console.log(calcularDiferenciaDias(new Date(2021, 1, 14), new Date(2071, 10, 14)));
} catch (e) {
    console.log('Error: ${e.message}');
}




// FUNCIÓN PARA SABER CUÁNTOS SEMANAS HA TRANSCURRIDO DESDE LA MUERTE DE CARLITOS A LA FECHA Y AL (2071, 10, 14)

function calcularDiferenciaSemanas(fecha1,fecha2) {
    if((!fecha1 instanceof Date) || (!fecha2 instanceof Date)) {
        throw TypeError('Carlitos necesita que ambos argumentos sean de tipo fecha(Date)');
    }
 
    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000;
    diferencia /= (60 * 60 * 24 * 7);
 
    return Math.abs(Math.floor(diferencia))
 }

 console.log(new Date());

 console.log();
 
 try {
     console.log(calcularDiferenciaSemanas(new Date(), new Date(new Date().setDate(new Date().getDate() + 1))));
 } catch (e) {
     console.log('Error: ${e.message}');
 }
 
 console.log();

 try {
    console.log(calcularDiferenciaSemanas(new Date(2021, 8, 16), new Date(2021, 1, 14)));
} catch (e) {
    console.log('Error: ${e.message}');
}

console.log();

try {
    console.log(calcularDiferenciaSemanas(new Date(2021, 1, 14), new Date(2071, 10, 14)));
} catch (e) {
    console.log('Error: ${e.message}');
}



// FUNCIÓN PARA SABER CUÁNTOS MESES HAN TRANSCURRIDO DESDE LA MUERTE DE CARLITOS A LA FECHA Y AL (2071, 10, 14)

function calcularDiferenciaMeses(fecha1,fecha2) {
    if((!fecha1 instanceof Date) || (!fecha2 instanceof Date)) {
        throw TypeError('Carlitos necesita que ambos argumentos sean de tipo fecha(Date)');
    }
 
    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000;
    diferencia /= (60 * 60 * 24 * 7 * 4);
 
    return Math.abs(Math.floor(diferencia))
 }
 
 console.log(new Date());

 console.log();

 try {
    console.log(calcularDiferenciaSemanas(new Date(), new Date(new Date().setDate(new Date().getDate() + 1))));
} catch (e) {
    console.log('Error: ${e.message}');
}


 try {
    console.log(calcularDiferenciaMeses(new Date(2021, 8, 16), new Date(2021, 1, 14)))
 } catch (e) {
    console.log('Error: ${e.message}');
 }

 try {
    console.log(calcularDiferenciaMeses(new Date(2021, 1, 14), new Date(2071, 10, 14)));
} catch (e) {
    console.log('Error: ${e.message}');
}



// FUNCIÓN PARA SABER CUÁNTOS AÑOS HAN TRANSCURRIDO DESDE LA MUERTE DE CARLITOS A LA FECHA Y AL (2071, 10, 14)

function calcularDiferenciaAños(fecha1,fecha2) {
    if((!fecha1 instanceof Date) || (!fecha2 instanceof Date)) {
        throw TypeError('Carlitos necesita que ambos argumentos sean de tipo fecha(Date)');
    }
 
    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000;
    diferencia /= (60 * 60 * 24);
    diferencia /= 365.25;
    return Math.abs(Math.floor(diferencia))
 }
 
 console.log(new Date());

 console.log();

 try {
    console.log(calcularDiferenciaAños(new Date(), new Date(new Date().setDate(new Date().getDate() + 1))));
} catch (e) {
    console.log('Error: ${e.message}');
}


 try {
    console.log(calcularDiferenciaAños(new Date(2021, 8, 16), new Date(2021, 1, 14)))
 } catch (e) {
    console.log('Error: ${e.message}');
 }

 try {
    console.log(calcularDiferenciaAños(new Date(2021, 1, 14), new Date(2071, 10, 14)));
} catch (e) {
    console.log('Error: ${e.message}');
}