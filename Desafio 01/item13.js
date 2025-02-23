/*
13. Escreva um código que calcule a área de um círculo. Utilize uma 
função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.
*/

function areaCirculo(raio){
    let area = Math.PI * Math.pow(raio, 2);
    return area;
}

let raio = Number(prompt('Insira o raio:'));
let precisao = 5; // Quantidade de casas decimais para o resultado

alert(`A área do círculo de raio ${raio} com ${precisao} casas decimais é: ${areaCirculo(raio).toFixed(precisao)}`);