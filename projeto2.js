import entrada from "readline-sync";

// COLECAO SALARIO
let salarioMinimo = [
  { ano: 2010, salario: 510.0 },
  { ano: 2011, salario: 545.0 },
  { ano: 2012, salario: 622.0 },
  { ano: 2013, salario: 678.0 },
  { ano: 2014, salario: 724.0 },
  { ano: 2015, salario: 788.0 },
  { ano: 2016, salario: 880.0 },
  { ano: 2017, salario: 937.0 },
  { ano: 2018, salario: 954.0 },
  { ano: 2019, salario: 998.0 },
  { ano: 2020, salario: 1045.0 },
];

// COLECAO INFLACAO
let inflacao = [
  { ano: 2010, ipca: 5.91 },
  { ano: 2011, ipca: 6.5 },
  { ano: 2012, ipca: 5.84 },
  { ano: 2013, ipca: 5.91 },
  { ano: 2014, ipca: 6.41 },
  { ano: 2015, ipca: 10.67 },
  { ano: 2016, ipca: 6.29 },
  { ano: 2017, ipca: 2.95 },
  { ano: 2018, ipca: 3.75 },
  { ano: 2019, ipca: 4.31 },
  { ano: 2020, ipca: 4.52 },
];

// VARIAVEIS
let labelAno = "Ano";
let labelSalario = "Salário minimo";
let labelCrescimento = "Crescimento Salarial: ";
let labelIPCA = "Inflação IPCA";

labelAno = labelAno.padEnd(20, ".");
labelSalario = labelSalario.padEnd(20, ".");
labelCrescimento = labelCrescimento.padEnd(20, ".");
labelIPCA = labelIPCA.padEnd(20, ".");

// MENU
console.log(`\nEscolha uma opção:

1 - Listar os salários minímos de 2010 à 2020
2 - Listar o índice IPCA de 2010 à 2020
3 - Comparação entre o percentual de aumento salarial e o IPCA`);

let opcao = entrada.question(`\nDigite o número da sua escolha: `);
opcao = Number(opcao);

// VALIDACAO DE DADOS
switch (opcao) {
  case 1:
    for (let i = 0; i <= salarioMinimo.length - 1; i++) {
      let ano = salarioMinimo[i].ano;
      let salario = salarioMinimo[i].salario;

      let salarioFormatado = "R$ " + salario.toFixed(2).replace(".", ",");

      console.log("\n");
      console.log(labelAno + ano);
      console.log(labelSalario + salarioFormatado);
    }
    break;

  case 2:
    for (let i = 0; i <= inflacao.length - 1; i++) {
      let ano = inflacao[i].ano;
      let ipca = inflacao[i].ipca;

      let ipcaFormatado = ipca.toFixed(2).replace(".", ",") + "%";

      console.log("\n");
      console.log(labelAno + ano);
      console.log(labelIPCA + ipcaFormatado);
    }
    break;

  case 3:
    for (let i = 0; i <= salarioMinimo.length - 1; i++) {
      let ano = salarioMinimo[i].ano;
      let salario = salarioMinimo[i].salario;
      let ipca = inflacao[i].ipca;
      let percentualCrescimento;
      let crescimentoFormatado;

      let salarioFormatado = "R$ " + salario.toFixed(2).replace(".", ",");
      let ipcaFormatado = ipca.toFixed(2).replace(".", ",") + "%";

      // CALCULO DE CRESCIMENTO DO SALARIO
      if (i > 0) {
        let salarioAnterior = salarioMinimo[i - 1].salario;
        let diferenca = salario - salarioAnterior;

        percentualCrescimento = (diferenca / salarioAnterior) * 100;
        crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".", ",") + "%";

      } else {
        crescimentoFormatado = "-";
      }

      console.log("\n");
      console.log(labelAno + ano);
      console.log(labelSalario + salarioFormatado);
      console.log(labelCrescimento + crescimentoFormatado);
      console.log(labelIPCA + ipcaFormatado);
    }
    break;

  default:
    console.log("Opção invalida");
    break;
}
