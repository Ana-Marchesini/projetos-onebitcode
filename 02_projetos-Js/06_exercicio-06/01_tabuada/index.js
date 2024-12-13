let number = parseFloat(prompt("Qual o número?"));
let results = "";

for (let i = 0; i <= 20; i++) {
  results += number + " x " + i + " = " + number * i + "\n";
}

alert("Resultado da tabuada de: " + number + ":\n\n" + results);
