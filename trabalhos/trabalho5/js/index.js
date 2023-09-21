document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        const emailError = document.getElementById("email-error");
        const senhaError = document.getElementById("senha-error");

        emailError.textContent = "";
        senhaError.textContent = "";

        document.getElementById("email").classList.remove("error-border");
        document.getElementById("senha").classList.remove("error-border");

        if (email === "") {
            emailError.textContent = "O email deve ser preenchido.";
            document.getElementById("email").classList.add("error-border");
            emailError.classList.remove("d-none");
        } else {
            emailError.classList.add("d-none");
        }

        if (senha === "") {
            senhaError.textContent = "A senha deve ser preenchida.";
            document.getElementById("senha").classList.add("error-border");
            senhaError.classList.remove("d-none");
        } else {
            senhaError.classList.add("d-none");
        }
    });

});
