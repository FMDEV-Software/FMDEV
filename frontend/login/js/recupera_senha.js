const emailInput = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const mensagemErro = document.getElementById("mensagem-erro");

function validarEmail(email) {

    const regexEmail = /^[a-zA-Z0-9._-]+@(upe\.br|poli\.br)$/;
    return regexEmail.test(email);
}
  
function verificarEmail() {
  
    if (validarEmail(emailInput.value)) {
      mensagemErro.textContent = "Email válido!";
      mensagemErro.style.color = "green";
      location.href = "confirma_senha.html";
    } else {
      mensagemErro.textContent = "O e-mail deve ser '@upe.br' ou '@poli.br'.";
      mensagemErro.style.color = "red";
    }
}

mensagem.innerHTML = "Preencha com seu E-mail de Login e iremos enviar um link para você recuperar o acesso a sua conta."
mensagemErro.innerHTML = "<p style='color: red;'>O e-mail deve ser '@upe.br' ou '@poli.br'.</p>"