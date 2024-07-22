document.addEventListener('DOMContentLoaded', function(){
    const message = document.getElementById('messagem')
    const button = document.getElementById('clicaaqui')

    button.addEventListener('click', function(){
        message.textContent = 'Mudou?VOCE È BRABO!'
    })
})