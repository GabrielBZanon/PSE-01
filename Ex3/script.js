function calcularDesconto() {
    const salario = parseFloat(document.getElementById('salario').value);
    const resultado = document.getElementById('resultado');
    const teto = 7087.22;

    if (isNaN(salario) || salario <= 0) {
        resultado.innerHTML = "Por favor, insira um valor de salário válido.";
        return;
    }

    let desconto;

    if (salario <= 1212.00) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= teto) {
        desconto = salario * 0.14;
    } else {
        desconto = teto * 0.14;
    }

    const salarioFinal = salario - desconto;

    resultado.innerHTML = `
        <strong>Salário Bruto:</strong> R$ ${salario.toFixed(2)}<br>
        <strong>Desconto INSS:</strong> R$ ${desconto.toFixed(2)}<br>
        <strong>Salário Líquido:</strong> R$ ${salarioFinal.toFixed(2)}
    `;
}
