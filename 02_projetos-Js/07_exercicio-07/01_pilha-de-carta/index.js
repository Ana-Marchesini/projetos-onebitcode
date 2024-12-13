const deckOfCards = [];
let options = "";

do {
  options = prompt(
    "Cartas no baralho: " +
      deckOfCards.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (options) {
    case "1":
      const newCard = prompt("Qual é a carta?");
      deckOfCards.push(newCard);
      break;
    case "2":
      const removedCard = deckOfCards.pop();
      if (!removedCard) {
        alert("Não há nenhuma carta no baralho!");
      } else {
        alert("Você puxou um(a) " + removedCard);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (options !== "3");
