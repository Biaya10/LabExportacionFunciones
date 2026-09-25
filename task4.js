
/* 4. Ed quisiera una forma de calcular las edades de sus amigos.
    - Exporta una clase que devuelva una cadena que contenga el nombre y la edad de un amigo dado. Debe:
    - Tomar 4 argumentos - un nombre, un año, un mes y un día - y construir un objeto con esas 4 propiedades.
    - Tener un método público llamado retornarEdad() que devuelva la siguiente cadena: ¡<nombre> tiene <edad> años hoy!*/

export class EdadAmigo {
  constructor(nombre, anio, mes, dia) {
    this.nombre = nombre;
    this.anio = anio;
    this.mes = mes;
    this.dia = dia;
  }

  retornarEdad() {
    const hoy = new Date();
    const cumpleanos = new Date(this.anio, this.mes, this.dia);

    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const diferenciaMes = hoy.getMonth() - cumpleanos.getMonth();

    if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    return `¡${this.nombre} tiene ${edad} años hoy!`;
  }
}