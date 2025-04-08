//Receba alguns números e verifique a soma e a quantidade de todos os pares e ímpares
//digitados, digite 0 para não receber mais
const prompt = require('prompt-sync')()
let somaPares = 0
let somaImpares = 0
let quantidadePares = 0
let quantidadeImpares = 0

while (true) {
  let numero = parseInt(prompt("Digite um número (digite 0 para parar): "))

  if (numero == 0) {
    break
  }
  if (numero % 2 == 0) {
    somaPares += numero
    quantidadePares + 1
  } else {
    somaImpares += numero
    quantidadeImpares + 1
  }
}

console.log(`Soma dos números pares: ${somaPares}`)
console.log(`Quantidade de números pares: ${quantidadePares}`)
console.log(`Soma dos números ímpares: ${somaImpares}`)
console.log(`Quantidade de números ímpares: ${quantidadeImpares}`)
