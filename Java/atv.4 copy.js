// COM FUNÇÃO
function verificar(numero) {
    if (numero % 2 == 0) {
        return 'O número é par'
    } else {
        return 'O número é impar'
    }
}

let numero = 2
console.log(verificar(numero))
