const readLine = require('readline')

const terminal = readLine.createInterface({
    // denfine o modo de entrada via terminal
    input: process.stdin,
    // todo texto de saída sairá no terminal
    output: process.stdout
});

// texto do menu

const textoMenu = `
Olá, seja bem vindo ao sistema de midia
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para acessar o menu de para sair
`
/*console.log('textoMenu', textoMenu)

const opcao = 3
switch (opcao) {
    case 1:
        console.log('Você acessou o menu inicial')
        break;
    case 2:
        console.log('Você acessou o menu de Herois')
        break;
    case 3:
        console.log('Você acessou o menu de Guerreiras')
        break;

    default:
        console.log('Opção inválida')
        break;
} */

const questao = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
   opcao1: {
        texto: 'submenu! Pressione enter para selecionar mais opções',
        fn: opcao1
    }
}
function opcao1(msg) {
    console.log('Não há mais opções')
   terminal.close()
}
        function menuInicial(msg) {
        const opcao = Number(msg)
                if (isNaN(opcao)) {
    throw new Error('Opção inválida', msg)
    terminal.close()
}

switch (opcao) {
    case 0:
        console.log('Saindo...')
        terminal.close()
        break;
    case 1:
        console.log('Você acessou o menu inicial')
        terminal.question(
            questao.opcao1.texto,
            questao.opcao1.fn
        )
        break;
    default:
        console.log('Opção inválida')
        break;
}
        }
    


terminal.question(
    questao.menuInicial.texto,
    questao.menuInicial.fn
)