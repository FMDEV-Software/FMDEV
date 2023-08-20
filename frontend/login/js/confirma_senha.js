const mensagemErro = document.getElementById("mensagem-erro");
let senha1 = document.getElementById("senha1");
let senha2 = document.getElementById("senha2");
const mensagem1 = document.getElementById("mensagem1");
const mensagem2 = document.getElementById("mensagem2");

function logar(){

    if(senha1.value != "" && senha2.value != ""){
        if(senha1.value === senha2.value){
            alert('Sucesso');
            location.href = "login.html";
        }
        else {
            mensagemErro.textContent = "A senha deve ser a mesma nos dois campos.";
            mensagemErro.style.color = "red";
        }
    }else {
        mensagemErro.textContent = "Os campos não podem estar vazios.";
        mensagemErro.style.color = "red";
    }
}

mensagem1.innerHTML = "<p style='font-size: 20px; color: #000; margin-top: 10px; margin-bottom: 10px; line-height: 2;'>Digite a nova senha.</p>"

mensagem2.innerHTML =  "<p style='font-size: 20px; color: #000; margin-top: 10px; margin-bottom: 10px; line-height: 2;'>Confirme a nova senha.</p>"
