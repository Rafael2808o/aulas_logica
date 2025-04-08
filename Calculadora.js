// Calculadora
const prompt = require('prompt-sync')()
let operacao = prompt("Escolha uma operação (+, -, *, raiz, /):")
if (operacao === "raiz") {
    let num1 = parseFloat(prompt("Digite o primeiro número:"))
} else {
let num2 = parseFloat(prompt("Digite o segundo número:"))
}
let raiz = Math.sqrt(num1)

if (operacao === "raiz") {
    console.log(`Raiz do número ${num1} é ${raiz}`)
}

if (operacao === "+") {
    console.log("Resultado: " + (num1 + num2));
} else if (operacao === "-") {
    console.log("Resultado: " + (num1 - num2));
} else if (operacao === "*") {
    console.log("Resultado: " + (num1 * num2));   
} else if (operacao === "/") {
    if (num2 !== 0) {
        console.log("Resultado: " + (num1 / num2));
    } else {
        console.log("Erro: Não é possível dividir por zero!");}

} else {
    console.log("Operação inválida!");
}