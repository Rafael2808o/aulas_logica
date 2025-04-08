// Escreva um programa que mostre todos os números entre 5 e 100 que são divisíveis por 7.
// Os números obtidos devem ser impressos em sequência.
const prompt = require('prompt-sync')()
console.log('Números divisíveis por 7: ')
for (let nmr = 5; nmr <= 100; nmr++) {
    if (nmr % 7 == 0) {
        console.log(`${nmr}`)
    }
}