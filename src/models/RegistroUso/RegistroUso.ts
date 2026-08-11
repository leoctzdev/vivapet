

export class RegistroUso {

    private readonly _id: string;
    private readonly _dataUso: Date;
    private readonly _quantidadeUso: number;
    private readonly _observacoes: string;

    private readonly _cuidadorId: string;
    private readonly _animalId: string;
    private readonly _suprimentoId: string;

   

    constructor(id: string, dataUso: Date, quantidadeUso: number, observacoes: string, cuidadorId: string, animalId: string, suprimentoId: string) {
        this._id = id;
        this._dataUso = dataUso;
        this._quantidadeUso = quantidadeUso;
        this._observacoes = observacoes;
        this._cuidadorId = cuidadorId;
        this._animalId = animalId;
        this._suprimentoId = suprimentoId;
    }

    public get id() {
        return this._id;
    }

    public get dataUso() {
        return this._dataUso;
    }

    public get quantidadeUso() {
        return this._quantidadeUso;
    }

    public get observacoes() {
        return this._observacoes;
    }

    public get cuidadorId() {
        return this._cuidadorId;
    }

    public get animalId() {
        return this._animalId;
    }

    public get suprimentoId() {
        return this._suprimentoId;
    }



}