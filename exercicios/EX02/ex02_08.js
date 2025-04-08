// Receba o quanto um vendedor vendeu no mês, se vendeu mais de R$ 5000,00 sua comissão será de 5% se vendeu menos será de 3%, exiba o valor de sua comissão
const prompt = require('prompt-sync')()
let vendeu = Number(prompt('Quanto você vendeu no mês? '))
console.clear()
if (vendeu > 5000){
    let maisD = (vendeu * 5 / 100)
    console.log(`Receberá um comissão de R$${maisD}`)
}else{
    let menosD = (vendeu * 3 / 100)
    console.log(`Receberá uma comissão de R$${menosD}`)
}