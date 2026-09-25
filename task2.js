/*2. Ed quisiera una forma de ingresar los nombres de tres de sus amigos.
    - Exporta una clase que tome 3 argumentos para construir un objeto con 3 propiedades.
        - Las 3 propiedades en el constructor deben llamarse nombre1, nombre2 y nombre3.*/

export class NombresAmigos {
  constructor(nombre1, nombre2, nombre3) {
    this.nombre1 = nombre1;
    this.nombre2 = nombre2;
    this.nombre3 = nombre3;

  }
}