// Ler dois números inteiros e informar se estes são iguais ou diferentes
const prompt = require('prompt-sync')()
let nmr1 = parseInt(prompt('Digite o primeiro número: '))
let nmr2 = parseInt(prompt('Digite o segundo número: '))
console.clear()
if (nmr1 == nmr2){
    console.log(`Os números ${nmr1} e ${nmr2} são iguais!`)
}else{
    console.log(`Os números ${nmr1} e ${nmr2} são diferentes!`)
}