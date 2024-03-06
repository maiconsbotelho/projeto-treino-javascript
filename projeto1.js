import entrada from "readline-sync";

let divida = entrada.question("Informe o valor devido: ");

if (divida > 0) {
  let dias = entrada.question(
    "Informe quantos dias se passaram desde o vencimento do boleto: "
  );

  if (dias > 0) {
    let taxa = dias <= 15 ? 5 : 10;
    let total = Number(divida) + (divida * 10) / 100;

    console.log("\nValor original da dívida: R$ " + divida);
    console.log("Dias atrasados: " + dias + " dias");
    console.log("Taxa de juros: " + taxa + " %");
    console.log("Valor total com juros: R$ " + total);
    console.log(typeof divida);
  
  } else {
    console.log("Você está em dia!");

  }

} else {
  console.log("O valor da dívida deve ser maior que zero!");
}

//==== IF COMPLETO QUE FOI SUBSTITUIDO POR IF TERNÁRIO ====
// if (dias <= 15) {
//   let taxa = 5
// } else {
//   let taxa = 10
// };
