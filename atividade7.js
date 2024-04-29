const prompt = require ('prompt-sync')();

let maca = parseInt(prompt("Quantas maçãs você quer comprar?(R$ 0,30 menos de 12; R$ 0,25 mais de 12): "));
let valor = parseFloat();
let preco = parseFloat();
if(maca <  12) {
    valor = 0.3;
    preco = maca * valor;
    console.log(`VALOR TOTAL: R$ ${preco} `)
} else if (maca >= 12){
    valor = 0.25;
    preco = maca * valor;
    console.log(`VALOR TOTAL: R$ ${preco} `)
};