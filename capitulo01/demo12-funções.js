/*function nomeDafunção(parametro1) {
    bloco de código
}
*/z
function queDiaEHoje() {
    const dataAtual = new Date();
    console.log(`Hoje é dia ${dataAtual.getDate()}`);
}
queDiaEHoje();

function soma (valor1, valor2) {
    console.log(`O resultado entre a soma do valor ${valor1} mais o valor ${valor2} é igual a ${valor1 + valor2}`);
}
soma(30, 37);
soma(1, 66);
soma(20,47);

function contaMais(valor1, valor2) {
    return valor1 + valor2;
}

const idade = 20;
const altura = 2.00;
const resultado = contaMais(idade, altura);
console.log(`O resultado da soma entre a idade ${idade} e a altura ${altura} é igual a ${resultado}`);