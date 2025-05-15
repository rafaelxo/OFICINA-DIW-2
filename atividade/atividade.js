function coletarDados() {
    var num1 = parseInt(numero1.value);
    var num2 = parseInt(numero2.value);
    resultado(num1, num2);
}

function somar(num1, num2) {
    var soma = num1 + num2;
    return soma;
}

function resultado(num1, num2) {
    var soma = somar(num1, num2);
    document.getElementById("resp").innerHTML += `<p>${num1} + ${num2} = ${soma}</p>`;
}