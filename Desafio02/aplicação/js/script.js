const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

nome.addEventListener("blur", () => {
    checkInputNome();
})

senha.addEventListener("blur", () => {
    checkInputSenha();
})

function checkInputNome(){
    const nomeValue = nome.value;
    
    if(nomeValue === ""){
        errorInput(nome, "Preencha um nome.");
    }else{
        const formItem = nome.parentElement;
        formItem.classList.remove("error");
    }
}

function checkInputEmail(){
    const emailValue = email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailValue === ""){
        errorInput(email, "O e-mail é obrigatório.")
    }else if (!emailRegex.test(emailValue)) {
        errorInput(email, "Digite um e-mail válido.");
    }else{
        const formItem = email.parentElement;
        formItem.classList.remove("error");
    }
}

function checkInputSenha(){
    const senhaValue = senha.value;

    if(senhaValue === ""){
        errorInput(senha, "A senha é obrigatória.")
    }else if(senhaValue.length < 8){
        errorInput(senha, "A senha precisa ter no mínimo 8 caracteres.")
    }else{
        const formItem = senha.parentElement;
        formItem.classList.remove("error");
    } 
}

function checkInputConfirmarSenha(){
    const confirmarSenhaValue = confirmarSenha.value;
    const senhaValue = senha.value;

    if(confirmarSenhaValue === ""){
        errorInput(confirmarSenha, "A confirmação de senha é obrigatória.")
    } else if( confirmarSenhaValue !== senhaValue){
        errorInput(confirmarSenha, " As senhas precisam ser iguais.")
    } else{
        const formItem = confirmarSenha.parentElement;
        formItem.classList.remove("error");
    }  
}

function checkForm(){
    checkInputNome();
    checkInputEmail();
    checkInputSenha();
    checkInputConfirmarSenha();

    const formItens = form.querySelectorAll(".form-content");

    const valido = [...formItens].every((item) => {
        return item.className  === "form-content"
    });

    if(valido){
        const usuario = {
            nome: nome.value,
            email: email.value,
            senha: senha.value
        };
    
        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

        alert('Cadastrado com sucesso');

        //window.location.href = "login.html";
        setTimeout(() => {
            window.location.href = "login.html";
        }, 100);
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
    
    formItem.className = "form-content error";
}
