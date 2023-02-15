const formulario = document.getElementById("formulario");
const nome_usuario = document.getElementById("nome-do-usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmar_senha = document.getElementById("confirmar-senha");


formulario.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function checkInputs() {
    // pegando os valores dos inputs
    nome_usuario.value.trim();
    email.value.trim();
    senha.value.trim();
    confirmar_senha.value.trim();


    if (nome_usuario.value.length === 0) {
        // show error
        // add error class
        setErrorFor(nome_usuario, "Usuário não pode estar em branco");
   
    } else {
        // add success class
        setSuccessFor(nome_usuario);
    }


    if (email.value.length === 0) {
        // show error
        // add error class
        setErrorFor(email, "Email não pode estar em branco");
    } else if (!isEmail(email.value)) {
        // add error class
        setErrorFor(email, "Email inválido");
    }else {
        // add success class
        setSuccessFor(email);
    }


    if (senha.value.length === 0) {
        // show error
        // add error class
        setErrorFor(senha, "Senha não pode estar em branco");
    } else {
        // add success class
        setSuccessFor(senha, "Senha");
    }


    if (confirmar_senha.value.length === 0) {
        // show error
        // add error class
        setErrorFor(confirmar_senha, "Confirme a senha");
    } else if (senha.value !== confirmar_senha.value) {
        // add success class
        setErrorFor(confirmar_senha, "As senhas não correspondem");
    } else {
        setSuccessFor(confirmar_senha);
    }
};


function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form control
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
};


function setSuccessFor(input) {
    const formControl = input.parentElement; //.form control
    formControl.className = "form-control success";
};


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};