const estudiante = [
    { nombre: "Juan", nota: 85 },
    { nombre: "María", nota: 92 },
    { nombre: "Pedro", nota: 30 },
    { nombre: "Tito", nota: 59 },
    { nombre: "Damian", nota: 24 },
    { nombre: "Jose", nota: 30 },

];

const nombreEstudante = prompt("Ingrese el nombre del alumno:");

let nota;

for (let i = 0; i < estudiante.length; i++) {
    if (estudiante[i].nombre === nombreEstudante) {
        nota = estudiante[i].nota;
        break;
    }
}

if (nota) {
    alert("La nota de " + nombreEstudante + " es " + nota);
} else {
    alert("No se encontró un alumno con el nombre " + nombreEstudante);
}

if(nota > 50){
alert('Alumno aprobado');
}
if(nota < 50){
    alert('Alumno NO aprobado');
}




