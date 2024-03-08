/*
01 – Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
(Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
instância de Carro
*/
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    Carro.prototype.exibirInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano, ", Cor: ").concat(this.cor));
    };
    Object.defineProperty(Carro.prototype, "getMarca", {
        get: function () {
            return this.marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "setMarca", {
        set: function (marca) {
            this.marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "getModelo", {
        get: function () {
            return this.modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "setModelo", {
        set: function (modelo) {
            this.modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "getAno", {
        get: function () {
            return this.ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "setAno", {
        set: function (ano) {
            this.ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "getCor", {
        get: function () {
            return this.cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "setCor", {
        set: function (cor) {
            this.cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    Carro.prototype.CalcularIdade = function () {
        var anoAtual = 2024;
        return anoAtual - this.ano;
    };
    return Carro;
}());
var meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
var IdadedoCarro = meuCarro.CalcularIdade();
console.log('Seu carro é', meuCarro.getModelo);
console.log('A idade do seu carro é', IdadedoCarro);
