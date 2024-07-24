function gerarNumero(){
    const QualquerNúmero = Math.floor(Math.random()* 100) + 1;
    document.getElementById('res').innerText = `Seu número é: ${QualquerNúmero}`
}