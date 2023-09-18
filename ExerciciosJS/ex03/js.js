document.addEventListener("DOMContentLoaded", function(){
    const tit = document.getElementById("titulo");
    const alteraTit = document.getElementById("alteraTitulo");
    const alteraCor = document.getElementById("alteraCorFundo");

    alteraTit.addEventListener("click", function(){
        const novoTit = prompt("Digite o novo titulo");
        if(novoTit !== null && novoTit !== ""){
            tit.textContent = novoTit;
        }
    });

    alteraCor.addEventListener("click", function(){
        document.body.style.backgroundColor = "red";
    });


});