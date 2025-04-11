
const form = document.getElementById("form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    limparErro(email);
    limparErro(senha);

    const emailValue = email.value;
    const senhaValue = senha.value;
    const usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));
    
    if(!usuarioCadastrado){
        alert("Usuário não cadastrado.");
        return;
    }


    if(emailValue !== usuarioCadastrado.email || senhaValue !== usuarioCadastrado.senha  ){
        alert("Senha ou e-mail inválidos");
    }else{
        window.location.href = "index.html";
    }

})


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
    
    formItem.className = "form-content error";
}

function limparErro(input){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = "";
    formItem.classList.remove("error");
}