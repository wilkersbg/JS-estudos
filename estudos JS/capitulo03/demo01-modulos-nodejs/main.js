const matematica = require('./matematica');

const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('digite o primeiro valor\n', (valor1) => {
terminal.question('digite o segundo valor\n', (valor2) => {
terminal.question('digite "somar" para somar e "multiplicar" para multiplicar\n', (tipoOperacao) => {
   const resultado = matematica[tipoOperacao](
    Number(valor1), Number(valor2)
   )
   if (isNaN(resultado)) {
        console.log('Oxe, tu errou em algo ai!')
        terminal.close()
     }
     else {
    console.log(`o resultado de ${valor1} ${tipoOperacao} ${valor2} é ${resultado}`)
terminal.close()
     }
    })
})
})