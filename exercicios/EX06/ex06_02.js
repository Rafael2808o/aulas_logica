// Gere os 6 números do sorteio da mega-sena de forma aleatória.
const prompt = require('prompt-sync')()

let numero1, numero2, numero3, numero4, numero5, numero6

for (let contador = 0; contador < 6; contador++) {
  let numero = Math.floor(Math.random() * 60) + 1
  
  let numeroJaExiste = false
  
  if (contador > 0 && numero == numero1) numeroJaExiste = true
  if (contador > 1 && numero == numero2) numeroJaExiste = true
  if (contador > 2 && numero == numero3) numeroJaExiste = true
  if (contador > 3 && numero == numero4) numeroJaExiste = true
  if (contador > 4 && numero == numero5) numeroJaExiste = true

  if (!numeroJaExiste) {
    if (contador == 0) numero1 = numero
    if (contador == 1) numero2 = numero
    if (contador == 2) numero3 = numero
    if (contador == 3) numero4 = numero
    if (contador == 4) numero5 = numero
    if (contador == 5) numero6 = numero
  } else {
    contador--
  }
}

console.log(`Números sorteados: ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}, ${numero6}`)
