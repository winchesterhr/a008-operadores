const PrimeiroNumero = prompt("digite um numero")
const SegundoNumero = prompt("digite dmais um numero")

console.log(PrimeiroNumero > SegundoNumero)
console.log(PrimeiroNumero === SegundoNumero)
console.log(PrimeiroNumero % SegundoNumero === 0)
console.log(SegundoNumero % PrimeiroNumero === 0)

/* O resultado sempre será pois é sempre o resto da divisão */