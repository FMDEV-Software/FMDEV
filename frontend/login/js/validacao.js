const emailInput = document.getElementById("email");
const mensagemErro = document.getElementById("mensagem-erro");

function validarEmail(email) {

    const regexEmail = /^[a-zA-Z0-9._-]+@(upe\.br|poli\.br)$/;
    return regexEmail.test(email);
}
  
function verificarEmail() {
  
    if (validarEmail(emailInput.value)) {
      mensagemErro.textContent = "Email válido!";
      mensagemErro.style.color = "green";
    } else {
      mensagemErro.textContent = "O e-mail deve ser '@upe.br' ou '@poli.br'.";
      mensagemErro.style.color = "red";
    }
}