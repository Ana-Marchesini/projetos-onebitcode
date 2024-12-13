// Personagem 1
const firstName = prompt('Nome do personagem: ');
const attackPower = parseFloat(prompt('Pontos de ataque: '));

//Personagem 2
const secondName = prompt('Nome do personagem: ');
let lifePoints = parseFloat(prompt('Pontos de vida: '));
const defensePower = parseFloat(prompt('Pontos de defesa: '));
const hasShield = prompt('Possui escudo? (Sim/Não)');

let demage = '';

/* Se o poder de ataque for maior do que a defesa
 e o defensor não possuir um escudo, 
 o dano causado será igual a diferença entre o ataque e a defesa. */

/* Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa. */

/* Se o poder de ataque for menor ou igual a defesa, o dano causado será 0. */

if (attackPower > defensePower && hasShield === 'Não') {
  demage = attackPower - defensePower;
} else if (attackPower > defensePower && hasShield === 'Sim') {
  demage = (attackPower - defensePower) / 2;
}

lifePoints -= demage;

alert(firstName + ' causou ' + demage + ' pontos de dano em ' + secondName);
alert(
  firstName +
    '\nPoder de ataque: ' +
    attackPower +
    '\n\n' +
    secondName +
    '\nPontos de vida: ' +
    lifePoints +
    '\nPoder de defesa: ' +
    defensePower +
    '\nPossui escudo: ' +
    hasShield
);
