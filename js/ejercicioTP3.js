/* Rectángulos

3- Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y
ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el 
área */

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }

  mostrarPropiedades() {
    document.write(`Alto: ${this.alto}<br>`);
    document.write(`Ancho: ${this.ancho}<br>`);
  }
}

const miRectangulo = new Rectangulo(5, 8);

miRectangulo.mostrarPropiedades();
document.write(`Perímetro: ${miRectangulo.calcularPerimetro()}<br>`);
document.write(`Área: ${miRectangulo.calcularArea()}<br>`);
