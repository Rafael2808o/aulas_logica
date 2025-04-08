//Criando nosso primeiro FOR
const prompt = require('prompt-sync')()
for (let i = 0; i < 100; i++) {
    console.log(i)
}

// Entregando os notebooks por ordem
console.log('Entregando os notebooks')
for (let nr = 1; nr <= 32; nr++) {
    let nome = prompt(`Quem é o número ${nr}: `)
    let presente = prompt(`O (A) ${nome} veio para a escola? (S/N): `).toUpperCase

    if (presente == 'S') {
        console.log(`Pegar o notebook ${nmr}`)
        console.log(`Pegar o mouse ${nmr}`)
        console.log(`Leva o notebook até o ${nome}`)
    } else {
        console.log(`Não pegar o notebook ${nmr}`)
    }
}

console.log('Começar a aula')
