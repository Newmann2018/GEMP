// Array para armazenar os vídeos adicionados (simulação de armazenamento local)
var videos = [];

// Função para adicionar vídeo ao array e exibir na página
function adicionarVideo(titulo, url) {
    var video = {
        titulo: titulo,
        url: url
    };

    videos.push(video);
    exibirVideos();
}

// Função para exibir todos os vídeos na página
function exibirVideos() {
    var videosAdicionadosDiv = document.getElementById('videos-adicionados');
    videosAdicionadosDiv.innerHTML = ''; // Limpa o conteúdo anterior

    videos.forEach(function(video) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', video.url);
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '315'); // Altura padrão do YouTube
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');

        var titulo = document.createElement('h3');
        titulo.textContent = video.titulo;

        var divVideo = document.createElement('div');
        divVideo.classList.add('video-item');
        divVideo.appendChild(titulo);
        divVideo.appendChild(iframe);

        videosAdicionadosDiv.appendChild(divVideo);
    });
}

// Event listener para o envio do formulário
document.getElementById('form-adicionar-videos').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var titulo = document.getElementById('titulo').value;
    var url = document.getElementById('url').value;

    if (titulo && url) {
        adicionarVideo(titulo, url);
        document.getElementById('form-adicionar-videos').reset(); // Limpa o formulário após adicionar o vídeo
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
