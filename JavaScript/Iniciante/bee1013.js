var input = require('fs').readFileSync('stdin', 'utf8');

var [A, B, C] = input.split(" ").map(item => parseInt(item));

const maiorAB = (A+B + Math.abs(A-B))/2;
const maiorABC = (C + maiorAB + Math.abs(C-maiorAB))/2;

console.log(`${maiorABC} eh o maior`);