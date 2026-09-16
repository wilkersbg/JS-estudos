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
    //força a tela a usar o THIS do jogo da memoria
    this.tela.configurarBotaoVerificar(this.jogar.bind(this))
}
embaralhar() {
    const copias = this.heroisIniciais
    //duplicar os itens
    .concat(this.heroisIniciais)
    //entrar em cada item e gerar um id aleatorio
    .map(item => {
        return Object.assign({}, item, {id: Math.random() / 0.5})
    })
    .sort(() => Math.random() - 0.5)
    //atualiza a tela
    this.tela.atualizarImagens(copias)
}
jogar() {
    this.embaralhar()
}
}