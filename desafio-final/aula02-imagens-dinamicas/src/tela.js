const ID_CONTEUDO = 'conteudo'

class Tela {
    static obterHTML(item) {
        return `
    <div class="col-md-3">
      <div class="card" style="width: 50%">
        <img src="${item.img}" nome="${item.nome}" class="card-img-top" alt="...">
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
}