var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n")

var idFuncionario = parseInt(valores.shift());
var horas = parseInt(valores.shift());
var valorHora = parseFloat(valores.shift());

var salario = horas*valorHora

console.log(`NUMBER = ${(idFuncionario)}`);
console.log(`SALARY = U$ ${(salario.toFixed(2))}`);