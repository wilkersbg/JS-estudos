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
    this.iconePadrao = './arquivos/iconePadrao.png'
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
    //vamos esperar 1 segundo para atualizar a tela
    setTimeout(() => {
        this.esconderHerois(copias)
    }, 1000)

}
    esconderHerois(herois) {
    //vamos trocar a imagem de todos os herois existentes
    //pelo icone padrao
    const heroisOcultos = herois.map(({nome, id}) => ({
        id,
        nome,
        img: this.iconePadrao
    }))
    //atualiza a tela com os herois ocultos
    this.tela.atualizarImagens(heroisOcultos)
    //guardar os herois para trabalhar com eles depois
    this.heroisocultos = heroisOcultos
}
    jogar() {
    this.embaralhar()
}
}