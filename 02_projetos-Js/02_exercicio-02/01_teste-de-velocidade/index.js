// variáveis para pegar dados e armazenar
const firstName = prompt('Nome do 1º carro:');
let firstVelocity = parseFloat(prompt('Velocidade: '));
const secondName = prompt('Nome do 2º carro:');
let secondVelocity = parseFloat(prompt('Velocidade: '));

// verificação
if (firstVelocity > secondVelocity) {
  alert(
    'O carro ' +
      firstName +
      ' possui velocidade de: ' +
      firstVelocity +
      'km/h' +
      ' por isso é mais rápido!'
  );
} else if (firstVelocity < secondVelocity) {
  alert(
    'O carro ' +
      secondName +
      ' possui velocidade de: ' +
      secondVelocity +
      'km/h' +
      ' por isso é mais rápido'
  );
} else {
  alert('Os dois carros possuem a mesma velocidade!');
}
