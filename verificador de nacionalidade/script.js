function ChecarNacionalidade() {

    const nationality = document.getElementById('nationality').value.toLowerCase();

    const ResultadoDoElemento = document.getElementById('resultado');
    ResultadoDoElemento.textContent = `Voce é  ${nationality}`

   if(nationality === 'brasileiro' || nationality === 'brasileira'){
    ResultadoDoElemento.textContent = 'voce é brasileiro!'
   }else if (nationality === ''){
    ResultadoDoElemento.textContent = 'Por favor, digite sua nacionalidade!'
   }else{
    ResultadoDoElemento.textContent = 'Voce não é brasileiro!'
   }

}
