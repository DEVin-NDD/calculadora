// import perguntar from "./perguntar";

export function perguntarOperacao() {
  return window.prompt("Qual operação matemática? [ + , - , * , / ]");
}

export function pedirNumero() {
  return Number(window.prompt("Digite um número"));
}

export function imprimirResultado(resultado) {
  console.log(resultado);
}
