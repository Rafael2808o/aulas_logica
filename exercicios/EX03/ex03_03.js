// Peça ao usuário para digitar o nome de um mês e imprime o número de dias naquele mês.
const prompt = require('prompt-sync')()
function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true
    }
    return false
}

let mes = prompt('Digite o nome de um mês(Comece com letra maiscúla): ')
if (mes == 'Janeiro' ||mes == 'Março' ||mes == 'Maio' ||mes == 'Julho' ||mes == 'Agosto' ||mes == 'Outubro' ||mes == 'Dezembro') {
    console.log(`O mês ${mes} tem 31 dias`)
} else if (mes == 'Abril' || mes == 'Junho' || mes == 'Setembro' || mes == 'Novembro') {
    console.log(`O mês ${mes} tem 30 dias`)
} else if (mes == 'Fevereiro') {
    if (ehBissexto(ano)) {
        console.log(`O mês ${mes} tem 29 dias (ano bissexto).`);
    } else {
        console.log(`O mês ${mes} tem 28 dias.`);
    }
} else {
    console.log('Mês inválido.');
}