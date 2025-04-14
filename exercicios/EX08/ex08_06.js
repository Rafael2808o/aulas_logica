//Receba uma palavra do usuário e calcule quantas vogais há nesta palavra.
const prompt = require('prompt-sync')()
let palavra = prompt("Digite uma palavra:")
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i].toLowerCase()
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contador++;
    }
}

console.log("A palavra tem", contador, "vogais.")
