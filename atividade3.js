const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite o 1º número: "));
let num2 = parseInt(prompt("Digite o 2º número: "));
let num3 = parseInt(prompt("Digite o 3º número: "));
let num4 = parseInt();

let int1 = num1 + 25;
let int2 = num2 * 3;
let int3 = num3 * 12 / 100;
num4 = num1 + num2 + num3;

console.log(`${num1} + 25 = ${int1}`);
console.log(`${num2} * 3 = ${int2}`);
console.log(`12% de ${num3} é ${int3}`);
console.log(`${num1} + ${num2} + ${num3} = ${num4}`);

