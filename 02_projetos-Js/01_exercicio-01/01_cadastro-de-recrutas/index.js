// variáveis para perguntar e armazenar as respostas
let firstName = prompt('Digite seu primeiro nome: ');
let lastName = prompt('Digite seu sobrenome: ');
let fieldOfStudies = prompt('Qual seu campo de estudos? ');
let birthYear = prompt('Qual seu ano de nascimento?');

// variável para calcular a idade
let age = 2024 - birthYear;

// mostrar na tela o resultado
alert(
  'O nome completo do recruta é: ' +
    firstName +
    ' ' +
    lastName +
    '\n' +
    'Seu campo de estudos é: ' +
    fieldOfStudies +
    '\n' +
    'Sua idade é: ' +
    age
);
