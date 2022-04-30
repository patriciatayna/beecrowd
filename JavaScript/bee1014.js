var input = require('fs').readFileSync('stdin', 'utf8');

var [distanciaKm, totalCombustivel] = input.split("\n")

var consumo = distanciaKm/totalCombustivel
console.log(`${consumo.toFixed(3)} km/l`)