function onLoad(){
  //  console.log (`carregou!!`, tela, jogoDaMemoria)
const dependencias = {
  tela: Tela //a classe Tela é global
}
//inicializamos o jogo da memória
const jogoDaMemoria = new JogoDaMemoria (dependencias)
jogoDaMemoria.inicializar()
}

window.onload = onLoad
