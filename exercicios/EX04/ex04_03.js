//Pede ao usuário para digitar o número de um mês e imprime o seu nome.
const prompt = require('prompt-sync')()
let mes = Number(prompt('Digite o número de um mês: '))
switch(true){
    case mes == 1:
    console.log('O número corresponde à janeiro')
    break
    case mes == 2:
    console.log('O número corresponde à fevereiro')
    break
    case mes == 3:
    console.log('O número corresponde à março')
    break
    case mes == 4:
    console.log('O número corresponde à abril')
    break
    case mes == 5:
    console.log('O número corresponde à maio')
    break
    case mes == 6:
    console.log('O número corresponde à junho')
    break
    case mes == 7:
    console.log('O número corresponde à julho')
    break
    case mes == 8:
    console.log('O número corresponde à agosto')
    break
    case mes == 9:
    console.log('O número corresponde à setembro')
    break
    case mes == 10:
    console.log('O número corresponde à outubro')
    break
    case mes == 11:
    console.log('O número corresponde à novembro')
    break
    case mes == 12:
    console.log('O número corresponde à dezembro')
    break
    default:
        console.log('O número do mês é inválido!')
}