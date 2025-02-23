/*
12. Crie um loop que exiba todos os números pares de 0 a 20.
*/

let iteracao = 0;

/* Aqui foi utilizado o operador módulo/resto, porque um 
número par é sempre divisível por 2, logo o resto é sempre 0, 
sabendo disso, negou-se essa operação, o que resultará no valor 1. 
Poderia ser feita também a condição a seguir: if(iteracao % 2 == 0)
*/

while(iteracao <= 20){
    if(!(iteracao % 2)){
        alert(iteracao);
    }
    iteracao++;
}