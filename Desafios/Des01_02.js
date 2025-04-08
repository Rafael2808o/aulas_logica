// Crie um programa que peça ao usuário a hora atual (em formato de 0 a 23) e, com base nesse horário mostre uma saudação adequada ao período do dia
const prompt = require('prompt-sync')()
let dataAtual = new Date()
let horaAtual = dataAtual.getHours()

if (horaAtual >= 5 && horaAtual <= 11) {
    console.log('Bom dia!')
} else if (horaAtual >= 12 && horaAtual <= 17) {
    console.log('Boa tarde!')
} else if (horaAtual >= 18 && horaAtual <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}
