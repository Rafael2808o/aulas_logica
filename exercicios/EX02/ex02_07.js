// Receba a velocidade do carro e exiba que foi multado se for maior que 80km/h, o valor da multa será R$ 7,00 por cada km excedido, exibir o valor da multa
const prompt = require('prompt-sync')()
let velocidade = Number(prompt('Qual a velocidade em que o carro estava ao passar pelo radar? '))
let velocidade2 = velocidade - 80
console.clear()
if (velocidade > 80){
    console.log(`Você foi multado por passar de 80km/h (${velocidade}) e o valor da multa é R$${velocidade2 * 7}`)
}