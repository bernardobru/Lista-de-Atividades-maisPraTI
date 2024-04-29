const prompt = require('prompt-sync')();

console.log("INSIRA TRÊS VALORES E VEJA:", '\n', "O 1° SENDO SOMADO 25", '\n', "O 2° SENDO MULTIPLICADO POR 3", '\n', "O 3° SENDO MOSTRADO 12% DO SEU VALOR ORIGINAL E", '\n', "O 4° SENDO A SOMA DOS TRÊS VALORES ORIGINAIS");

let num1 = parseInt(prompt("Digite o 1º número: "));//Pede ao usuário para digitar um número
let num2 = parseInt(prompt("Digite o 2º número: "));//Pede ao usuário para digitar um número
let num3 = parseInt(prompt("Digite o 3º número: "));//Pede ao usuário para digitar um número
let num4 = parseInt();

let int1 = num1 + 25;//Soma 25 ao 1° valor
let int2 = num2 * 3;//Multiplica o 2° valor por 3
let int3 = num3 * 12 / 100;//Mostra 12% do 3° valor
num4 = num1 + num2 + num3;//Atribui ao 4° valor a soma dos 3 valores originais

console.log(`${num1} + 25 = ${int1}`);//Imprime a 1° operação
console.log(`${num2} * 3 = ${int2}`);//Imprime a 2° operação
console.log(`12% de ${num3} é ${int3}`);//Imprime a 3° operação
console.log(`${num1} + ${num2} + ${num3} = ${num4}`);//Imprime a 4° operação

