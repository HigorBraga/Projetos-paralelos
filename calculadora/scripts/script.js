function calcular(valor1, valor2) {
    valor1 = parseFloat(window.document.getElementById('valor1').value);
    valor2 = parseFloat(window.document.getElementById('valor2').value);

    seletor = window.document.getElementById('seletor').value;

    switch(seletor){
        case '+':
            calculo = (valor1 + valor2);
            break
        case '-':
            calculo = (valor1 - valor2);
            break
        case '*':
            calculo = (valor1 * valor2);
            break
        case '/':
            calculo = (valor1 / valor2);
    }
    document.getElementById('resultado').innerHTML= `O resultado éh = ${calculo}`;
}