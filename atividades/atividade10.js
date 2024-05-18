const prompt = require('prompt-sync')();

console.log("INSIRA UM NÚMERO E VEJA ELE SENDO IMPRESSO 10 VEZES NA TELA");

let inteiro = parseInt(prompt("Digite um número: "));//Pede para que o usuário insira um número

for (let i = 0; i < 10; i++) {//Faz o loop para que o número seja impresso 10 vezes na tela
    console.log(inteiro);
};
