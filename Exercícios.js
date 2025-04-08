const prompt = require('prompt-sync')()

console.log("Bem-vindo ao curso de JavaScript!")
console.log("Estou aprendendo a usar console.log")
console.log(15 + 25)
console.log(100 - 45)
console.log(12 * 7)
console.log(144 /12)
console.log(20 % 3)
console.log(2 ** 5)

//Exercicios de variaveis
// Crie 4 variaveis

let nomeAluno = "Rafinha"
let altura = 1.6
let escola = "SESI-025"
let ano = '2º Medio'
// Exibir os valores das variaveis
console.log(`O aluno ${nomeAluno}, tem ${altura}, estuda na escola ${escola} e está no ${ano}`)

// Crie 3 variaveis e atribua valores
let nomeProfessor = 'Ricardo'
let materia = 'Desenvolvimento de sistemas'
let anoIngresso = 2022
// Exibir valores das variaveis
    console.log(`O professor ${nomeProfessor} que leciona a matéria ${materia} no ${ano}. E ingressou na escola ${escola} no ano de ${anoIngresso}`)

// Reatribuindo valores as nossas variaveis
nomeAluno = prompt('Digite o nome do aluno?:  ')
altura = parseFloat(prompt('Digite a altura:  '))
escola = prompt('Digite o nome da escola:  ')
ano = parseInt(prompt('Digite o ano da turma:  '))

console.log(`O aluno ${nomeAluno}, tem ${altura}, estuda na escola ${escola} e está no ${ano}`)

nomeProfessor = prompt('Digite o nome do professor:  ')
materia = prompt('Digite o nome da materia:  ')
anoIngresso = parseInt(prompt('Digite o ano de Ingresso:  '))
console.log(`O professor ${nomeProfessor} que leciona a matéria ${materia} no ${ano}. E ingressou na escola ${escola} no ano de ${anoIngresso}`)