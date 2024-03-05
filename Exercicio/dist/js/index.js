function Maiornumero(lista: number[]){

    if (lista.length === 0) {
        throw new Error("A lista está vazia.");
    }

    let maiorNumero = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maiorNumero) {
            maiorNumero = lista[i];
        }
    }

    return maiorNumero;
}

const numeros: number[] = [10, 5, 8, 15, 3];
const maior = Maiornumero(numeros);
console.log("O maior número é:", maior);