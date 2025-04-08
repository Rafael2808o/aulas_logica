// Crie um programa que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidadede tinta necessária para pintá-lo, sabendo que cada litro de tinta pinta uma área de 2m²
const prompt = require('prompt-sync')()
let largura = Number(prompt('Digite a largura da parede: '))
let altura = Number(prompt('Digite a altura da parede: '))
let area = largura * altura
let quantidadeTinta = area / 2
console.log(`A área da parede é ${area} e a quantidade de tinta pra pintar a parede é ${quantidadeTinta}L`)