function compararNumeros() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    const resultado = document.getElementById('resultado');

    
    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerHTML = "Por favor, insira dois números válidos.";
        return;
    }

    
    if (num1 > num2) {
        resultado.innerHTML = `O maior número é <strong>${num1}</strong> e o menor é <strong>${num2}</strong>.`;
    } else if (num1 < num2) {
        resultado.innerHTML = `O maior número é <strong>${num2}</strong> e o menor é <strong>${num1}</strong>.`;
    } else {
        resultado.innerHTML = `Os dois números são iguais: <strong>${num1}</strong>.`;
    }
}
