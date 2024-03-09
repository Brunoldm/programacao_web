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


class Calculadora{

  private valor01: number;
  private valor02: number;

  constructor(valor01: number, valor02: number) {
    this.valor01 = valor01;
    this.valor02 = valor02;
  }
  Soma(): number {
    let resultado = this.valor01+this.valor02;
    return resultado;
  }
  Subtração(): number {
    let resultado = this.valor01-this.valor02;
    return resultado;
  }
  Multiplicacao(): number {
    let resultado = this.valor01*this.valor02;
    return resultado;
  }
  Divisao(): number {
    if (this.valor02 === 0) {
      throw new Error("Divisão por zero não é permitida.");
  }
    let resultado = this.valor01/this.valor02;
    return resultado;
  }
  Porcetagem(): number {
    let resultado = (this.valor01*100)/this.valor02;
    return resultado;
  }
  get getValor01(): number{
    return this.valor01;
  }
  
  set setValor01(valor01: number) {
    this.valor01 = valor01;
  }
  get getValor02(): number{
    return this.valor02;
  }
  
  set setValor02(valor02: number) {
    this.valor02 = valor02;
  }
}

const Calculo01 = new Calculadora(10,5);
let soma01: number = Calculo01.Soma();
console.log(soma01);
*/
/*
03 – Desenvolva uma classe Produto em TypeScript

Crie uma classe Produto que represente um item disponível em um catálogo de uma loja virtual. A
classe deve ter as seguintes características:

Atributos:
• nome: uma string que representa o nome do produto.
• preco: um número que representa o preço do produto.
• quantidadeEmEstoque: um número inteiro que indica a quantidade disponível em estoque do
produto.
Construtor:

• Deve aceitar três parâmetros: nome, preco e quantidadeEmEstoque, e atribuí-los aos
respectivos atributos da classe.
Métodos:

• calcularValorTotalEmEstoque(): retorna o valor total em estoque do produto, calculado
multiplicando o preço pelo quantidade em estoque.
• reporEstoque(quantidade: number): adiciona a quantidade especificada ao estoque do
produto.
• vender(quantidade: number): remove a quantidade especificada do estoque do produto. Se a
quantidade desejada for maior do que a disponível em estoque, deve ser lançado um erro
indicando que não há estoque suficiente.
• Getters e Setters
Certifique-se de que a classe lida corretamente com situações de erro, como tentar vender mais
produtos do que há em estoque. Teste todos os métodos.
*/

class produto{
  
  private nome: string;
  private preco: number;
  private quantidadeEmEstoque: number;

  constructor(nome: string, preco: number, quantidadeEmEstoque: number){
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEmEstoque = quantidadeEmEstoque;
  }

  calcularValorTotalEmEstoque(): number {
    let resultado = this.preco*this.quantidadeEmEstoque;
    return resultado;
  }
  
}