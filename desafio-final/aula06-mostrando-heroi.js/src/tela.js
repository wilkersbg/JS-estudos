//aqui eu crio todas as funcoes, elas serão passadas para o JogoDaMemoria e lá serão usadas
const ID_CONTEUDO = 'conteudo'
const ID_BTN_JOGAR = 'jogar'
const ID_MENSAGEM = 'mensagem'
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
    static exibirMensagem(sucesso = true) {
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
      setTimeout(() => {
        elemento.classList.add('invisible')
      }, 1000)
    }
}