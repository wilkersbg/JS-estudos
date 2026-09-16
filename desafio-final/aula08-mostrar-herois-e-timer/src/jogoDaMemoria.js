class JogoDaMemoria {
constructor ({tela, util}){
    //se mandar um obj = {tela: 1, idade: 2, etc: 3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade tela
    this.tela = tela
    this.util = util
    //caminho sempre relativo ao index.html
this.heroisIniciais = [
    {img: './arquivos/capitao.png', nome: 'capitao'},
    {img: './arquivos/capitaodois.png', nome: 'capitaodois'},
    {img: './arquivos/flashfalso.png', nome: 'flashfalso'},
    {img: './arquivos/seilaqbombaeessa.png', nome: 'seilaqbombaeessa'}
]
    this.iconePadrao = './arquivos/images.png'
    this.heroisSelecionados = []
    this.heroisEscondidos = []
}
//para usar o this. não podemos usar o static
    inicializar() {
    //vai pegar todas as funcoes da classe tela!
    //coloca todos os herois na tela
    this.tela.atualizarImagens(this.heroisIniciais)
    //força a tela a usar o THIS do jogo da memoria
    this.tela.configurarBotaoVerificar(this.jogar.bind(this))
    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
}
    async embaralhar() {
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
    this.tela.exibirCarregando()

    const idDoIntervalo = this.tela.iniciarContador()
    //vamos esperar 3 segundos para atualizar a tela
    await this.util.timeout(3000)
    this.tela.limparContador(idDoIntervalo)
    this.esconderHerois(copias)
    this.tela.exibirCarregando(false)

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
    this.heroisEscondidos = heroisOcultos
}
exibirHerois(nomeDoHeroi) {
    //vamos procurar esse heroi no nosso heroisIniciais
    //vamos obter somente a imagem dele
    const {img} = this.heroisIniciais.find(({nome}) => nomeDoHeroi === nome)
    //vamos criar a função na tela, para exibir somente o heroi selecionado
    this.tela.exibirHerois(nomeDoHeroi, img)
}
    verificarSelecao(id, nome) {
    const item = {id, nome}
    //pega quantos heróis tem selecionados pelo .length
   const heroisSelecionados = this.heroisSelecionados.length
   switch(heroisSelecionados) {
    case 0:
        //adiciona a escolha na lista, esperando pela proxima em uma lista de 2
        this.heroisSelecionados.push(item)
        break;
    case 1:
        //se a quantidade de herois selecionados for 1, significa que o usuário só pode escolher mais um
        //vamos obter o primeiro item da lista
        const [opcao1] = this.heroisSelecionados
        //zerar itens para nao selecionar mais de dois
        this.heroisSelecionados = []
        if (opcao1.nome === item.nome && opcao1.id !== item.id) {
            this.exibirHerois(item.nome)
            this.tela.exibirMensagem(true)
            //como o padrão é true, não precisa passar nada
            return;
        }
       this.tela.exibirMensagem(false)
        break; 
   }
}
  mostrarHeroisEscondidos() {
       const heroisEscondidos = this.heroisEscondidos
        for(const heroi of heroisEscondidos){
        const {img} = this.heroisIniciais.find(item => item.nome === heroi.nome)
        heroi.img = img
        }
    
    this.tela.atualizarImagens(heroisEscondidos)
   }
    jogar() {
    this.embaralhar()
}
}