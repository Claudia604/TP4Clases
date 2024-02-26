/* 3- Catálogo de biblioteca: Tienes un array que almacena títulos de libros en una biblioteca. Debes 
crear funciones que permitan a los usuarios buscar libros por título, verificar si un libro específico
está disponible para préstamo y llevar un registro de la disponibilidad de los libros. */

const catalogoBiblioteca = [
  { titulo: "Harry Potter y la piedra filosofal", disponible: true },
  { titulo: "Odisea", disponible: true },
  { titulo: "El principito", disponible: false },
  { titulo: "Orgullo y prejuicio", disponible: true },
  { titulo: "Hamlet", disponible: false },
];

function buscarLibro(titulo) {
  const libroEncontrado = catalogoBiblioteca.find(
    (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase()
  );
  return libroEncontrado || "Libro no encontrado";
}

function disponibilidad(titulo) {
  const libroEncontrado = buscarLibro(titulo);
  if (libroEncontrado !== "Libro no encontrado") {
    return libroEncontrado.disponible ? "Libro disponible" : "Libro prestado";
  }
  return libroEncontrado;
}

function prestarLibro(titulo) {
  const libroEncontrado = catalogoBiblioteca.find(
    (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase()
  );
  if (libroEncontrado && libroEncontrado.disponible) {
    libroEncontrado.disponible = false;
    return `El libro "${titulo}" esta disponible.`;
  } else if (libroEncontrado) {
    return `El libro "${titulo}" no esta disponible.`;
  } else {
    return "Libro no encontrado";
  }
}

document.write(prestarLibro("Harry Potter y la piedra filosofal"));
