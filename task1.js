
/*1. María está calculando el costo de los pagos mensuales. Por cada transacción hay una tarifa de $3 y un interés del 1% (0.01).
    - Dado un monto de transacción de entrada, exporta una función que devuelva el valor de lo que ella debería pagar.
    - Esta función debe poder tomar un número como entrada y devolver un número como salida. */

export function calculadoraCosto(monto) {
    const valor = Number(monto);
    return valor + 3 + valor * 0.01;
}