const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('ERRO****'))
        })
    })
}

    async function main() {
        try { 
    const nome = await questionAsync('Qual é o seu nome?')
    const idade = await questionAsync('Qual é a sua idade?')
    console.log(`Olá ${nome}, você tem ${idade} anos.`)
        }

catch (erro) {
console.log('ERRO: ', erro.stack)
}

finally {
terminal.close()
}
}