const prompt = require('prompt-sync')();

console.log("INSIRA O VALOR DE DUAS PROVAS PARA CALCULAR A MÉDIA SEMESTRAL");

let nota1 = parseFloat(prompt("Digite a nota do 1ª prova: "));//Pede para que o usuário insira um valor para ser a 1° nota
let nota2 = parseFloat(prompt("Digite a nota da 2ª prova: "));//Pede para que o usuário insira um valor para ser a 2° nota
let media = parseFloat((nota1 + nota2)/2);//Faz o cálculo da média

if (media > 6.0) {//Verifica se a média é maior que 6.0, caso for, imprime a seguinte mensagem:
    console.log("Parabéns! Voce foi APROVADO!");
} else if (media < 6.0) {//Caso a média seja menor que 6.0, imprime a seguinte mensagem:
    console.log('Você foi REPROVADO! Estude mais');    
}
