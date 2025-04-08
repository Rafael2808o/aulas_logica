//Trabalhando com laçoes de repetição (while)
const prompt = require('prompt-sync')()
// Executar o laço x vezes

let contador = 1

// Irá repetir enquanto a condição for verdadeira, ou seja será verdade enquanto o contador for menor ou igual a 5
while(contador <= 5){
    console.log(`O contador é ${contador}`)
    // Incrementando a variavel ou seja adcionando valor a ela
    // Para que continue o processo até que a condição seja atingida
    contador = contador + 1
}

console.log('FIM')

let senha_senai = '12345'

while(true){
    let senha = prompt('Digite a senha: ')
    if(senha_senai == senha){
        console.log('Você hackeou a senha')
        break
    }else if(senha == 'desisto'){
        break}
}

// -------------------------------------------------------------
let totalCompra1 = 0
let quantidadeProdutos1 = 0
let encerrar = ""
let soma1
while (encerrar != "SUB-TOTAL"){
  let produto1 = prompt("Digite o valor do produto ou 'SUB-TOTAL' para ver o total:")
    soma1 = totalCompra1 + produto1
    quantidadeProdutos1++
    encerrar = prompt("Deseja continuar: (digite SUB-TOTAL): ")
}

console.log(`Total da compra: R$ ${soma1}`)
console.log(`Quantidade de produtos: ${quantidadeProdutos1}`)


// Crie um jogo de advinhação de números,
// O computador precisa sortear um número aleatório com o Random
// E o usuário precisar digitar um número,
// Enquanto ele não acertar continua pedindo o numero
console.log("###############################")
console.log("🤔    JOGO DA ADVINHAÇÂO    🤔")
console.log("###############################")

let nrsorteado = Math.floor(Math.random() * 100 + 1) // Gera um número aleatorio
let acertou = false

while(!acertou){
    const chute = parseInt(prompt('🤔 Digite um número entre 1 e 100 para advinhar 🤔: '))
    if(chute > nrsorteado){
        console.log(`Você chutou ${chute}, tente um número menor!`)
    }
    else if(chute < nrsorteado){
        console.log(`Você chutou ${chute}, tente um número maior!`)
    }else if(chute == nrsorteado){
        console.log(`Você chutou ${chute},🎉Parabêns você acertou!🎊`)
        acertou = true
    }
}
