const fs = require('fs');
/*fs.readFile('./capitulo04/demo01-callbacks/arq.txt', (erro, resposta) => {
    if (erro) {
        console.log('Deu ruim', erro.stack);
        return;
    } 
    console.log('resposta', resposta.toString());
}
)
*/
fs.readFile('./capitulo04/demo01-callbacks/arq.txt', (erroarq1, respostaarq1) => {
    if (erroarq1) {
        console.error('Deu ruim no arq1', erroarq1);
        return;
    }
fs.readFile('./capitulo04/demo01-callbacks/arq2.txt', (erroarq2, respostaarq2) => {
    if (erroarq2) {
        console.error('Deu ruim no arq2', erroarq2);
        return;
    }
    fs.readFile('./capitulo04/demo01-callbacks/arq3.txt', (erroarq3, respostaarq3) => {
        if (erroarq3) {
            console.error('Deu ruim no arq3', erroarq3);
            return;
        }


        const conteudo = `${respostaarq1}\n${respostaarq2}\n${respostaarq3}`;
        fs.writeFile('./capitulo04/demo01-callbacks/arquivoFinal.txt', conteudo, (erroWrite, resultadoWrite) => {
            if (erroWrite) {
                console.error('Deu ruim no write', erroWrite);
                return;
            }
            console.log('Arquivo final criado com sucesso');
        })

    })
})
})

