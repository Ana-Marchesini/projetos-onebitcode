const line = [];
let options = "";

do {
  let patient = "";
  for (let i = 0; i < line.length; i++) {
    patient += i + 1 + "º - " + line[1] + "\n";
  }

  options = prompt(
    "Pacientes: " +
      patient +
      "\n\n" +
      "Escolha uma opção:" +
      "\n" +
      "1. Novo paciente" +
      "\n" +
      "2. Consultar paciente" +
      "\n" +
      "3. Sair"
  );

  switch (options) {
    case "1":
      const newPatient = prompt("Qual é o nome do paciente?");
      line.push(newPatient);
      break;
    case "2":
      const consultedPatient = line.shift();
      if (!consultedPatient) {
        alert("Não há pacientes na fila!");
      } else {
        alert(consultedPatient + " foi removido da fila.");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (options !== "3");
