import { Conta } from "../model/Conta";

export interface ContaRepository {

    //MÉTODOS DO CRUD (CREATE, READ, UPDATE, DELETE)

    procurarPorNumero(numero: number):void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;
    procurarPorTitular(titular: string): void;

    //MÉTODO BANCÁRIO

    sacar(numero: number, valor: number): void;
    depositar(number:number, valor:number):void;
    transferir(numeroOrigem:number, numeroDestino:number, valor:number):void;
    
}