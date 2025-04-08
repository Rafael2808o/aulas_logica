// Solicite os parâmetros de início, fim e passo para o laço de repetição usando a função for() e
// exiba o valor atual da variável de controle a cada iteração.
const prompt = require('prompt-sync')()

let inicio = parseInt(prompt("Digite o valor de início:"))
let fim = parseInt(prompt("Digite o valor de fim:"))
let passo = parseInt(prompt("Digite o valor do passo:"))

for (let i = inicio; i <= fim; i += passo) {
    console.log(`Valor atual: + ${i}`)
}
