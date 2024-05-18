const prompt = require('prompt-sync')();

console.log("CONTAGEM DE VOTOS");

const eleitores = parseInt(prompt('Digite o número de eleitores do município: '))//Pergunta ao usuário a quantidade de eleitores
let brancos = parseInt(prompt('Quantidade de votos brancos: '));//Pergunta ao usuário a quantidade de votos brancos
let nulos = parseInt(prompt('Quantidade de votos nulos: '));//Pergunta ao usuário a quantidade de votos nulos
let validos = parseInt(prompt('Quantidade de validos: '));//Pergunta ao usuário a quantidade de votos válidos
let totalVotos = brancos + nulos + validos;//Calcula o total de votos 

porcentoBrancos = (brancos / eleitores) * 100;//Calcula a porcentagem de votos brancos
porcentoNulos = (nulos / eleitores * 100);//Calcula a porcentagem de votos nulos
porcentoValidos = (validos / eleitores) * 100;//Calcula a porcentagem de votos validos
abstencao = eleitores - totalVotos;//Calcula o número de abstenções

if (totalVotos > eleitores) {//Verifica se o número de votos totais é maior que o número de eleitores, caso seja, exibirá mensagem de erro
    console.log("Erro: Número de votos inválidos!")
} else{//Caso contrário, exibirá as porcentagens dos votos
    console.log(`O total de votos brancos é de: ${porcentoBrancos}%`);
    console.log(`O total de votos nulos é de: ${porcentoNulos}%`);
    console.log(`O total de votos válidos é de: ${porcentoValidos}%`);
    console.log(`O total de abstenções é de: ${abstencao}`);
};

