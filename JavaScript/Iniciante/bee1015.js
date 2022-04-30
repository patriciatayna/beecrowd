var input = require('fs').readFileSync('stdin', 'utf8');

// var [linha1, linha2] = input.split("\n");

// var [x1, y1] = linha1.split(" ").map(item => parseFloat(item));
// var [x2, y2] = linha2.split(" ").map(item => parseFloat(item));

var valores = input.split("\n");
var [x1, y1] = valores[0].split(" ").map(item => parseFloat(item));
var [x2, y2] = valores[1].split(" ").map(item => parseFloat(item));

var distancia = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2))

console.log(distancia.toFixed(4))