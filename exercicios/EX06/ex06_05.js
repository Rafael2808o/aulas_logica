// Ler do teclado a idade e o sexo de 10 pessoas, calcule e imprima:
// idade média das mulheres
// idade média dos homens
// idade média do grupo
const prompt = require('prompt-sync')()
let somaIdadeMulheres = 0
let somaIdadeHomens = 0
let somaIdadeGrupo = 0
let contMulheres = 0
let contHomens = 0

for (let i = 1; i <= 10; i++) {

    let idade = parseInt(prompt(`Pessoa ${i} - Digite a idade:`))
    let sexo = prompt(`Pessoa ${i} - Digite o sexo (M/F):`).toUpperCase()
    
    somaIdadeGrupo += idade
    
    if (sexo === 'F') {
        somaIdadeMulheres += idade
        contMulheres++
    } else if (sexo === 'M') {
        somaIdadeHomens += idade
        contHomens++
    } else {
        console.log('Sexo inválido, use "M" para masculino ou "F" para feminino.')
        i--
        continue
    }
}

let mediaIdadeGrupo = somaIdadeGrupo / 10

let mediaIdadeMulheres
let mediaIdadeHomens

if (contMulheres > 0) {
    mediaIdadeMulheres = somaIdadeMulheres / contMulheres
} else {
    mediaIdadeMulheres = 0
}

if (contHomens > 0) {
    mediaIdadeHomens = somaIdadeHomens / contHomens
} else {
    mediaIdadeHomens = 0
}


console.log(`Idade média das mulheres: ${mediaIdadeMulheres.toFixed(2)}`)
console.log(`Idade média dos homens: ${mediaIdadeHomens.toFixed(2)}`)
console.log(`Idade média do grupo: ${mediaIdadeGrupo.toFixed(2)}`)
