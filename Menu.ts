import { Input } from "./src/util/Input";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
import { formatarMoeda } from "./src/util/Currency";
import { colors } from "./src/util/Colors";

//CRIAR UM OBJETO GLOBAL DA CLASSE CONTACONTROLLER

const contas = new ContaController();

//CRIAR UM ARRAY CONTENDO OS TIPOS DE CONTA

const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

export function main() {
    let opcao: number;

    criarContasTeste();



    do {

        console.log(colors.bg.black, colors.fg.white,
            "* *********************************************** *");
        console.log("*                                                   *");
        console.log("*                BANCO CRED MAIS                    *");
        console.log("*                                                   *");
        console.log("* *************************************************", "*");
        console.log("*                                                   *");
        console.log("*           1 - Criar Conta                         *");
        console.log("*           2 - Listar todas as Contas              *");
        console.log("*           3 - Buscar Conta por Numero             *");
        console.log("*           4 - Atualizar Dados da Conta            *");
        console.log("*           5 - Apagar Conta                        *");
        console.log("*           6 - Sacar                               *");
        console.log("*           7 - Depositar                           *");
        console.log("*           8 - Transferir valores entre Contas     *");
        console.log("*           0 - Sair                                *");
        console.log("*                                                   *");
        console.log("* ************************************************* *");
        console.log("                                                     ",
            colors.reset);


        console.log("Digite a operação desejada: ");

        opcao = Input.questionInt("");

        if (opcao === 0) {
            sobre();
            process.exit(0);
        }


        switch (opcao) {
            case 1:
                console.log("\nCriar Conta! ");

                criarConta()

                keyPress()
                break;

            case 2:
                console.log("\nListar de todas as Contas! ");

                listarTodasContas()

                keyPress()
                break;

            case 3:
                console.log("\nConsultar dados da Conta - Por Número:  ");

                buscarContaPorNumero();

                keyPress()
                break;

            case 4:
                console.log("\nAtualizar dados da Conta! ");

                atualizarConta();

                keyPress()
                break;

            case 5:
                console.log("\nConta apagada!");

                deletarContaPorNumero();

                keyPress()
                break;

            case 6:
                console.log("\nDinheiro sacado! ");

                keyPress()
                break;

            case 7:
                console.log("\nValor Depositado ");

                keyPress()
                break;

            case 8:
                console.log("\nValor Transferido");

                keyPress()
                break;
            default:
                console.log("ERRO: Operação inválida");
        }

    } while (true)

}

/* OPÇÃO 1: CRIAR UMA NOVA CONTA*/

function criarConta() {
    console.log("Digite o número da agência: ");
    const agencia = Input.questionInt("");

    console.log("Digite o nome do titular:");
    const titular = Input.question("");

    console.log("Digite o tipo da conta: ");
    const tipo = Input.keyInSelect(tipoContas, "", { cancel: false }) + 1;

    console.log("Digite o saldo da conta: ");
    const saldo = Input.questionFloat("");

    

    switch (tipo) {
        case 1://CONTA CORRENTE
            console.log("Digite o limite da conta: ");
            const limite = Input.questionFloat("");
            contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
            break;

        case 2: //CONTA POUPANÇA
            console.log("Digite o dia do aniversário da conta: ");
            const aniversario = Input.questionInt("")
            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario));
            break;
    }
}

/*OPÇÃO 2: lISTAR TODAS AS CONTAS CADASTRADAS */

function listarTodasContas(): void{
    contas.listarTodas();
}

/*OPÇÃO 3: PROCURAR UM CONTA PELO NÚMERO */

function buscarContaPorNumero(): void {
    console.log("Digite o número da Conta: ");
    const numero = Input.questionInt("");

    contas.procurarPorNumero(numero);
}

/*OPÇÃO 4: ATUALIZAR OS DADOS DE UMA CONTA */

function atualizarConta(): void {
    console.log("Digite o número da Conta: ");
    const numero = Input.questionInt("");

    const conta = contas.buscarNoArray(numero);

    if (conta !== null) {

        //GUARDAR OS VALORES ATUAIS DA CONTA
        let agencia: number = conta.agencia;
        let titular: string = conta.titular;
        const tipo: number = conta.tipo;
        let saldo: number = conta.saldo;

        //ATUALIZAÇÃO DA AGENCIA

        console.log(`\nAgência Atual: ${agencia}`);
        console.log("Digite o novo número da agência: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        
        agencia = Input.questionInt("",{defaultInput: titular})

        //ATUALIZAÇÃO DO TITULAR

        console.log(`\nTitular atual: ${titular}`);
        console.log("Digite o novo nome do titular: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        titular = Input.question("", { defaultInput: titular });

        //ATUALIZAÇÃO DO SALDO

        console.log(`\nSaldo atual: ${formatarMoeda(saldo)}`);
        console.log("Digite o valor do novo saldo: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        saldo = Input.questionFloat("", { defaultInput: saldo });


        //ATUALIZAÇÃO DO TIPO 
        switch (tipo) {
            case 1: { // Conta Corrente
                let limite: number = (conta as ContaCorrente).limite;

                // Atualização do Limite
                console.log(`\nLimite atual: ${formatarMoeda(limite)}`);
                console.log("Digite o valor do novo limite: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                limite = Input.questionFloat("", { defaultInput: limite });

                contas.atualizar(new ContaCorrente(
                    numero, agencia, titular, tipo, saldo, limite));
                break;

            } case 2: { // Conta Poupança

                let aniversario: number = (conta as ContaPoupanca).aniversarioDaConta;

                // Atualização do Aniversário
                console.log(`\nAniversário Atual: ${aniversario}`);
                console.log("Digite o novo dia do aniversário: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                aniversario = Input.questionInt("", { defaultInput: aniversario });

                contas.atualizar(new ContaPoupanca(
                    numero, agencia, titular, tipo, saldo, aniversario));
                break;
            }
        }

    } else {
        console.log(colors.fg.red, `A conta número ${numero} não existe!`, colors.reset);
    }

}

/*OPÇÃO 5: DELETAR UMA CONTA PELO NÚMERO */

function deletarContaPorNumero(): void{

    // Solicita o número da conta
    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("");
    
    // Verifica se a conta existe
    const conta = contas.buscarNoArray(numero);

    // Se a conta existir...
    if(conta !== null){
        
        // Exibe a mensagem de confirmação da exclusão (Yes ou No)
        console.log(colors.fg.whitestrong, 
            `\nTem certeza que deseja deletar a conta número ${numero} [y/n]?`, colors.reset);
        const confirma = Input.keyInYNStrict("");

        // Se cofirmar (y), deleta a conta
        if (confirma)
            contas.deletar(numero);
        else
            console.log(colors.fg.red,"\nOperação cancelada!", colors.reset);
    

    }else{
        console.log(colors.fg.red, `A conta número ${numero} não foi encontrada!`, colors.reset);
    }

}


function sobre(): void {
    console.log(colors.fg.yellow,
        "\n*****************************************************");
    console.log("Projeto Desenvolvido por: Leonardo Ibanhez ");
    console.log("\nE-Mail: Leonardohibanhez@gmail.com");
    console.log("\ngithub.com/LeoIbanhez92");
    console.log("*****************************************************",
        colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}


/*CONTAS TESTE */
function criarContasTeste(): void {

    // Instâncias da Classe ContaCorrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 'João da Silva', 1, 1000.00, 100.00));

    // Instâncias da Classe ContaPoupança
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));

}

function yOuN(conta: string): boolean{
    return conta.trim().toLowerCase() === "y";
}

main();