/*
01 – Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
(Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
instância de Carro
*/

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
        this.marca = this.marca;
    }
    

  }
  
  const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
  
  meuCarro.exibirInfo();