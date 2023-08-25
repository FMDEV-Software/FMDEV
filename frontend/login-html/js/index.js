const mensagem = document.getElementById('#mensagem');
const buttonEnter = document.getElementById("enter-btn");
const email = document.getElementById("email");

const habilitaButao = () => {
    if(email.value != "")
        buttonEnter.removeAttribute("disabled");
        return;
}

mensagem.innerHTML = "O e-mail deve ser '@upe.br' ou '@poli.br'."
