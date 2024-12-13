const house = [];
let options = "";

do {
  options = prompt(
    "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " +
      house.length +
      "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  );

  switch (options) {
    case "1":
      const house = {};

      house.owner = prompt("Informe o nome do proprietário do imóvel:");
      house.bedroom = parseFloat(prompt("Quantos quartos possui o imóvel?"));
      house.bathroom = parseFloat(prompt("Quantos banheiros possui o imóvel?"));
      house.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirm = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          house.owner +
          "\nQuartos: " +
          house.bedroom +
          "\nBanheiros: " +
          house.bathroom +
          "\nPossui Garagem? " +
          house.garage
      );

      if (confirm) {
        house.push(house);
      }
      break;
    case "2":
      for (let i = 0; i < house.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            house[i].owner +
            "\nQuartos: " +
            house[i].bedroom +
            "\nBanheiros: " +
            house[i].bathroom +
            "\nPossui Garagem? " +
            house[i].garage
        );
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (options !== "3");
