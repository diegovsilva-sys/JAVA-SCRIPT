// CALCULE A MÉDIA DO VETOR ABAIXO:
//UTILIZE OS RECURSOS DO ES6.

notas = [10,10,10]

const media = notas.reduce((soma , Atual) => soma + Atual, 0)
console.log(`A média é: ${media}`);