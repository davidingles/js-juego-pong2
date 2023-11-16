const juego = {
  tiempo: 1000,
  alturaBarra: 100,
  anchuraMesa: 1000,
  alturaMesa: 600,
  direccion: 1,
  btn: document.querySelector('#btn'),
  acelera: document.querySelector('#acelera'),
  PARAR: null,
  player1: new Object(),
  player2: new Object(),
  KEYA: 'KeyA',
  KEYQ: 'KeyQ',
  KEYO: 'KeyO',
  KEYL: 'KeyL',
  setInicio() {
    bola.style.left = '10px'
    bola.style.top = (300 - 25) + "px"
    barra1.style.left = '0px'
    barra2.style.left = (juego.anchuraMesa - 10) + 'px'
    barra1.style.top = (juego.alturaMesa / 2 - juego.alturaBarra / 2) + 'px'
    barra2.style.top = (juego.alturaMesa / 2 - juego.alturaBarra / 2) + 'px'
    juego.player1.keyPress = false
    juego.player2.keyPress = false
    juego.player1.keyCode = null
    juego.player2.keyCode = null
  }
}


export default juego