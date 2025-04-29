//Crie um caixa eletrônico: Crie uma variável global para armazenar o saldo, crie função para
//depositar e sacar, recebendo o valor como parâmetro, crie outra função para consultar o
//saldo. Crie um menu interativo com while para navegar entre as funções:
//[1] Depositar
//[2] Sacar
//[3] Consultar saldo
//[4] Parar programa

let saldo = 0

// Criar a função depositar
function depositar(valorDeposito){
    saldo += valorDeposito
}

//Criar a função sacar
function sacar(valorSaque){
    saldo -= valorSaque
}

// Função mostrar saldo
function mostrarSaldo(){
    console.log(`Seu saldo: ${saldo}`)
}

// Menu interativo

function caixaEletronico(){
    const prompt = require('prompt-sync')()
    let opçao = 0

    while(opçao != 4){
        console.log('=== Caixa Eletrônica ===')
        console.log('[1] - Depositar')
        console.log('[2] - Sacar')
        console.log('[3] - Mostrar Saldo')
        console.log('[4] - Sair')

        opçao = Number(prompt('Escolha uma opção: '))
        switch(opçao){
            case 1:
                let valorDeposito = Number(prompt('Digite o valor a ser depositado: '))
                depositar(valorDeposito)
                break
            case 2:
                let valorSaque = Number(prompt('Digite o valor a ser sacado: '))
                sacar(valorSaque)
                break
            case 3:
                mostrarSaldo()
                break
            case 4:
                console.log('Obrigado por usar o banco Rafinha')
            default:
                console.log('Opção Inválida')


        }
    }
}


caixaEletronico()