const prompt = require("prompt-sync")();

for (let indice = 0; indice < 5; indice++) {
    let numero = parseInt(prompt("Digite um número: "));
    for (let multiplicador = 1; multiplicador <= numero; multiplicador++) {
       console.log(`${multiplicador} * ${numero} =`, multiplicador * numero);
    };
};