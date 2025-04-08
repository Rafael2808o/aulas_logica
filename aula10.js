const prompt = require('prompt-sync')()

// Estrutura condicional alinhada
let idade = Number(prompt('Qual a idade: '))
if (idade >= 18 && idade <= 70){
    console.log('Voto obrigatório!')

}else{
    if(idade < 16){
        console.log('Você não pode votar!')
    }else{
        if(idade >= 16 || idade > 70){
            console.log('Voto facultativo!')
        }
    }
}


// Switch Case   Estrutura de controle de fluxo para tomar decisões com base no valor de uma variável
let n1 = Number(prompt('Digite o primeiro número: '))
let n2 = Number(prompt('Digite o segundo número: '))
let operacao = prompt("Escolha a operação (+, -, *, /, **: ")

// Testa o valor da variável se é true 
switch(operacao){
    //Caso a variavel op for verdadeira, testará cada condição
    //Caso uma condição seja igual à um dos "CASES" executará o bloco em questão, usamos o "BREAK" para interromper o processo
    case '+':
        console.log(`Resultado: ${n1 + n2}`)
        break
    case '-':
        console.log(`Resultado: ${n1 - n2}`)
        break
    case '*':
        console.log(`Resultado: ${n1 * n2}`)
        break
    case '/':
        console.log(`Resultado: ${n1 / n2}`)
        break
    case '**':
        console.log(`Resultado: ${n1 ** n2}`)
    default:
        console.log('Operação inválida')
    
}

// Verificar qual letra é igual
let letra = prompt('Digite uma letra: ').toUpperCase()
//Quando usamos switch(variavel), o switch compara exatamente o valor da  variavel com os cases definidos
switch(letra){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log('Vogal')
        break
    default:
        console.log('Consoante')
}

// Converter a nota de número para letra
let nota = parseInt(prompt('Digite a nota do aluno: '))
// O switch (true) verifica quais expressões dentro do case retornam true ou verdade, ou seja comparamos as expressões booleans
switch(true){
    case nota >= 90:
        console.log('Nota A')
        break
    case nota >= 80:
        console.log('Nota B')
        break
    case nota >= 70:
        console.log('Nota C')
        break
    case nota >= 60:
        console.log('Nota D')
    default:
        console.log('Nota E')
}