export class Suprimento {

    private readonly _id: string;
    private _nome: string;
    private _unidade: string;
    private _quantidadeEstoque: number;
    private _quantidadeMinima: number;
    private readonly _dataCadastro: Date;
    private _ativo: boolean;

    constructor(id: string, nome: string, unidade: string, quantidadeEstoque: number, quantidadeMinima: number, dataCadastro: Date, ativo: boolean) {
        this._id = id;
        this._nome = nome;
        this._unidade = unidade;
        this._quantidadeEstoque = quantidadeEstoque;
        this._quantidadeMinima = quantidadeMinima;
        this._dataCadastro = new Date;
        this._ativo = ativo;
    }

    public get id() {
        return this._id;
    }

    public get nome() {
        return this._nome;
    }

    public get unidade() {
        return this._unidade;
    }

    public get quantidadeEstoque() {
        return this._quantidadeEstoque;
    }

    public get quantidadeMinima() {
        return this._quantidadeMinima;
    }

    public get dataCadastro() {
        return this._dataCadastro;
    }

    public get ativo() {
        return this._ativo;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

     public set unidade(unidade: string) {
        this._unidade = unidade;
    }

     public set quantidadeEstoque(quantidadeEstoque: number) {
        this._quantidadeEstoque = quantidadeEstoque;
    }

     public set quantidadeMinima(quantidadeMinima: number) {
        this._quantidadeMinima = quantidadeMinima;
    }

     public set ativo(ativo: boolean) {
        this._ativo = ativo;
    }

    public alertaReposicao(){

        if(this._quantidadeEstoque < this._quantidadeMinima) {
            console.log("Quantidade de estoque abaixo da mínima");
            return true;
        } else {
            console.log("Quantidade dentro da normalidade");
            return false;
        }
    }
}