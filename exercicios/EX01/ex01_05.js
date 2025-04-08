//Crie um programa que leia o valor em metros e o exiba convertido em centímetros, milímetros e km
const prompt = require('prompt-sync')()
let metros = Number(prompt('Quantidade de metros'))
let cm = metros * 100
let ml = metros * 1000
let km = metros / 1000
console.log(`O valor em metros é ${metros}, em centímetros ${cm}, em milímetros ${ml} e em Km ${km}`)