class JogoDaMemoria {
constructor ({tela}){
    //se mandar um obj = {tela: 1, idade: 2, etc: 3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade tela
    this.tela = tela
    //caminho sempre relativo ao index.html
this.heroisIniciais = [
    {img: './arquivos/capitao.png', nome: 'capitao'},
    {img: './arquivos/capitaodois.png', nome: 'capitaodois'},
    {img: './arquivos/flashfalso.png', nome: 'flashfalso'},
    {img: './arquivos/seilaqbombaeessa.png', nome: 'seilaqbombaeessa'}
]
}
//para usar o this. não podemos usar o static
inicializar() {
    //vai pegar todas as funcoes da classe tela!
    //coloca todos os herois na tela
    this.tela.atualizarImagens(this.heroisIniciais)
}
}