function calcularReajuste() {
    const nome = document.getElementById('nomeMercadoria').value;
    const preco = parseFloat(document.getElementById('precoMercadoria').value);
    const resultado = document.getElementById('resultado');

    // Verificar se os valores são válidos
    if (!nome || isNaN(preco) || preco <= 0) {
        resultado.innerHTML = "Por favor, insira um nome válido e um preço positivo.";
        return;
    }

    // Calcular o novo preço com o reajuste
    let novoPreco;
    if (preco < 1000) {
        novoPreco = preco * 1.05; // Aumento de 5%
    } else {
        novoPreco = preco * 1.07; // Aumento de 7%
    }

    // Exibir o resultado
    resultado.innerHTML = `
        <strong>Mercadoria:</strong> ${nome}<br>
        <strong>Preço Original:</strong> R$ ${preco.toFixed(2)}<br>
        <strong>Novo Preço:</strong> R$ ${novoPreco.toFixed(2)}
    `;
}
