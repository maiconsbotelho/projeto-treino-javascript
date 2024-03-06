import entrada from "readline-sync";

let base = entrada.question("Digite a base do triangulo: ");
let altura = entrada.question("Digite a altura do triangulo: ");

console.log("Base: " + base);
console.log("Altura: " + altura);

let area = (base * altura) / 2;

console.log("Area do triangulo: " + area);