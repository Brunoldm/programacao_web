/*Exercício 1

Crie uma função que receba uma lista de números como parâmetro e retorne o
maior número da lista. 
*/

function encontrarMaiorNumero(Numeros: number[]): number {

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


/*Exercício 2

Desenvolva uma função que receba um número como parâmetro e verifique se
ele é par ou ímpar. Retorne true se for par e false se for ímpar.
*/

function teste(valor: number): string {

    if(valor % 2 === 0){

        return "Par";
    }
    else{
        return "Impar";
    }   
}
console.log('o numero é',teste(9));


/*
Exercício 3

Implemente uma função que calcule a média aritmética de um array de números
e retorne o resultado. Utilize essa função para calcular a média de diferentes
conjuntos de números.
*/

function media(valores: number[]): number{
    
    let soma = 0;

        for (let i = 0; i < valores.length; i++) {
            
            soma += valores[i];
        }
        
     let resultadodamedia = soma/valores.length;

    return resultadodamedia;
    }

let notas: number[] = [5 , 7 , 9 , 10 , 8 , 3];
let resultado = media(notas);
console.log('O resultado da média é:', resultado); 


/*
Exercício 4

Crie uma função que receba uma string como parâmetro e retorne a mesma
string com todas as letras em caixa alta. Utilize essa função para converter
diferentes strings.
*/

function converterparamaiuscula(texto: string): string {

    return texto.toUpperCase();

}

console.log(converterparamaiuscula("Valeu professor"));

/*
Exercício 5

Desenvolva uma função que determine se um número é primo ou não. Retorne
true se for primo e false se não for.
*/

function primo(numero: number): boolean{

    if (numero <= 1){
        return false;
    }
        for(let i = 2; i <= Math.sqrt(numero); i++){
        
        if (numero % i === 0){

            return false;
        }
    }
        return true;
}

console.log(primo(7));

/*
Exercício 6

Implemente uma função que inverta a ordem dos elementos em um array.
Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.
*/

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

let array1 = ['B' ,'E', 'X', 'I', 'G', 'A'];
console.log(inverterArray(array1));

/*
Exercício 7

Crie uma função que receba um valor e uma porcentagem como parâmetros. A
função deve retornar o valor acrescido da porcentagem indicada.
*/

function acrescentarPorcentagem(valor: number, porcentagem: number): number {
    let valorAcrescido = valor * (1 + porcentagem / 100);
    return valorAcrescido;
}

let valorInicial = 20;
let porcentagemAcrescimo = 10;

let novoValor = acrescentarPorcentagem(valorInicial, porcentagemAcrescimo);
console.log(novoValor);

/*
Exercício 8

Crie uma função que receba uma string e retorne a mesma string, mas com as
palavras em ordem reversa.
*/

function ordemreversa(frase: string): string{

    let separar = frase.split(" ");
    let inverter = separar.reverse();
    let juntar = inverter.join(" ");

    return juntar;
}

console.log(ordemreversa("Preciso de um feriado"));

/*
Exercício 9

Implemente uma função que retorne a soma de todos os números pares em um
array.
*/

function somarnumerospares(numeros: number[]): number {
    let soma = 0;
    for (let sequencia of numeros) {
        if (sequencia % 2 === 0) { 

            soma += sequencia;
        }
    }
    return soma;
}

const numeros03 = [1, 5, 2, 7, 8, 20, 32, 33];
const somadospares = somarnumerospares(numeros03);
console.log("A soma dos números pares é:", somadospares);

/*
Exercício 10

Crie uma função que calcule o fatorial de um número. Utilize essa função para
calcular o fatorial de diferentes números.
*/
