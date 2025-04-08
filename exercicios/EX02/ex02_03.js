//Receba um inteiro e diga se é par ou ímpar.
const prompt = require('prompt-sync')()
let nmr = parseInt(prompt('Digite um número: '))
console.clear()
if (nmr % 2 == 0){
    console.log("O número é par.")
}else{
    console.log("O número é ímpar.")}