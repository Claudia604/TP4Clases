/* Modelando clases

2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la 
descripción del estado de la cuenta. */

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (cantidad) {
    this.saldo += cantidad;
  },

  extraer: function (cantidad) {
    if (this.saldo >= cantidad) {
      this.saldo -= cantidad;
    } else {
      document.write("Saldo insuficiente<br>");
    }
  },

  informar: function () {
    document.write(`Titular: ${this.titular}<br>`);
    document.write(`Saldo actual: $${this.saldo.toFixed(2)}<br>`);
  },
};

cuenta.informar();

cuenta.ingresar(100);
cuenta.extraer(50);

cuenta.informar();
