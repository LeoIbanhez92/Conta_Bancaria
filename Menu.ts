import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { Input } from "./src/util/Input";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
    let opcao: number;

    //INSTANCIAR OBJETOS DA CLASSE CONTA

    // const c1 = new Conta(1, 1234, "Sofia", 1, 1000000.00);

    // c1.visualizar();


    // //TESTES DO MÉTODO SACAR
    // console.log("Sacar 100,00", c1.sacar(100.00));
    // console.log("Sacar 30000000000.00", c1.sacar(30000000000.00));
    // console.log("Sacar 0,00", c1.sacar(0.00));

    // //TESTES DO MÉTODO DEPOSITAR
    // console.log("Depositar - 10,00")
    // c1.depositar(-10.00)

    // console.log("Depositar 500,00");
    // c1.depositar(500.00)

    // c1.visualizar();

    //TESTES DA CLASSE CONTA CORRENTE

    const cc1 = new ContaCorrente(2, 5678, "Bianca", 1, 200000.00, 2000.00);

    cc1.visualizar();

    //TESTES DO MÉTODO SACAR - CONTA CORRENTE
    console.log("Sacar 1000,00", cc1.sacar(1000.00));
    console.log("Sacar 200000.00", cc1.sacar(200000.00));

    //TESTE DO MÉTODO SACAR - CONTA CORRENTE
    cc1.visualizar();

    
    const cp1 = new ContaPoupanca(3, 7654, "Leonardo", 2, 2000.00, 15);
    cp1.visualizar();

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

                keyPress()
                break;

            case 2:
                console.log("\nListar todas as Contas! ");
                1
                keyPress()
                break;

            case 3:
                console.log("\nBuscar conta por Número! ");

                keyPress()
                break;

            case 4:
                console.log("\nAtualizar dados da Conta! ");

                keyPress()
                break;

            case 5:
                console.log("\nConta apagada!");

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
//ÁREA DE TESTE

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

main();