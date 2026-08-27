const readline = require('readline');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

const texto = `
seja bem vindo ao menu inicial!
clique 1 para escolher o Andrew como o mlk mais viado existente
clique 2 para escolher o Lucas como o mlk mais viado existente
clique 3 para escolher o Wilker como o cara mais hetero e gostoso existente
clique 0 para sair do menu!`

function opçõesMenu(msg) {
  const opcoes = Number(msg)
  if (isNaN(opcoes)) {
    console.log('numero inválido, tente novamente')
}
switch (opcoes) {
  case 1:
    console.log('você escolheu o Andrew como o mlk mais viado existente')
    terminal.close()
    break;
  case 2:
    console.log('você escolheu o Lucas como o mlk mais viado existente')
    terminal.close()
    break;
  case 3:
    console.log('você escolheu o Wilker como o cara mais hetero e gostoso existente')
    terminal.close()
    break;
  case 0:
    console.log('saindo do menu...')
    terminal.close()
    break;
  default:
    console.log('opção inválida')
    terminal.close()
    break;
}
}

terminal.question(
  texto, opçõesMenu
)