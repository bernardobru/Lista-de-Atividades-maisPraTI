const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite a nota do 1ª prova: "));
let nota2 = parseFloat(prompt("Digite a nota da 2ª prova: "));
let media = parseFloat((nota1 + nota2)/2);

if (media > 6.0) {
    console.log('PARABÉNS! Você foi aprovado');
} else if (media < 6.0) {
    console.log('Você foi REPROVADO! Estude mais');    
}