/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus
propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos
instanciados. */

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write(
      `Código: ${this.codigo} Nombre: ${this.nombre} Precio: $${this.precio}<br>`
    );
  }
}

const lapiz = new Producto(101, "Lapiz", 1000.99);
const lapicera = new Producto(102, "Lapicera", 1562.99);
const regla = new Producto(103, "Regla", 800.33);

const productosArray = [lapiz, lapicera, regla];

productosArray.forEach((producto) => {
  producto.imprimeDatos();
});
