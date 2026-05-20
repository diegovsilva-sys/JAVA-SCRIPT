// FUNÇÃO COM RETORNO.
function verificar(valor) {
  if (valor == 0)
    return 'O valor é neutro'
  else if (valor > 0)
    return 'O valor é positivo'
  else
    return 'O valor é negativo'
}

let valor = 0
console.log(verificar(valor))
