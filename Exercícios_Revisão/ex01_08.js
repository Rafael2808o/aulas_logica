// Faça uma função que peça um valor e mostre na tela se o valor é positivo ou negativo
const prompt = require('prompt-sync')()
let valor = Number(prompt('Digite um número: '))
if(valor >= 0){
    console.log(`O número ${valor} é positivo!`)
}else{
    console.log(`O número ${valor} é negativo!`)
}