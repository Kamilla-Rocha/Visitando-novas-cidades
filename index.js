const turista = prompt("Qual o seu nome ?:");
let cidades = " ";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade ? (Sim/Não)");

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada ?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou alguma outra cidade ? (Sim/Não)");
}

alert(
  "Turista:" +
    turista +
    "\n Quantidade de cidades visitadas: " +
    contagem +
    "\nCidade visitadas:\n" +
    cidades
);
