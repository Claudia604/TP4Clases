/* 4- Gestión de proyectos en una empresa: Tienes dos arrays, uno para los nombres de proyectos y otro
para los estados de los proyectos. Debes crear funciones que permitan agregar nuevos proyectos, cambiar el
estado de un proyecto, asignar un responsable y generar un resumen de proyectos en curso. */

const nombres = [];
const estados = [];
const responsables = [];

function agregarProyecto(nombre, estado, responsable = "Sin asignar") {
  nombres.push(nombre);
  estados.push(estado);
  responsables.push(responsable);
}

function cambiarEstadoProyecto(nombre, nuevoEstado) {
  const indice = nombres.indexOf(nombre);
  if (indice !== -1) {
    estados[indice] = nuevoEstado;
  } else {
    console.log("Proyecto no encontrado");
  }
}

function asignarResponsable(nombre, responsable) {
  const indice = nombres.indexOf(nombre);
  if (indice !== -1) {
    responsables[indice] = responsable;
  } else {
    console.log("Proyecto no encontrado");
  }
}

function generarResumenProyectos() {
  let resumenHTML = "Resumen de proyectos en curso:<br>";
  for (let i = 0; i < nombres.length; i++) {
    resumenHTML += `${nombres[i]} - Estado: ${estados[i]} - Responsable: ${responsables[i]}<br>`;
  }
  document.body.innerHTML = resumenHTML;
}

agregarProyecto("Proyecto Casa", "En curso", "Luciano");
cambiarEstadoProyecto("Proyecto Casa", "Completado");
asignarResponsable("Proyecto Casa", "Claudia");
generarResumenProyectos();
