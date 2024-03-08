let colecaoSignos = [
  { Nome: "Aquário", DataInicio: "01-20", DataFinal: "02-18" },
  { Nome: "Peixes", DataInicio: "02-19", DataFinal: "03-20" },
  { Nome: "Áries", DataInicio: "03-21", DataFinal: "04-19" },
  { Nome: "Touro", DataInicio: "04-20", DataFinal: "05-20" },
  { Nome: "Gêmeos", DataInicio: "05-21", DataFinal: "06-21" },
  { Nome: "Câncer", DataInicio: "06-22", DataFinal: "07-23" },
  { Nome: "Leão", DataInicio: "07-24", DataFinal: "08-22" },
  { Nome: "Virgem", DataInicio: "08-23", DataFinal: "09-22" },
  { Nome: "Libra", DataInicio: "09-23", DataFinal: "10-22" },
  { Nome: "Escorpião", DataInicio: "10-23", DataFinal: "11-21" },
  { Nome: "Sagitário", DataInicio: "11-22", DataFinal: "12-21" },
  { Nome: "Capricórnio", DataInicio: "12-22", DataFinal: "01-19" },
];

// FUNÇÃO COMPLEMENTAR PARA VERIFICAR SE É CAPRICÓRNIO
const verificaDataRange = (data, dataInicio, dataFinal, tipoComparacao) => {
  if (tipoComparacao == "and") {
    return data >= dataInicio && data <= dataFinal;
  } else if (tipoComparacao == "or") {
    return data >= dataInicio || data <= dataFinal;
  }
};

// FUNCAO PRINCIPAL
const retornaSigno = (signos, data) => {
  let ano = data.getFullYear();

  for (const signo of signos) {
    let dataInicioSigno = new Date(ano + "-" + signo.DataInicio + " 00:00:00");
    let dataFinalSigno = new Date(ano + "-" + signo.DataFinal + " 23:59:59");

    // VERIFICA SE O SIGNO É CAPRICÓRNIO (SE SIM CAI EM 'OR' SE NÃO CAI EM 'AND')
    let tipoComparacao = signo.DataInicio == "12-22" ? "or" : "and";

    if (
      verificaDataRange(data, dataInicioSigno, dataFinalSigno, tipoComparacao)
    ) {
      return signo.Nome;
    }
  }
};

let dataApp = new Date();
const nomeSigno = retornaSigno(colecaoSignos, dataApp);

// IMPRIME O RESULTADO DA APLICAÇÃO
console.log("O signo de hoje é: " + nomeSigno);
