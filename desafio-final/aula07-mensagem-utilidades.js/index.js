function onLoad(){
  //  console.log (`carregou!!`, tela, jogoDaMemoria)
const dependencias = {
  tela: Tela, //a classe Tela é global (pode ser ultilizada por todo o código)
  util: Util
}
//inicializamos o jogo da memória
const jogoDaMemoria = new JogoDaMemoria (dependencias)
jogoDaMemoria.inicializar()
}

window.onload = onLoad
