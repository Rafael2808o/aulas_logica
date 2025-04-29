// Faça uma função que imprima na tela apenas os números ímpares entre 1 e 50. 
const prompt = require('prompt-sync')()
let i = 1
for(i == 1;i <= 50;i ++ ) {
  if (i % 2 != 0) {
    console.log(i)
  }
}