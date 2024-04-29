const prompt = require('prompt-sync')();
const eleitores = parseInt(prompt('Digite o número de eleitores do município: '))
let brancos = parseInt(prompt('Quantidade de votos brancos: '));
let nulos = parseInt(prompt('Quantidade de votos nulos: '));
let validos = parseInt(prompt('Quantidade de validos: '));
let totalVotos = brancos + nulos + validos;

porcentoBrancos = (brancos / eleitores) * 100;
porcentoNulos = (nulos / eleitores * 100);
porcentoValidos = (validos / eleitores) * 100;
abstencao = eleitores - totalVotos;

if (totalVotos > eleitores) {
    console.log("Erro: Número de votos inválidos!")
} else{
    console.log(`O total de votos brancos é de: ${porcentoBrancos}%`);
    console.log(`O total de votos nulos é de: ${porcentoNulos}%`);
    console.log(`O total de votos válidos é de: ${porcentoValidos}%`);
    console.log(`O total de abstenções é de: ${abstencao}`);
};
//Para executar o código, basta digitar 'node atividade2.js' no terminal
