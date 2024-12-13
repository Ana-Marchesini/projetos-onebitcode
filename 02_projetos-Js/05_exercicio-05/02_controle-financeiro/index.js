let money = parseFloat(prompt("Quantidade de dinheiro: "));
let options = "";

do {
  options = prompt(
    "A quantidade de dinheiro é: " +
      money +
      "\n" +
      "Escolha uma opção: " +
      "\n" +
      "1. Adicionar dinheiro" +
      "\n" +
      "2. Remover dinheiro" +
      "\n" +
      "3. Sair"
  );

  switch (options) {
    case "1":
      money += parseFloat(prompt("Informe o valor a ser adicionado: "));
      break;
    case "2":
      money -= parseFloat(prompt("Informe o valor a ser retirado: "));
      break;
    case "3":
      alert("Encerrando o programa...");
    default:
      alert("Digite uma opção válida!");
  }
} while (options !== "3");
