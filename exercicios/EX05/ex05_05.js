//Faça um programa que receba um número e mostre seu fatorial. Ex. :
//5! = 5 * 4 * 3 * 2 * 1 = 120
const prompt = require('prompt-sync')()
let nmr = parseInt(prompt("Digite um número para calcular o fatorial:"))

let fatorial = 1

if (nmr < 0) {
  console.log("O fatorial não existe para números negativos.")
} else {
  while (nmr >= 1) {
    fatorial *= nmr
    nmr--
  }
  console.log(`${nmr}! = ${fatorial}`)
}
