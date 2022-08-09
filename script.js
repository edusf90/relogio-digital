let hora = document.getElementById('horas')
let minuto = document.getElementById('minutos')
let segundo = document.getElementById('segundos')

let relogio = setInterval(function (time) {
  let dataAgora = new Date()

  let hr = dataAgora.getHours()
  let min = dataAgora.getMinutes()
  let seg = dataAgora.getSeconds()

  if (hr <= 9) {
    hr = '0' + hr
  }

  if (min <= 9) {
    min = '0' + min
  }

  if (seg <= 9) {
    seg = '0' + seg
  }

  hora.textContent = hr
  minuto.textContent = min
  segundo.textContent = seg
})
