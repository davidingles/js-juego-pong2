// import from './objetoJuego.js'
import juego from './objetoJuego.js'
let { tiempo, alturaBarra, anchuraMesa, alturaMesa, direccion, btn, acelera, PARAR, player1, player2, KEYA, KEYQ, KEYO, KEYL, setInicio } = juego

function GAME() {

  function start() {
    setInicio()
    PARAR = setInterval(play, tiempo)
  }

  function stop() {
    clearInterval(PARAR)
  }
  function acelerar() {
    tiempo = 20
    PARAR = setInterval(play, tiempo)
  }
  btn.addEventListener('click', stop)
  acelera.addEventListener('click', acelerar)

  function play() {
    console.log('object');
  }

  document.onkeydown = function (e) {
    console.log(e);
    switch (e.code) {
      case KEYA:
      case KEYQ:
        player1.keyPress = true;
        player1.keyCode = e.code;
      case KEYO:
      case KEYL:
        player2.keyPress = true;
        player2.keyCode = e.code;
        break;
    }
  }












  start()

}

GAME()