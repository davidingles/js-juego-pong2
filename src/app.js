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
    document.body.style.backgroundColor = 'red'
  }
  function acelerar() {
    tiempo = 20
    PARAR = setInterval(play, tiempo)
  }
  btn.addEventListener('click', stop)
  acelera.addEventListener('click', acelerar)

  function play() {
    console.log('object');
    moveBar()
    // moveBall() //todo: pendiente de implementar
  }
  document.onkeydown = function (e) {
    switch (e.code) {
      case KEYA:
      case KEYQ:
        player1.keyPress = true
        player1.keyCode = e.code
        break
      case KEYO:
      case KEYL:
        player2.keyPress = true
        player2.keyCode = e.code
        break
    }
  }
  document.onkeyup = function (e) {
    if (e.code === KEYA || e.code === KEYQ) {
      player1.keyPress = false
      console.log('he soltado KEYA');
    }
    if (e.code === KEYO || e.code === KEYL) { player2.keyPress = false }
  }

  function moveBar() {

    if (player1.keyPress) {
      if (player1.keyCode === KEYA) { barra1.style.top = (barra1.offsetTop + 5) + 'px' }
      else if (player1.keyCode === KEYQ) { barra1.style.top = (barra1.offsetTop - 5) + 'px' }
    }
    if (player2.keyPress) {
      if (player2.keyCode === KEYO) {
        barra2.style.top = (barra2.offsetTop - 5) + 'px'
      }
      else if (player2.keyCode === KEYL) {
        barra2.style.top = (barra2.offsetTop + 5) + 'px'
      }

    }
  }








  start()

}

GAME()