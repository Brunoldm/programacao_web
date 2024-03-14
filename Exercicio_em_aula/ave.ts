import { animal } from "./animal";
export class ave implements animal{
    nome:string;

    constructor(nome:string){
        this.nome = nome;
    }
    botaovo(): boolean {
        return this.nome == "Onitorrinco"
    }
    daleite(): boolean {
        return false;
    }
    
}