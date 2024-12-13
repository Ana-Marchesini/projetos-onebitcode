// área do triângulo: base * altura / 2
function triangleArea() {
  let base = parseFloat(prompt("Base:"));
  let height = parseFloat(prompt("Altura"));
  return (base * height) / 2;
}

// área do retângulo: base * altura
function rectangleArea() {
  base = parseFloat(prompt("Base:"));
  height = parseFloat(prompt("Altura"));
  return base * height;
}

// área do quadrado: lado²
function squareArea() {
  let side = parseFloat(prompt("Área do quadrado:"));
  return Math.pow(side, 2);
}

// área do trapézio: (base maior + base menor) * altura / 2
function trapezoidArea() {
  let biggerBase = parseFloat(prompt("Base maior:"));
  let smallBase = parseFloat(prompt("Base menor: "));
  return ((smallBase + biggerBase) * height) / 2;
}

// área do círculo: pi * raio² (considere pi = 3.14)
function circleArea() {
  let radius = parseFloat(prompt("Raio: "));
  return Math.PI * Math.pow(radius, 2);
}

function showMenu() {
  return prompt(
    "Calculadora Geométrica" +
      "\n\n" +
      "Escolha uma opção:" +
      "\n" +
      "1. Área do triângulo" +
      "\n" +
      "2. Área do retângulo" +
      "\n" +
      "3. Área do quadrado" +
      "\n" +
      "4. Área do trapézio" +
      "\n" +
      "5. Área do círculo" +
      "\n" +
      "6. Sair"
  );
}

function execute() {
  let options = "";

  do {
    options = showMenu();
    let results;

    switch (options) {
      case "1":
        results = triangleArea();
        alert("O resutado é: " + results);
        break;
      case "2":
        results = rectangleArea();
        alert("O resutado é: " + results);
        break;
      case "3":
        results = squareArea();
        alert("O resutado é: " + results);
        break;
      case "4":
        results = trapezoidArea();
        alert("O resutado é: " + results);
        break;
      case "5":
        results = circleArea();
        alert("O resutado é: " + results);
        break;
      case "6":
        alert("Saindo...");
      default:
        alert("Digite um opção válida!");
        break;
    }
  } while (options !== "6");
}

execute();
