// Receba um número inteiro e diga se é positivo ou negativo
const prompt = require('prompt-sync')()
let nmr = parseInt(prompt('Digite um número: '))
console.clear()
if (nmr >= 0){
    console.log(`O número ${nmr} é positivo`)
}else{
    console.log(`O número ${nmr} é negativo`)
}