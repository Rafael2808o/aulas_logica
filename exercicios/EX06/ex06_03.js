// Receba 5 números e verifique a soma e a quantidade de todos os pares e ímpares digitados
const prompt = require('prompt-sync')()
let pares = 0
let somaPares = 0
let impares = 0
let somaImpares = 0

for (let contador = 0; contador < 5; contador++) {
  let numero = parseInt(prompt("Digite um número:"))

  if (numero % 2 == 0) {
    pares++
    somaPares += numero
  } else {
    impares++
    somaImpares += numero
  }
}


console.log(`Quantidade de números pares: ${pares}`)
console.log(`Soma dos números pares: ${somaPares}`)
console.log(`Quantidade de números ímpares: ${impares}`)
console.log(`Soma dos números ímpares: ${somaImpares}`)
