// Este programa visa auxiliar o usuário no aprendizado da tabuada de um número específico, fornecendo
// feedback interativo e estatísticas de desempenho ao final.
const prompt = require('prompt-sync')()
let numero = parseInt(prompt("Digite o número que deseja treinar a tabuada: "))
  
    let acertos = 0
    let erros = 0
  
    for (let i = 1; i <= 10; i++) {
      let resultadoCorreto = numero * i
      let respostaUsuario = parseInt(prompt(`Qual é o resultado de ${numero} x ${i}? `))
  
    
      if (respostaUsuario == resultadoCorreto) {
        console.log("🎉🎊CORRETO!🎊🎉")
        acertos++
      } else {
        console.log(`QUE PENA, VOCÊ ERROU! O valor correto é ${resultadoCorreto}.`)
        erros++
      }
    }

      console.log(`Total de acertos: ${acertos}`)
      console.log(`Total de erros: ${erros}`)
      if (acertos == 5) {
        console.log('Parabéns você acertou metade das questões👏')
      } else if (acertos > 5) {
        console.log('🎉🎊Parabéns você acertou mais da metade das questões👏👏')
      } else {
        console.log(' 👎☠️ 🤌 Você errou mais da metade das questões, BURRO DEMAIS! 🤬🖕🫏 ')
      }
  