// Voce foi contratado para desenvolver um programa simples que ajude motoristas a decidir qual combustível é mais vantajoso na hora de abastecer
const prompt = require('prompt-sync')()
let gasolina = Number(prompt('Digite o valor da gasolinha (Litro): '))
let alcool = Number(prompt('Digite o valor do álcool (Litro): '))


if (alcool < gasolina * 70 / 100){
    console.log('Abasteça com álcool!')
} else {
    console.log('Abasteça com gasolina!')}