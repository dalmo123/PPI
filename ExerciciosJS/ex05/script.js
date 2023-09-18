
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede a ação padrão do formulário

        // Obtenha os valores dos campos
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Obtenha as mensagens de erro
        const emailError = document.getElementById("email-error");
        const senhaError = document.getElementById("senha-error");

        // Limpe as mensagens de erro e a formatação
        emailError.textContent = "";
        senhaError.textContent = "";
        document.getElementById("email").classList.remove("error-border");
        document.getElementById("senha").classList.remove("error-border");

        // Validação dos campos em branco
        if (email === "") {
            emailError.textContent = "O campo E-mail deve ser preenchido.";
            document.getElementById("email").classList.add("error-border");
        }

        if (senha === "") {
            senhaError.textContent = "O campo Senha deve ser preenchido.";
            document.getElementById("senha").classList.add("error-border");
        }
    });
});
