import * as calcular from "./operacao.js";
import {
  perguntarOperacao,
  imprimirResultado,
  pedirNumero,
} from "./visualizacao.js";

function init() {
  const operacao = perguntarOperacao();
  const listaNumeros = pedirNumero();

  switch (operacao) {
    case "+":
      imprimirResultado(calcular.soma(...listaNumeros));
      break;
    case "-":
      imprimirResultado(calcular.subtracao(...listaNumeros));
      break;
    case "*":
      imprimirResultado(calcular.multiplicacao(...listaNumeros));
      break;
    case "/":
      imprimirResultado(calcular.divisao(...listaNumeros));
      break;
    default:
      imprimirResultado("Operação inválida");
      break;
  }
}

init();
