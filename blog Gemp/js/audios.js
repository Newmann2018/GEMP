document.addEventListener("DOMContentLoaded", function() {
    const audioFileInput = document.getElementById("audioFile");
    const uploadButton = document.getElementById("uploadButton");
    const audioList = document.getElementById("audioList");

    uploadButton.addEventListener("click", function() {
        const files = audioFileInput.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const audioItem = createAudioElement(file);
            audioList.appendChild(audioItem);
        }
        audioFileInput.value = ''; // Limpa a seleção de arquivos do input
    });

    function createAudioElement(file) {
        const audioItem = document.createElement("div");
        audioItem.classList.add("audio-item");

        const audio = document.createElement("audio");
        audio.controls = true;

        const source = document.createElement("source");
        source.src = URL.createObjectURL(file);
        source.type = file.type;

        audio.appendChild(source);
        audioItem.appendChild(audio);

        return audioItem;
    }
});
