const form = document.getElementById("form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const emailValue = email.value;
    const senhaValue = senha.value;
    const usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));
    
    if(emailValue !== usuarioCadastrado.email || senhaValue !== usuarioCadastrado.senha  ){
        alert("Senha ou e-mail inválidos");
    }else{
        window.location.href = "index.html";
    }
})
