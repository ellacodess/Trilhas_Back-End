/*
3. Crie uma variável chamada preco com o valor 50 e uma variável desconto 
com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.
*/

let preco = 100;
let desconto = 0.2;
let precoFinal;

precoFinal = preco - (preco * desconto);

alert(`O valor ${preco} com desconto de ${desconto * 100}% é: ${precoFinal}`);