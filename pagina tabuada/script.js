/* Função que irá excecutar quando clicar no botão btnGerar. */
function gerarTabuada() {

    // Pega o valor do campo input HTML.
    const numeroInput = document.getElementById('numeroInput');
    let numero = parseInt(numeroInput.value);

    // Pega o elemento onde a atbuada será exibida.
    const resultadoDiv = document.getElementById('resultadotabuada');
    
    // Limpa o conteúdo anterior.
    resultadoDiv.innerHTML = ''

    // Adiciona o título da tabuada.
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}: </h2>`

    // Laço de repetição for para gerar a tabuada de 1 a 10.
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }
}

// Faz a função gerarTabuada ser executada quando clicar no botão.

const btnGerar = document.getElementById('gerarBtn');
btnGerar.addEventListener('click', gerarTabuada);