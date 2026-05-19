// Arrow Function (função flecha).

const somar = (a, b) => {
    return a + b
}

const subtrair = (a, b) => {
    return a - b
}

const multiplicar = (a, b) => {
    return a * b
}

const dividir = (a, b) => {
    return a / b
}

const soma = somar(5, 3)
const subtracao = subtrair(5, -3)
const multiplicacao = multiplicar(5, 3) * 2
const divisao = dividir(5, 3) / 2

console.log(`soma: ${soma} `)
console.log(`divisao: ${divisao} `)
console.log(`subtracao: ${subtracao} `)
console.log(`multiplicacao: ${multiplicacao} `)