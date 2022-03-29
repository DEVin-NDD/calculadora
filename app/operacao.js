export function soma(...numeros) {
  let resultado = 0;
  numeros.forEach((numero) => {
    resultado += numero;
  });
  return resultado;
}

export function subtracao(...numeros) {
  let resultado = 0;
  numeros.forEach((numero) => {
    resultado -= numero;
  });
  return resultado;
}

export function multiplicacao(...numeros) {
  let resultado = 0;
  numeros.forEach((numero) => {
    resultado *= numero;
  });
  return resultado;
}

export function divisao(...numeros) {
  let resultado = 0;
  numeros.forEach((numero) => {
    resultado /= numero;
  });
  return resultado;
}
