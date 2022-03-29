import * as calcular from "./operacao.js";
import {
  perguntarOperacao,
  imprimirResultado,
  pedirNumero,
} from "./visualizacao.js";

function init() {
  const operacao = perguntarOperacao();
  const num1 = pedirNumero();
  const num2 = pedirNumero();

  switch (operacao) {
    case "+":
      imprimirResultado(calcular.soma(num1, num2));
      break;
    case "-":
      imprimirResultado(calcular.subtracao(num1, num2));
      break;
    case "*":
      imprimirResultado(calcular.multiplicacao(num1, num2));
      break;
    case "/":
      imprimirResultado(calcular.divisao(num1, num2));
      break;
    default:
      imprimirResultado("Operação inválida");
      break;
  }
}

init();
