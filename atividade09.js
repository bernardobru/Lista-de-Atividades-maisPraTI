const prompt = require('prompt-sync')();

let codigo = parseInt(prompt("Digite o código do produto(1 até 50): "));

switch (codigo) {
    case 1:
        console.log("Esse produto é da região Sul");
        break;
    case 2:
        console.log("Esse produto é da região Norte");
        break;
    case 3:
        console.log("Esse produto é da região Leste");
        break;
    case 4:
         console.log("Esse produto é da região Oeste");
         break;
    case 5: case 6:
        console.log("Esse produto é da região Nordeste");
        break;
    case 7: case 8: case 9:
        console.log("Esse produto é da região Sudeste");
        break;
    default: 
        if (codigo >= 10 && codigo <=20) {
            console.log("Esse produto é da região Centro-Oeste");        
        } else if (codigo >= 25 && codigo <=50) {
            console.log("Esse produto é da região Noroeste");
        } else{
            console.log("Produto importado");
        };
        break;                                                  
    };
