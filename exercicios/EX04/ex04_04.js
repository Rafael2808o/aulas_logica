//Pede ao usuário para digitar o nome de um mês e imprime o número de dias naquele mês.
const prompt = require('prompt-sync')()

function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true
    }
    return false
}

let mes = prompt('Digite o nome de um mês: ').toLowerCase()
let ano = new Date().getFullYear()

switch(true){
    case mes == 'janeiro' || mes == 'março' || mes == 'maio' || mes == 'julho' || mes == 'agosto' || mes == 'outubro' || mes == 'dezembro':
        console.log(`O mês ${mes} tem 31 dias`)
        break
    case mes == 'abril' || mes == 'junho' || mes == 'setembro' || mes == 'novembro':
        console.log(`O mês ${mes} tem 30 dias`)
        break
    case mes == 'fevereiro':
        if (ehBissexto(ano)) {
            console.log(`O mês ${mes} tem 29 dias (ano bissexto).`)
        } else {
            console.log(`O mês ${mes} tem 28 dias.`)
        }
        break
    default:
        console.log('Mês inválido.')
}