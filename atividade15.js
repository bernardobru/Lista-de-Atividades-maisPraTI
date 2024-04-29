const prompt = require("prompt-sync")();
let media = 0;
let somaPeso = 0;
let numero;
let peso;

while (numero !== 0) {
    numero = parseFloat(prompt("Digite um número: "));
    while (numero !== 0) {
        peso = parseFloat(prompt("Digite um peso: "));
        somaPeso += peso;
        media += numero * peso;
        break;
    }
};
media /= somaPeso;
console.log(`A média ponderada é ${media}`);
