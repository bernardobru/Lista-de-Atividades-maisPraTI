const prompt = require('prompt-sync')();

let triangulo;
let a = parseInt(prompt("Digite o lado A: "));
let b = parseInt(prompt("Digite o lado B: "));
let c = parseInt(prompt("Digite o lado C: "));

if (a < b + c && b < a + c && c < a + b) {
    triangulo = true; 
}

if (triangulo == true && a === b && b === c) {
    console.log("Triângulo Equilátero");
} else if (triangulo === true && a === b || a === c || b === c) {
    console.log("Triângulo Isóceles");
} else if (triangulo == true && a !== b && b !== c) {
    console.log("Triângulo Escaleno")
} else {
    console.log("Não é possível formar um triângulo");
}
