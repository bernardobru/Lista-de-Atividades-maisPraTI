let numero = 100;
let divisor = 0; 
let contaResto = 0; 
let contaPrimo = 0;
while (contaPrimo !== 50){
    divisor = numero;
    while (divisor !== 0){
        if (numero%divisor==0) {
            contaResto++;
            if (contaResto >= 3){
                break;
            }
        }
        divisor--;
    }
    if (contaResto===2){
        console.log(numero);
        contaPrimo++
    }
    numero++;
    contaResto = 0;
}
