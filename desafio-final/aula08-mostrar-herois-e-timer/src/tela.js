//aqui eu crio todas as funcoes, elas serão passadas para o JogoDaMemoria e lá serão usadas
//metados estaticos não podem acessar os `this.`
//por isso, não vamos colocar o "util" no construtor
const util = Util

const ID_CONTEUDO = 'conteudo'
const ID_BTN_JOGAR = 'jogar'
const ID_MENSAGEM = 'mensagem'
const CLASSE_INVISIVEL = 'invisible'
const ID_CARREGANDO = 'carregando'
const ID_CONTADOR = 'contador'
const BTN_MOSTRAR_TUDO ='mostrarTudo'

const MENSAGEM = {
  sucesso: {
    texto: 'Combinação correta',
    classe: 'alert-success'
  },
  erro: {
    texto: 'Combinação incorreta',
    classe: 'alert-danger'
  }
  
}
class Tela {
    static obterHTML(item) {
        return `
    <div class="col-md-3">
      <div class="card" style="width: 50%" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
        <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
      </div>
      <br />
    </div>
    `
    }
    static alterarConteudoHTML (codigoHtml) {
      const conteudo = document.getElementById(ID_CONTEUDO)
      conteudo.innerHTML = codigoHtml
    }

    static gerarStringHTMLPelaImagem(itens) {
      //para cada item da lista, vai executar a função obterHTML
      //ao final, vai concatenar tudo em uma só string
      //muda de array para string
return itens.map(Tela.obterHTML).join('')
    }

    static atualizarImagens(itens) {
     const codigoHTML = Tela.gerarStringHTMLPelaImagem(itens)
     Tela.alterarConteudoHTML(codigoHTML)
    }

    static configurarBotaoVerificar (funcaoOnClick) {
      const btnJogar = document.getElementById(ID_BTN_JOGAR)
      btnJogar.onclick = funcaoOnClick
    }
    static configurarBotaoVerificarSelecao (funcaoOnClick) {
      window.verificarSelecao = funcaoOnClick
    }
    static exibirHerois(nomeDoHeroi, img) {
      const elementoHtml = document.getElementsByName(nomeDoHeroi)
      //para cada heroi na tela, vamos verificar se o nome dele é igual ao nomeDoHeroi
      //se for, vamos alterar a imagem dele para o valor de img
      //com o forEach, para cada item dentro dos () setamos o valor de imagem
      elementoHtml.forEach(item => (item.src = img))
    }
    static async exibirMensagem(sucesso = true) {
      const elemento = document.getElementById(ID_MENSAGEM)
      if (sucesso) {
        elemento.classList.remove('invisible', 'alert-danger')
        elemento.classList.add('alert-success')
        elemento.innerHTML = MENSAGEM.sucesso.texto
      } else {
        elemento.classList.remove('invisible', 'alert-success')
        elemento.classList.add('alert-danger')
        elemento.innerHTML = MENSAGEM.erro.texto
      }
      await util.timeout(1000)
      elemento.classList.add(CLASSE_INVISIVEL)
    }
    static exibirCarregando(mostrar = true){
    const carregando = document.getElementById(ID_CARREGANDO)
    if (mostrar){ 
      carregando.classList.remove(CLASSE_INVISIVEL)
      return;
    }
    carregando.classList.add(CLASSE_INVISIVEL)
    }
    static iniciarContador(){
      let contarAte = 3
      const elementoContador = document.getElementById(ID_CONTADOR)
      //vamos substituir o texto começando pelo $$contador segundos
      //onde está o $$contador adicionaremos o valor
      const identificadorDoTexto = "$$contador"
      const textoPadrao = `Começando em ${identificadorDoTexto} segundos...`
      //vamos criar uma funcao em uma linha para atualizar o texto
      const atualizarTexto = () =>
      (elementoContador.innerHTML = textoPadrao.replace(identificadorDoTexto, contarAte--))
      atualizarTexto()
      //a cada segundo, ele vai chamar essa função atualizar texto
      //essa função vai substituir o $$contador pelo `contarAte` diminuindo o valor
      //retornamos o idDoIntervalo para ele para mais tarde
      const idDoIntervalo = setInterval(atualizarTexto, 1000)
      return idDoIntervalo
    }
    static limparContador(idDoIntervalo){
      clearInterval(idDoIntervalo)
      document.getElementById(ID_CONTADOR). innerHTML = ""
    }
   static configurarBotaoMostrarTudo(funcaoOnClick) {
    const btnMostrarTudo = document.getElementById(BTN_MOSTRAR_TUDO)
    btnMostrarTudo.onclick = funcaoOnClick
   }

}