let nome = window.document.getElementById('nome');
let senha = window.document.getElementById('senha');


function clicar() {
    if (nome.value == "Higor" && senha.value == "123") {
        window.alert("Acesso liberado!!!");
    } else {
        window.alert("Acesso negado!!!");
    }
}