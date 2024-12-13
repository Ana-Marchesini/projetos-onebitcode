let options = "";

do {
  options = prompt(
    "Escolha uma opção abaixo: " +
      "\n" +
      "1. Opção 1" +
      "\n" +
      "2. Opção 2" +
      "\n" +
      "3. Opção 3" +
      "\n" +
      "4. Opção 4" +
      "\n" +
      "5. Encerrar!"
  );

  switch (options) {
    case "1":
      alert("A opção escolhida foi: 1");
      break;
    case "2":
      alert("A opção escolhida foi: 2");
      break;
    case "3":
      alert("A opção escolhida foi: 3");
      break;
    case "4":
      alert("A opção escolhida foi: 4");
      break;
    case "5":
      alert("Encerrando...");
      break;
    default:
      alert("Opção Inválida, escolha uma das opções!");
  }
} while (options !== "5");
