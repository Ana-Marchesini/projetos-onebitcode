let value = parseFloat(prompt('Valor em Metros: '));
const options = prompt(
  'Escolha uma opção de conversão:\n' +
    '1. Milímetro (mm)' +
    '\n' +
    '2. Centímetros (cm)' +
    '\n' +
    '3. Decímetro (dm)' +
    '\n' +
    '4. Decâmetro (dam)' +
    '\n' +
    '5. Hectômetro (hm)' +
    '\n' +
    '6. Quilômetro (km)'
);

let results = '';

switch (options) {
  case '1':
    results = value * 1000;
    alert('O resultado da conversão é: ' + results + 'mm');
    break;
  case '2':
    results = value * 100;
    alert('O resultado da conversão é: ' + results + 'cm');
    break;
  case '3':
    results = value * 10;
    alert('O resultado da conversão é: ' + results + 'dm');
    break;
  case '4':
    results = value / 10;
    alert('O resultado da conversão é: ' + results + 'dam');
    break;
  case '5':
    results = value / 100;
    alert('O resultado da conversão é: ' + results + 'hm');
    break;
  case '6':
    results = value / 1000;
    alert('O resultado da conversão é: ' + results + 'km');
    break;
  default:
    alert('Opção Inválida!');
}
