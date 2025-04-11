const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email1 = document.getElementById("email");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const docIndentidade = document.getElementById("identidade");
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const numero = document.getElementById("numero");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const dataNascimento = document.getElementById("data-nascimento");
const comprovante = document.getElementById("residencia");
const identidade = document.getElementById("identidade");
const email = document.getElementById("emailConfirmar");
const senha = document.getElementById("senha");

function salvarDadosTemporarios() {
    const dados = {
        nome: nome.value,
        email: email.value,
        cpf: cpf.value,
        telefone: telefone.value,
        cep: cep.value,
        rua: rua.value,
        numero: numero.value,
        cidade: cidade.value,
        estado: estado.value,
        dataNascimento: dataNascimento.value,
        trilha: document.querySelector('input[name="trilha"]:checked')?.value || "",
    };
    localStorage.setItem("dadosTemporarios", JSON.stringify(dados));
}

const campos = [nome, email, cpf, telefone, cep, rua, numero, cidade, estado, dataNascimento];

campos.forEach((campo) => {
    campo.addEventListener("input", () => {
        salvarDadosTemporarios();
    });
});

document.querySelectorAll('input[name="trilha"]').forEach((radio) => {
    radio.addEventListener("change", () => {
        salvarDadosTemporarios();
    });
});

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
    const emailValue = email1.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailValue === ""){
        errorInput(email1, "O e-mail é obrigatório.");
    }else if (!emailRegex.test(emailValue)) {
        errorInput(email1, "Digite um e-mail válido.");
    }else{
        const formItem = email1.parentElement;
        formItem.classList.remove("error");
    }
}

function checkInputTelefone(){
    const telefoneValue = telefone.value;

    if(telefoneValue === ""){
        errorInput(telefone, "O número de telefone é obrigatório.");
    }else{
        const formItem = telefone.parentElement;
        formItem.classList.remove("error");
    }

}

function checkInputCep(){
    const cepValue = cep.value;

    if(cepValue === ""){
        errorInput(cep, "O número do cep é obrigatório.");
    }else{
        const formItem = cep.parentElement;
        formItem.classList.remove("error");
    }
}

function checkInputRua(){
    const ruaValue = rua.value;

    if(ruaValue === ""){
        errorInput(rua, "O nome da rua é obrigatório.");
    }else{
        const formItem = rua.parentElement;
        formItem.classList.remove("error");
    }

}

function checkInputCpf(){
    const cpfValue = cpf.value;

    if(cpfValue === ""){
        errorInput(cpf, "O CPF é obrigatório.");
    }else{
        const formItem = cpf.parentElement;
        formItem.classList.remove("error");
    }

}

function checkInputNumero(){
    const numeroValue = numero.value;

    if(numeroValue === ""){
        errorInput(numero, "O numero é obrigatório.");
    }else{
        const formItem = numero.parentElement;
        formItem.classList.remove("error");
    }

}

function checkInputCidade(){
    const cidadeValue = cidade.value;

    if(cidadeValue === ""){
        errorInput(cidade, "A cidade é obrigatória.");
    }else{
        const formItem = cidade.parentElement;
        formItem.classList.remove("error");
    }
}

function checkInputEstado(){
    const estadoValue = estado.value;

    if(estadoValue === ""){
        errorInput(estado, "O Estado é obrigatório.");
    }else{
        const formItem = estado.parentElement;
        formItem.classList.remove("error");
    }
}

function checkInputDataNascimento(){
    const dataNascimentoValue = dataNascimento.value;

    // Converte a data de nascimento para objeto Date
    const dataNascimentoDate = new Date(dataNascimentoValue);
    const hoje = new Date();

    // Calcula a idade
    let idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
    const mes = hoje.getMonth() - dataNascimentoDate.getMonth();

    // Ajusta a idade se o aniversário ainda não tiver passado no ano atual
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimentoDate.getDate())) {
        idade--;
    }

    if(dataNascimentoValue === ""){
        errorInput(dataNascimento, "A data de nascimento é obrigatória.");
    }else if(isNaN(idade) || idade <= 0 || idade % 1 !== 0) {
        errorInput(dataNascimento, "Por favor, insira uma data de nascimento válida.");
    }else if (idade < 16) {
        errorInput(dataNascimento, "Você precisa ter mais de 15 anos para se inscrever.");
    }else{
        const formItem = dataNascimento.parentElement;
        formItem.classList.remove("error");
    }
}

function checkInputTrilha() {
    const trilhas = document.querySelectorAll('input[name="trilha"]');
    const selecionada = [...trilhas].some((trilha) => trilha.checked);
    const trilhaContainer = document.getElementById("trilhas-aprendizagem");
    const textMessage = trilhaContainer.querySelector("a");

    if (!selecionada) {
        
        textMessage.innerText = "Selecione uma trilha de aprendizagem.";
        trilhaContainer.className = "form-content error";
    } else {
        textMessage.innerText = ""; 
        trilhaContainer.classList.remove("error");
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

function checkInputEmailConfirmar(){
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

function checkForm(){

    checkInputNome();
    checkInputEmail();
    checkInputTelefone();
    checkInputCep();
    checkInputRua();
    checkInputCpf();
    checkInputNumero();
    checkInputCidade();
    checkInputEstado();
    checkInputDataNascimento();
    checkInputTrilha();
    checkInputSenha();
    checkInputEmailConfirmar();

    

    const usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));
    const emailDoCadastroValue = email.value;
    const senhaValue = senha.value;
    console.log(localStorage);

    if(emailDoCadastroValue !== usuarioCadastrado.email || senhaValue !== usuarioCadastrado.senha  ){
        alert("Senha ou e-mail inválidos");
        return;
    }

    const formItens = form.querySelectorAll(".form-content");

    const valido = [...formItens].every((item) => {
        return item.className  === "form-content";
    });

    if(valido){

        alert("Inscrição feita com sucesso.");

    
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
    
    formItem.className = "form-content error";
}

