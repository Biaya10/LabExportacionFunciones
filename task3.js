/*3. Ed quisiera una forma de calcular una edad a partir de una fecha de nacimiento dada.
    - Exporta una función que tome 3 argumentos - un año, un mes y un día - y luego devuelva una edad precisa.
    - Por ejemplo, calculadoraEdad(2000, 12, 25) debe devolver la edad de alguien nacido el día de Navidad de 2000.*/

export function calculadoraEdad(anio, mes, dia) {
  const hoy = new Date();
  const cumpleanos = new Date(anio, mes, dia);

  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  const diferenciaMes = hoy.getMonth() - cumpleanos.getMonth();

  if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
}