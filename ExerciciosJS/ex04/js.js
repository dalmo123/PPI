document.addEventListener("DOMContentLoaded", function() {
    const keywordForm = document.getElementById("keywordForm");
    const keywordInput = document.getElementById("keywordInput");
    const keywordList = document.getElementById("keywordList");

    keywordForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impedir o envio padrão do formulário

        const keywordText = keywordInput.value.trim(); // Remove espaços em branco extras

        if (keywordText === "") {
            return; // Não adiciona palavras vazias
        }

        // Cria um novo item de lista com a palavra-chave e um botão de remoção
        const listItem = document.createElement("li");
        listItem.classList.add("keyword");
        listItem.innerHTML = `
            ${keywordText} <button class="remove-button">X</button>
        `;

        // Adiciona o item de lista à lista de palavras-chave
        keywordList.appendChild(listItem);

        // Limpa o campo de entrada
        keywordInput.value = "";
    });

    // Adiciona um ouvinte de evento delegado para lidar com a remoção de palavras-chave
    keywordList.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-button")) {
            const listItem = event.target.parentElement;
            keywordList.removeChild(listItem);
        }
    });
});
