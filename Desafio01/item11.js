/*
11. Crie um loop que imprima a tabuada do número 7, de 1 a 10.
*/

let numero = 7;
let iteracao = 1;
let resultado;

// Tabuada de multiplicação do 7

while(iteracao <= 10){
    resultado = numero * iteracao;
    alert(`${numero} * ${iteracao} = ${resultado}`);
    iteracao++;
}