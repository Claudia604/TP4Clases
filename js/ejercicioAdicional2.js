/* 2- Registro de notas de estudiantes: Tienes dos arrays, uno con nombres de estudiantes y otro con sus
respectivas notas en un curso. Debes crear funciones que calculen el promedio de notas por estudiante y
muestren un resumen con los nombres de los estudiantes que aprobaron y reprobaron el curso. */

const estudiantes = ["Andrea", "Florencia", "Angeles", "Paola", "Leo", "Luisa"];
const notasEstudiantes = [9, 6, 4.5, 6.5, 8, 1];

function calcularPromedio(notas) {
  const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return sumaNotas / notas.length;
}

function estadoEstudiante(nota) {
  return nota >= 6.0 ? "Aprobado" : "Reprobado";
}

const promedios = estudiantes.map((nombre, indice) => {
  const promedio = calcularPromedio([notasEstudiantes[indice]]);
  const estado = estadoEstudiante(promedio);
  return { nombre, promedio, estado };
});

const aprobados = promedios.filter(
  (estudiante) => estudiante.estado === "Aprobado"
);
const reprobados = promedios.filter(
  (estudiante) => estudiante.estado === "Reprobado"
);

document.write(`Estudiantes aprobados:<br>`);
aprobados.forEach((estudiante) =>
  document.write(
    `${estudiante.nombre}: Promedio ${estudiante.promedio.toFixed(2)}<br>`
  )
);

document.write(`<br>Estudiantes reprobados:<br>`);
reprobados.forEach((estudiante) =>
  document.write(
    `${estudiante.nombre}: Promedio ${estudiante.promedio.toFixed(2)}<br>`
  )
);
