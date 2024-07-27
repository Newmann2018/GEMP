// Função para alternar a cor de fundo do cabeçalho
function alternarCorDeFundo() {
    var header = document.querySelector('header');
    var currentColor = header.style.backgroundColor;
    var newColor = currentColor === 'rgb(51, 51, 51)' ? '#f44336' : '#333'; // Alternar entre cinza escuro e vermelho

    header.style.backgroundColor = newColor;
}

// Event listener para o clique no cabeçalho
document.querySelector('header').addEventListener('click', alternarCorDeFundo);
