/*
15. Refatore o código abaixo para que seja mais legível, 
usando boas práticas de nomenclatura e separando o código em funções:

x = 10

y = 20

z = x+y

console.log(z)
*/

function soma(x, y){
    let z;
    z = x + y;
    return z;
}

function exibir(resultado, x, y){
    alert(`O resultado da soma entre ${x} e ${y} é: ${resultado}`);
    console.log(`O resultado da soma entre ${x} e ${y} é: ${resultado}`);
}

(function main(){
    let parcela1 = 1.5; // Declaração e atribuição do primeiro número
    let parcela2 = 2.5; // Declaração e atribuição do segundo número
    let resultado;  // Declaração da variável que armazenará a soma entre os números

    resultado = soma(parcela1, parcela2); // Chama e passa os parâmetros para a função "soma" para realizar a operação entre os números

    exibir(resultado, parcela1, parcela2); // Chama e passa os parâmetros para a função "exibir" para imprimir o resultado na tela e no console
})();