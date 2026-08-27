/*meses começam no zero
const dataDeAniversario = new Date(2008, 2, 14);
console.log(dataDeAniversario);
*/

const dataAtual = new Date(2008, 2, 14);
console.log(dataAtual.toString());

dataAtual.setDate(dataAtual.getDate() + 3);
console.log(dataAtual)