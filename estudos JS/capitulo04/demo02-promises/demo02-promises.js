const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
/*
terminal.question('qual é o seu nome?\n', nome => {
terminal.question('qual é a sua idade?\n', idade => {
    console.log(`olá ${nome}, você tem ${idade} anos`)
    terminal.close()
})
})*/

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve
    )}
)}
let nome = ''
let idade = ''

Promise.resolve()
.then(() => questionAsync('qual é o seu nome?'))
.then(respostaNome => {
    nome = respostaNome
    if (!nome) throw new Error('nome não informado')
}
)
.then(() => questionAsync('qual é a sua idade?'))
.then(respostaIdade => {
    idade = respostaIdade
    if (!idade) throw new Error('idade não informada')
        if (isNaN(idade)) throw new Error('idade não é um número')
})
.then(() => console.log(`olá ${nome}, você tem ${idade} anos`))
.catch(erro => console.error('Deu Ruim**', erro))
.finally(() => terminal.close())