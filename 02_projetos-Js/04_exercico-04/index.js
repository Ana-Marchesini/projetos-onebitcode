let touristName = prompt('Qual seu nome?');
let cityQuestion = prompt('Você já visitou alguma cidade? (sim/não)');

let cities = '';
let count = 0;

while (cityQuestion === 'sim') {
  cities = prompt('Nome da cidade: ');
  cities += ' - ' + cities + '\n';
  count++;

  cityQuestion = prompt('Você já visitou alguma cidade? (sim/não)');
}

alert(
  'O(a) turista: ' +
    touristName +
    '\nQuantidade de cidades visitadas: ' +
    count +
    '\nCidades visitadas:\n' +
    cities
);
