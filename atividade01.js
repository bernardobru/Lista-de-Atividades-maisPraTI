const prompt = require('prompt-sync')();//Declaração do prompt para o usuário poder informar os valores que deseja

let celsius;//Declaração da variável da temperatura em Graus Celsius

console.log('CONVERSÃO DE TEMPERATURA: C° PARA F°');

celsius = prompt("Digite a temperatura em C°: ");//Pergunta ao usuário qual o valor da temperatura que ele quer converter de Celsius para Fahrenheit 

conversao = celsius * 1.8 + 32;//Declaração da variável que recebe a fórmula de conversão de Celsius para Fahrenheit

console.log(conversao);//Exibe no console o valor em Graus Fahrenheit
