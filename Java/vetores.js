// CRIANDO EM JAVASCRIPT.
//  CRIANDO UM VETOR.
const vetornomes = ['João', 'Maria', 'Pedro']

console.log(vetornomes)

console.log('\nExibindo todos os elemento: ')
console.log(vetornomes)

console.log('\nExibindo o primeirio elemento: ')
console.log(vetornomes[0])

console.log('\nExibindo um elemento no final do vetor: ')
vetornomes.push('Carlos')
console.log(vetornomes)

console.log('\nExibindo um elemento no início do vetor: ')
vetornomes.unshift('Carla')
console.log(vetornomes)

console.log('\nRemovendo o primeiro elemento do vetor: ')
vetornomes.shift()
console.log(vetornomes)

console.log('\nRemovendo o último do vetor: ')
vetornomes.pop()
console.log(vetornomes)

console.log('\nLaço de repetição para percorrer todo o vetor:')
console.log('Ìndice: Nome')
vetornomes.forEach(nome, index => {
    console.log(`${index} é ${nome}`)
})