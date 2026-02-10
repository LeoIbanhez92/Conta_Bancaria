import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";
import { formatarMoeda } from "../util/Currency";

export class ContaController implements ContaRepository {

    private listaContas = new Array<Conta>();

    public numero: number = 0;


    //MÉTODOS DO CRUD

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);
        if (buscaConta !== null)
            buscaConta.visualizar();
        else
            console.log(colors.fg.red, "\nConta não Encontrada!", colors.reset);
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    procurarPorTitular(titular: string): void {

        //! FILTRAGEM DOS DADOS
        const buscaPorTitular =this.listaContas.filter(conta => 
            conta.titular.toUpperCase().includes(titular.toUpperCase()));

        //!LISTAGEM DOS DADOS FILTRADOS

        if(buscaPorTitular.length > 0){
            buscaPorTitular.forEach( conta => conta.visualizar());

        }else {
            console.log(colors.fg.red,"Nenhuma conta foi encontrada", colors.reset);
        }

    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, `\nA conta número ${conta.numero} foi cadastrada com sucesso!`, colors.reset);
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.red, `\nA conta número ${conta.numero} foi Atualizada com Sucesso!`, colors.reset);
        } else
            console.log(colors.fg.red, "\nConta não Encontrada!", colors.reset);
    }

    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.red, `\nA conta número ${numero} foi Deletada com Sucesso!`, colors.reset);
        } else
            console.log(colors.fg.red, "\nConta não Encontrada!", colors.reset);


    }

    //!MÉTODO BANCÁRIO

    sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);
        if (buscaConta !== null) {
            if(buscaConta.sacar(valor) === true)
                console.log(colors.fg.red, `\nO saque no valor de${formatarMoeda(valor)} na Conta número ${numero} foi Realizada com Sucesso!`, colors.reset);

        } else
            console.log(colors.fg.red, "\nConta não Encontrada!", colors.reset);
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);
        if (buscaConta !== null) {
            buscaConta.depositar(valor)
                console.log(colors.fg.red, `\nO Depósito no valor de${formatarMoeda(valor)} na Conta número ${numero} foi Realizada com Sucesso!`, colors.reset);

        } else
            console.log(colors.fg.red, "\nConta não Encontrada!", colors.reset);
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        const buscaContaDestino = this.buscarNoArray(numeroDestino);

        if (buscaContaOrigem !== null && buscaContaDestino !== null) {
            if(buscaContaOrigem.sacar(valor) === true){
                buscaContaDestino.depositar(valor);
                console.log(colors.fg.red, `\nA transferência no valor de${formatarMoeda(valor)} da Conta número ${numeroOrigem}
                para a Conta ${numeroDestino} foi realizada com Sucesso!`, colors.reset);
            }
                
            
        } else
            console.log(colors.fg.red, "\nA Conta de origem e/ou destino não foram Encontrada!", colors.reset);
    }

    //MÉTODO AUXILIAR

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }

}