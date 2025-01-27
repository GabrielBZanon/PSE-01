function reajustar() {
    let salario = Number(document.getElementById('salario').value);
    let filhos = Number(document.getElementById('filhos').value);
    let resultado = document.getElementById('resultado');

    if (salario < 2000) {
        auxilio = 45 * filhos;
        let salarioComAuxilio = Number(salario + auxilio);
        resultado.innerHTML = `Auxilio de R$ ${auxilio.toFixed(2)} <br>Salário final R$ ${salarioComAuxilio.toFixed(2)}`;
    }
}   