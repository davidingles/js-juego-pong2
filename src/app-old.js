let tiempo = 100
const alturaBarra = 100
const anchuraMesa = 1000
const alturaMesa = 600
let direccion = 1
const btn = document.querySelector('#btn')
let PARAR;

const GAME = function () {

  function start() {
    setInicio()
    PARAR = setInterval(play, tiempo)
  }
  function setInicio() {
    bola.style.left = '10px'
    bola.style.top = (300 - 25) + "px"
    barra1.style.left = '0px'
    barra2.style.left = (anchuraMesa - 10) + 'px'
    barra1.style.top = (alturaMesa / 2 - alturaBarra / 2) + 'px'
    barra2.style.top = (alturaMesa / 2 - alturaBarra / 2) + 'px'
  }

  function stop() {
    clearInterval(PARAR)
  }
  addEventListener('click', stop)

  function play() {
    console.log('object');
  }














  start()

}()