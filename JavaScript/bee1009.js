var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n")

var funcionario = valores.shift();
var salarioFixo = parseFloat(valores.shift());
var totalDevendas = parseFloat(valores.shift());

var salarioTotal = salarioFixo + (0.15*totalDevendas)

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`)