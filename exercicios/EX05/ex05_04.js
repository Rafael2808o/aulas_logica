// Faça um programa que leia 10 valores inteiros e:Encontre e mostre o maior valor Encontre e mostre o menor valor
// Calcule e mostre a média dos números lidos
const prompt = require('prompt-sync')()
let soma = 0
let i = 1
let maior, menor

while (i <= 10) {
  let numero = parseInt(prompt(`Digite o ${i}º valor inteiro:`))
  
  if (i == 1) {
    maior = numero
    menor = numero
  } else {
    if (numero > maior) {
      maior = numero
    }
    
    if (numero < menor) {
      menor = numero
    }
  }
  
  soma += numero
  i++
}

console.log(`Maior número: ${maior}`)
console.log(`Menor número: ${menor}`)
console.log(`Soma dos números: ${soma}`)
