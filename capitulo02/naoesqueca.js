const readLine = require('readline');

// Configura a leitura e escrita no terminal
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const textoDoMenu = `
pressione 1 para escolher o flash como melhor herói.
pressione 2 para escolher o batman como o melhor herói.
pressione 3 para escolher o superman como o melhor herói.
pressione 0 para sair.`;

//  OBJETO DE MAPEAMENTO
// Guardamos o texto que o terminal exibe e a função que trata a resposta
const questao = {
    textoMenu: {
        texto: textoDoMenu,
        fn: menuInicial // Passamos a referência da função (SEM parênteses!)
    },
    opcao1: {
        texto: 'Submenu, pressione enter para mais informações\n',
        fn: opcao1
    }
};

function opcao1(msg) {
    console.log('não há mais função');
    terminal.close(); //  LEMBRETE: Sempre coloque () para EXECUTAR a função
}

function menuInicial(msg) {
    const opcao = Number(msg);

    //  LEMBRETE: isNaN tem 'N' maiúsculo e Error tem 'E' maiúsculo (case-sensitive)
    if (isNaN(opcao)) {
        throw new Error('deu ruim: ' + msg); // Espaço após 'ruim:' para não grudar o texto
    }


    //  LEMBRETE: O switch precisa ficar DENTRO da função para enxergar a variável 'opcao'
    switch (opcao) {
        case 1:
            //  ANTES: console.log(...),  Vírgula errou aqui!
            // AGORA: Use ponto e vírgula ou apenas quebra de linha entre comandos
            console.log('O flash com certeza é o melhor herói');
            terminal.question(
                questao.opcao1.texto, //  LEMBRETE: Aqui SIM vai vírgula para separar argumentos
                questao.opcao1.fn
            );
            break;

        case 2:
            console.log('O batman é o melhor herói');
            terminal.close(); //  LEMBRETE: Se não fechar, o terminal congela!
            break;

        case 3:
            console.log('o superman é o melhor herói');
            terminal.close(); //  LEMBRETE: Se não fechar, o terminal congela!
            break;

        case 0:
            console.log('Saindo...');
            terminal.close();
            break;

        default:
            console.log('opção invalida! Saindo...');
            terminal.close();
            break;
    }
}

// INÍCIO DO PROGRAMA
// Chama a primeira pergunta usando os dados salvos dentro de 'questao.textoMenu'
terminal.question(
    questao.textoMenu.texto,
    questao.textoMenu.fn
);