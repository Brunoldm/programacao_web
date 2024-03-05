/*Exercício 1

Crie uma função que receba uma lista de números como parâmetro e retorne o
maior número da lista.
*/
/*function encontrarMaiorNumero(Numeros: number[]): number {

    let maior = Numeros[0];
    for (let i = 1; i < Numeros.length; i++) {
        if (Numeros[i] > maior) {
            maior = Numeros[i];
        }
    }

    return maior;
}

let numeros01: number[] = [5 , 22 , 7 , 13 , 8 , 3];
let maiorNumero = encontrarMaiorNumero(numeros01);
console.log('O maior número é:', maiorNumero);
*/
/*Exercício 2

Desenvolva uma função que receba um número como parâmetro e verifique se
ele é par ou ímpar. Retorne true se for par e false se for ímpar.
*/
/*function teste(valor: number): string {

    if(valor % 2 === 0){

        return "Par";
    }
    else{
        return "Impar";
    }
}
console.log('o numero é',teste(9));
*/
/*
Exercício 3

Implemente uma função que calcule a média aritmética de um array de números
e retorne o resultado. Utilize essa função para calcular a média de diferentes
conjuntos de números.
*/
function media(valores) {
    var soma = 0;
    for (var i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    var resultadodamedia = soma / valores.length;
    return resultadodamedia;
}
var notas = [5, 7, 9, 10, 8, 3];
var resultado = media(notas);
console.log('O resultado da média é:', resultado);
