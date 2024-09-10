function gerarNumero() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('Por favor, insira um número que seja maior que o mínimo para obter um valor.');
        return;
    }

    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById('resultado').innerText = 'Resultado: ' + numeroAleatorio;
}
