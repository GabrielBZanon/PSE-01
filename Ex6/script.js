function calcularMaior() {
    const numeros = [
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value),
        parseInt(document.getElementById('num4').value),
        parseInt(document.getElementById('num5').value),
        parseInt(document.getElementById('num6').value)
    ];

    // Verificar se todos os números são válidos
    if (numeros.some(isNaN)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira todos os 6 números corretamente.";
        return;
    }

    // Encontrar o maior número
    const maior = Math.max(...numeros);

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = `O maior número digitado é: <strong>${maior}</strong>`;
}
