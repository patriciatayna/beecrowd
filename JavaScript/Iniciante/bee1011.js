var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

const PI = 3.14159;

var raioEsfera = parseFloat(lines);
var volumeEsfera = (4/3) * PI * Math.pow(raioEsfera, 3);

console.log(`VOLUME = ${volumeEsfera.toFixed(3)}`);