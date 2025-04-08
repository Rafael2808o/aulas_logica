//Peça dois números ao usuário e mostre qual o maior e qual o menor
const prompt = require('prompt-sync')()
let nmr1 = Number(prompt('Digite um número: '))
let nmr2 = Number(prompt('Digite outro número: '))
console.clear()
if(nmr1 > nmr2){
    console.log(`O número ${nmr1} é maior do que o número ${nmr2}`)
}else{
    console.log(`O número ${nmr2} é maior do que o número ${nmr1}`)
}