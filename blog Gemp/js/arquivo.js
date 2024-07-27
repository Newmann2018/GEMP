// Event listener para o input de arquivo (foto)
document.getElementById('foto').addEventListener('change', function(event) {
    var file = event.target.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var preview = document.getElementById('preview');
            var imgElement = document.createElement('img');
            imgElement.setAttribute('src', e.target.result);
            imgElement.setAttribute('alt', 'Preview da imagem');
            imgElement.style.maxWidth = '100%';
            preview.innerHTML = ''; // Limpa o conteúdo anterior
            preview.appendChild(imgElement);
        }

        reader.readAsDataURL(file);
    }
});

// Event listener para o envio do formulário
document.getElementById('form-upload').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aqui você poderia adicionar lógica para enviar a imagem para um servidor, mas como é um exemplo estático, não faremos isso aqui.
    alert('Imagem enviada! (simulação)');

    // Limpar o formulário após o envio (opcional)
    document.getElementById('form-upload').reset();
    document.getElementById('preview').innerHTML = ''; // Limpar a pré-visualização
});
