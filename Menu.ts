import leia from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {
    let opcao: number;

    //INSTANCIAR OBJETOS DA CLASSE CONTA

    const c1 = new Conta(1 ,1234 ,"Sofia", 1 , 1000000.00);;

    c1.visualizar();


    //TESTES DO MÉTODO SACAR
    console.log("Sacar 100,00", c1.sacar(100.00));
    console.log("Sacar 30000000000.00", c1.sacar(30000000000.00));
    console.log("Sacar 0,00", c1.sacar(0.00));

    //TESTES DO MÉTODO DEPOSITAR
    console.log("Depositar - 10,00")
    c1.depositar(-10.00)

    console.log("Depositar 500,00");
    c1.depositar(500.00)

    c1.visualizar();

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

        opcao = leia.questionInt("Digite a operação desejada: ");

        if (opcao === 0) {
            sobre();
            process.exit();
        }


        switch (opcao) {
            case 1:
                console.log("\nCriar Conta! ");
                break;

            case 2:
                console.log("\nListar todas as Contas! ");
                break;

            case 3:
                console.log("\nBuscar conta por Número! ");
                break;

            case 4:
                console.log("\nAtualizar dados da Conta! ");
                break;

            case 5:
                console.log("\nConta apagada!");
                break;

            case 6:
                console.log("\nDinheiro sacado! ");
                break;

            case 7:
                console.log("\nValor Depositado ");
                break;

            case 8:
                console.log("\nValor Transferido");
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

main();