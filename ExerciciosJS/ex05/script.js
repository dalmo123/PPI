document.addEventListener("load", function() {
    const formularioCadastro = document.querySelector("loginForm");

    formularioCadastro.addEventListener("submit", function(event) {
        event.preventDefault();

        const campoEmail = document.querySelector("#email");
        const campoSenha = document.querySelector("#senha");

        const emailError = campoEmail.parentElement.querySelector(".error");
        const senhaError = campoSenha.parentElement.querySelector(".error");

        campoEmail.classList.remove("error-border");
        campoSenha.classList.remove("error-border");

        emailError.innerHTML = "";
        senhaError.innerHTML = "";

        if (campoEmail.value === "") {
            campoEmail.classList.add("error-border");
            emailError.innerHTML = "O campo E-mail deve ser preenchido.";
            event.preventDefault();
        }

        if (campoSenha.value === "") {
            campoSenha.classList.add("error-border");
            senhaError.innerHTML = "O campo Senha deve ser preenchido.";
            event.preventDefault();
        } 
    });
});
