// Pergunte o ano de nascimento de uma pessoa e diga se ele é maior de idade
const prompt = require('prompt-sync')();
let ano = Number(prompt('Em que ano você nasceu? '));
let mes = Number(prompt('Em que mês você nasceu(número)? '));
let dia = Number(prompt('Em que dia você nasceu(número)? '));
let horas = Number(prompt('Em que horas você nasceu(número)? '));
let minutos = Number(prompt('Em que minutos você nasceu? '));
let segundos = Number(prompt('Em que segundos você nasceu? '));

function atualizarTempo() {
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    let mesAtual = dataAtual.getMonth() + 1
    let diaAtual = dataAtual.getDate()
    let horaAtual = dataAtual.getHours()
    let minutoAtual = dataAtual.getMinutes()
    let segundoAtual = dataAtual.getSeconds()

    let idade = anoAtual - ano
    let meses = mesAtual - mes
    let dias = diaAtual - dia
    let horasVividas = horaAtual - horas
    let minutosVividos = minutoAtual - minutos
    let segundosVividos = segundoAtual - segundos

    if (dias < 0) {
        const diasNoMes = new Date(anoAtual, mesAtual - 1, 0).getDate()
        dias += diasNoMes
        meses -= 1
    }

    if (meses < 0) {
        meses += 12
        idade -= 1
    }

    if (segundosVividos < 0) {
        segundosVividos += 60
        minutosVividos -= 1
    }

    if (minutosVividos < 0) {
        minutosVividos += 60
        horasVividas -= 1
    }

    if (horasVividas < 0) {
        horasVividas += 24
    }

    console.clear()
    if (idade >= 18) {
        console.log('Você é maior de idade!')
    } else {
        console.log('Você é menor de idade!')
    }

    console.log(`Você tem ${idade} anos, ${meses} meses, ${dias} dias, ${horasVividas} horas, ${minutosVividos} minutos e ${segundosVividos} segundos.`)
}

setInterval(atualizarTempo, 1000)