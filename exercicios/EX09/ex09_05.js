//Crie uma função que receba 2 números e o operador matemático para realizar a
//operação (Ex. envio os parâmetros 2 e 5 e *, fazer a multiplicação), tratar as operações + - * / **
function conta(nmr1, operacao, nmr2) {
    if (operacao === '+') {
        console.log(`A soma dos números ${nmr1} e ${nmr2} é igual a ${nmr1 + nmr2}`)
    } else if (operacao === '-') {
        console.log(`A subtração dos números ${nmr1} e ${nmr2} é igual a ${nmr1 - nmr2}`)
    } else if (operacao === '*') {
        console.log(`A multiplicação dos números ${nmr1} e ${nmr2} é igual a ${nmr1 * nmr2}`)
    } else if (operacao === '/') {
        console.log(`A divisão dos números ${nmr1} e ${nmr2} é igual a ${nmr1 / nmr2}`)
    } else if (operacao === '**') {
        console.log(`A exponenciação de ${nmr1} elevado a ${nmr2} é igual a ${nmr1 ** nmr2}`)
    } else {
        console.log('Operação inválida.')
    }
}

conta(2, '+', 3)
conta(5, '-', 1)
conta(4, '*', 3)
conta(10, '/', 2)
conta(2, '**', 3)
