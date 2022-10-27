const email = window.document.getElementById('email');
const senha = window.document.getElementById('senha');

email.addEventListener('focus', function() {
    email.style.borderColor = "#4a5f6a";
});

email.addEventListener('blur', function() {
    email.style.borderColor = "#ccc";
});

senha.addEventListener('focus', function() {
    senha.style.borderColor = "#4a5f6a";
});

senha.addEventListener('blur', function() {
    senha.style.borderColor = "#ccc";
});