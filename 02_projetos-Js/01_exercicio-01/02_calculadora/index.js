// variáveis para pedir e armazenar dois valores
const firstNumber = parseFloat(prompt('Digite o primeiro número: '));
const secondNumber = parseFloat(prompt('Digite o segundo número: '));

// variáveis para o cálculo
const sum = firstNumber + secondNumber;
let sub;
if (firstNumber > secondNumber) {
  sub = firstNumber - secondNumber;
} else if (secondNumber > firstNumber) {
  sub = secondNumber - firstNumber;
} else {
  sub = firstNumber - secondNumber;
}
const multi = firstNumber * secondNumber;
const division = firstNumber / secondNumber;

alert(
  'A soma é: ' +
    sum +
    '\n' +
    'A subtração é: ' +
    sub +
    '\n' +
    'A multiplicação é: ' +
    multi +
    '\n' +
    'A divisão é: ' +
    division.toFixed(2)
);
