function insert(numeros){
    const num = window.document.getElementById('resultado').innerHTML;
    window.document.getElementById('resultado').innerHTML = num + numeros;
}


function clean(){
    window.document.getElementById('resultado').innerHTML = "";
}


function back(){
    const resultado = window.document.getElementById('resultado').innerHTML;
    window.document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}


function calcular(){
    const resultado = window.document.getElementById('resultado').innerHTML;
    if(resultado){
        window.document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        window.alert("Você não escolheu nenhum valor.");
    }
}