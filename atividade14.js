const prompt = require('prompt-sync')();

console.log("VEJA A MÉDIA ARITMÉTICA, PARA PARAR DIGITE 0");

let num;
let soma = parseFloat(0);
let media = parseFloat(0);
let contador = parseFloat(0);
while (num !== 0) {
    num = parseFloat(prompt("Digite um número: "));
    soma += num;
    media = soma/contador;
    contador++;
}
console.log(`A média aritmética é de ${media}`);
