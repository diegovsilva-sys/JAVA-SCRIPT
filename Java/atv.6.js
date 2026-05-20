const vetornúmeros = [5, 10, 15, 20, 25, 30,]

function verificarParImpar(numero) {
    if (numero % 2 == 0) {
    'o numero é par'
    } else {
        return 'o numero é impar'
    }

}
console.log('\nExibindo todos os elemento: ')
console.log(vetornomes)

console.log(verificarParImpar(vetornúmeros[0]))

for (let i = 0; i < vetornúmeros.length; i++) {
    console.log(verificarParImpar(vetornúmeros[i]))
}