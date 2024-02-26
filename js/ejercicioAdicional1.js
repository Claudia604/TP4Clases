/* 1- Gestión de inventario en una tienda: Tienes dos arrays, uno que representa los productos en stock y 
otro que almacena los precios de los productos. Debes crear funciones que permitan agregar nuevos 
productos al inventario, eliminar productos agotados y calcular el valor total del inventario. */

const productosDisponibles = [
  "Champu",
  "Acondicionador",
  "Jabon",
  "Crema corporal",
  "Protector solar",
  "Pasta dental",
  "Enjuague bucal",
];
const precios = [4033.2, 4033.2, 1100.5, 3967.8, 11395.7, 2968.25, 5338.6];

function agregarProductos(nombreProducto, precio) {
  productosDisponibles.push(nombreProducto);
  precios.push(precio);
}

function eliminarAgotados() {
  for (let i = 0; i < productosDisponibles.length; i++) {
    if (productosDisponibles[i] === 0) {
      productosDisponibles.splice(i, 1);
      precios.splice(i, 1);
      i--;
    }
  }
}

function valorTotal() {
  let valorTotal = 0;
  for (let i = 0; i < productosDisponibles.length; i++) {
    valorTotal += precios[i];
  }
  return valorTotal;
}

function mostrarInventario() {
  const tabla = document.createElement("table");
  tabla.innerHTML = `
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          ${productosDisponibles
            .map(
              (producto, index) => `
            <tr>
              <td>${producto}</td>
              <td>$${precios[index].toFixed(2)}</td>
            </tr>
          `
            )
            .join("")}
          <tr>
            <td><strong>Total:</strong></td>
            <td><strong>$${valorTotal().toFixed(2)}</strong></td>
          </tr>
        </tbody>
      `;

  document.body.appendChild(tabla);
}

mostrarInventario();
