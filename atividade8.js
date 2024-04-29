const prompt = require('prompt-sync')();

let valor1 = Number(prompt("Digite um valor: "));
let valor2 = Number(prompt("Digite outro valor: "));

if (valor1 > valor2) {
    console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
} else if (valor2 > valor1) {
    console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);
} else {
    console.log("Não é permitido valores repetidos");
}