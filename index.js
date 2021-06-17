console.log('vamoooo equipo')
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
