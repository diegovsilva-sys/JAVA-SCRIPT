// Definindo a função
function calcularMedia(numero1, numero2) {
  // Calcula a soma dos dois números e divide por 2
const media = (numero1 + numero2) / 2;

  // Mostra a mensagem com o resultado
console.log(`A média entre ${numero1} e ${numero2} é: ${media}`);
}

// Exemplos de uso da função:
calcularMedia(10, 8);  // Saída: A média entre 10 e 8 é: 9
calcularMedia(7, 4);   // Saída: A média entre 7 e 4 é: 5.5

function calcularMediaAlerta(numero1, numero2) {
const media = (numero1 + numero2) / 2;
alert(`A média entre ${numero1} e ${numero2} é: ${media}`);
}

