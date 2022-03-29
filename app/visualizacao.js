// import perguntar from "./perguntar";

export function perguntarOperacao() {
  return window.prompt("Qual operação matemática? [ + , - , * , / ]");
}

export function pedirNumero() {
  const listaNumeros = [];

  do {
    const numero = Number(window.prompt("Digite um número"));
    listaNumeros.push(numero);
  } while (window.confirm("Deseja adicionar outro número?"));

  return listaNumeros;
}

export function imprimirResultado(resultado) {
  console.log(resultado);
}
