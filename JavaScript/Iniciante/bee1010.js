var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n")

var peca1 = valores.shift().split(" ")
var peca2 = valores.shift().split(" ")

var quantidade1 = peca1[1];
var valorUnitario1 = peca1[2];

var quantidade2 = peca2[1];
var valorUnitario2 = peca2[2];

var valorTotal = (quantidade1*valorUnitario1) + (quantidade2*valorUnitario2)

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`)