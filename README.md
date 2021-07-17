# ejercicios-js-reconquer

## Ejercicio 5 🔥

En [index.js](index.js) codear lo siguiente:

1. Transformar la siguiente funcion en una IIFE.

```javascript
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
```

2. Usar la función changeName para cambiar el nombre del examen.

3. Usar la función changeDate para cambiar la fecha del examen.

#### BONUS 🏅
Usar la función createExamImage para crear un ExamImage. Pasando a la función un objeto con dos propiedades a elección.

4. Mostrar en consola el nuevo examen.

#### BONUS BONUS 🏅
Crear una nueva función y usarla.

#### BONUS BONUS BONUS (CRACK) 🎖
Crear un nuevo IIFE con al menos una función y usarla.

##### 🚀  Suban sus respuestas a sus ramas

## Tabla de posiciones

| Nombre | BONUS    |
| :-------- | :------- | 
| [@Camilo Alarcón H.](https://github.com/Camilo-Alarcon) | 🏅 🏅 🏅 🎖 🎖 | 
| [@webson2020](https://github.com/webson2020) | 🏅 🏅 🏅 🏅 | 
  





