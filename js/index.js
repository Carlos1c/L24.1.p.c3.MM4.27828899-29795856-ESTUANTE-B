/* Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los nombres de los estudiantes aprobados.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: nombresDeAprobados.
Parámetros: estudiantes (array de objetos estudiante).
Retorno: array de strings, con los nombres de los estudiantes aprobados. */


let nombresDeAprobados = (array, nota) => {
    let nombre = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].nota >= nota) {
            nombre.push(array[i].nombre);
        }
    }
    return nombre;
}

let array = [
    { nombre: "Luis", semestre: 5, nota: 14 },
    { nombre: "Laura", semestre: 5, nota: 17 },
    { nombre: "David", semestre: 5, nota: 11 },
    { nombre: "Diana", semestre: 5, nota: 9 },
    { nombre: "Tomas", semestre: 5, nota: 6 },
    { nombre: "Tina", semestre: 5, nota: 8 },
];

let salida = document.getElementById("salida");
salida.innerHTML = `Estuantes Aprobados: <br>`;
salida.innerHTML += JSON.stringify(nombresDeAprobados(array, 10));