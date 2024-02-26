/* Crear objetos

1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está
encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();                  auto encendido

objeto.apadar()                     El auto se apagó */

const auto = {
  color: "Negro",
  marca: "Lamborghini",
  modelo: "Huracán",
  encendido: false,

  encender: function () {
    this.encendido = true;
    document.write("Auto encendido");
  },

  apagar: function () {
    this.encendido = false;
    document.write("El auto se apagó");
  },
};

auto.encender();
