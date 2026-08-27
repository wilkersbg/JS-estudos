let frutaExistenteNoMercado = false;
let temCPUSuficiente = true;

/////////////////////////
// obter valores do terminal
const args = process.argv
const saldo = args[args.length - 1]

console.log('args', args)
console.log('saldo', saldo)
if (isNaN(saldo)) {
    console.log('Saldo inválido')
}

let tipoCliente = 'premium'
if(saldo < 9) {
    tipoCliente = 'basic'
}
else if(saldo >= 9 && saldo <= 20) {
    tipoCliente = 'gold'
}

 else {
    tipoCliente = null
}

if(!tipoCliente) {
    tipoCliente = "indefinido"
}

console.log('tipoCliente', tipoCliente)