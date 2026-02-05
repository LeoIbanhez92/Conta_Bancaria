import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

    private _aniversarioDaConta: number;

    constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number, aniversarioDaConta: number) {
        super(numero, agencia, titular, tipo, saldo);
        this._aniversarioDaConta = aniversarioDaConta;
    }


    get aniversarioDaConta(): number {
        return this._aniversarioDaConta;
    }


    public set aniversarioDaConta(value: number) {
        this._aniversarioDaConta = value;
    }


    public visualizar(): void {
        super.visualizar();
        console.log(`Aniversário da Conta: ${this._aniversarioDaConta}`);
    }
}