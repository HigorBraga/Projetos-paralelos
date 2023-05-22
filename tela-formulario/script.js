var botao = window.document.getElementById('btn');
var loginto = window.document.getElementById('login');
var registration = window.document.getElementById('register');



function login() {
    loginto.style.left = "3.125em";
    registration.style.left = "28.125em";
    btn.style.left = "0em";
}



function register() {
    loginto.style.left = "-25em";
    registration.style.left = "3.125em";
    btn.style.left = "6.875em";
}