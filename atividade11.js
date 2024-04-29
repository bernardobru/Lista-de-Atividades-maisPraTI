const prompt = require('prompt-sync')();

console.log("PAR OU ÍMPAR?");
console.log("PARA PARAR A VERIFICAÇÃO, DIGITE UM VALOR NEGATIVO OU UM VALOR NULO");
let start = parseInt(prompt("Digite um valor para verificar se é Par ou Ímpar: "));
do {
    if (start > 0 && start % 2 === 0) {
        console.log(`${start} é par`);
        start = parseInt(prompt("Digite um valor para verificar se é Par ou Ímpar: "));
    } else if (start > 0 && start % 2 !== 0) {
        console.log(`${start} é ímpar`);
        start = parseInt(prompt("Digite um valor para verificar se é Par ou Ímpar: "));
    }else {
        start = null;
    };
} while (start !== null);

console.log('Encerrada a verificação');