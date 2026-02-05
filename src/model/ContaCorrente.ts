import { colors } from "../util/Colors";
import { Conta } from "./Conta";

//HERANÇA DA CLASSE CONTA
export class ContaCorrente extends Conta {

    //ATRIBUTOS ESPECÍFICOS DE CONTA CORRENTE

    private _limite:number;


	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number, limite: number) {
        super(numero, agencia, titular, tipo, saldo);
		this._limite = limite;
	}


    //MÉTODO GET E SET ESPECIFICOS DA CLASSE CONTA CORRENTE

	public get limite(): number {
		return this._limite;
	}

	public set limite(value: number) {
		this._limite = value;
	}

    //MÉTODO SACAR SOBRESCRITO
    public sacar(valor: number): boolean {
    
            if (valor <= 0) {
                console.log(colors.fg.red, "O valor deve ser Positivo!", colors.reset);
                return false;
            }
    
    
            if (valor > (this.saldo + this._limite)) {
                console.log(colors.fg.red, "Saldo Insuficiente!", colors.reset);
                return false;
            }
    
            this.saldo -= valor;
            return true;
        }

    //MÉTODO VISUALIZAR SOBRESCRITO (POLIMORFISMO)
    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da Conta: R$ ${this._limite.toFixed(2)}`);
    }


}