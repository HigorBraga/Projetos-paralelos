let resposta = window.document.getElementById('resposta');


function calcularImc() {
    let nome = window.document.getElementById('nome').value;
    let altura = Number(window.document.getElementById('altura').value);
    let peso = Number(window.document.getElementById('peso').value);
    if (altura == '' || peso == '' || nome == '') {
        window.alert('Por favor preencha todos os campos abaixo!!!');
    } else {
        let imc = (peso / (altura**2)).toFixed(1);
        if (imc < 18.5) {
            resposta.innerHTML = `${nome} seu IMC é de ${imc} e você está abaixo do peso ideal.`;
        } else if (imc < 24.9) {
            resposta.innerHTML = `${nome} seu IMC é de ${imc} e você está no peso ideal.`;
        } else if (imc < 29.9) {
            resposta.innerHTML = `${nome} seu IMC é de ${imc} e você está sobrepeso.`;
        } else if (imc < 39.9) {
            resposta.innerHTML = `${nome} seu IMC é de ${imc} e você está com obesidade.`;
        } else {
            resposta.innerHTML = `${nome} seu IMC é de ${imc} e você está com obesidade morbida.`
        }
    }
}


function limpar() {
    resposta.innerHTML = '';
}