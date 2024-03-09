/*
01 – Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
(Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
instância de Carro


class Carro {
   private marca: string;
   private modelo: string;
   private ano: number;
   private cor: string;
  
    constructor(marca: string, modelo: string, ano: number, cor: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
    }
        exibirInfo(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    }
        get getMarca():string{
        return this.marca;
    }
    set setMarca(marca:string){
        this.marca = marca;
    }
    get getModelo():string{
      return this.modelo;
  }
  set setModelo(modelo:string){
    this.modelo = modelo;
  }
  get getAno():number{
    return this.ano;
}
set setAno(ano:number){
  this.ano = ano;
}
get getCor():string{
  return this.cor;
}
set setCor(cor:string){
this.cor= cor;
}
  CalcularIdade(): number {
  let anoAtual = 2024
  return anoAtual - this.ano;
  }
    
  }
  
  const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
  let IdadedoCarro: number = meuCarro.CalcularIdade();

  console.log('Seu carro é', meuCarro.getModelo);
  console.log('A idade do seu carro é',IdadedoCarro);
*/
/*
02 – Desenvolva uma classe Calculadora em TypeScript
Crie uma classe Calculadora que encapsula funcionalidades matemáticas básicas. Esta classe deve
possuir os seguintes requisitos:
• Dois atributos numéricos (valor1 e valor2) para armazenar os operandos das operações.
• Um construtor que aceite dois números como parâmetros e os atribua aos respectivos
atributos.
• Métodos para realizar as seguintes operações matemáticas:
◦ Soma: retorna a adição dos dois valores.
◦ Subtração: retorna a diferença entre os dois valores.
◦ Multiplicação: retorna o resultado da multiplicação dos dois valores.
◦ Divisão: retorna o resultado da divisão do primeiro valor pelo segundo valor. Atenção:
evite divisões por zero.
◦ Porcentagem: retorna a porcentagem do primeiro valor em relação ao segundo valor.
◦ Getters e Setters
Certifique-se de que a classe lida corretamente com situações de erro, como a divisão por zero.
Teste todos os métodos.
*/
var Calculadora = /** @class */ (function () {
    function Calculadora(valor01, valor02) {
        this.valor01 = valor01;
        this.valor02 = valor02;
    }
    Calculadora.prototype.Soma = function () {
        var resultado = this.valor01 + this.valor02;
        return resultado;
    };
    Calculadora.prototype.Subtração = function () {
        var resultado = this.valor01 - this.valor02;
        return resultado;
    };
    Calculadora.prototype.Multiplicação = function () {
        var resultado = this.valor01 * this.valor02;
        return resultado;
    };
    Calculadora.prototype.Divisão = function () {
        var resultado = this.valor01 / this.valor02;
        return resultado;
    };
    Calculadora.prototype.Porcetagem = function () {
        var resultado = this.valor01 / this.valor02;
        return resultado;
    };
    return Calculadora;
}());
var Calculo01 = new Calculadora(10, 5);
var soma01 = Calculo01.Soma();
var soma02 = Calculo01.Subtração();
console.log(soma01);
console.log(soma02);
