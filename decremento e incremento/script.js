document.addEventListener('DOMContentLoaded', function(){
    let count = 0;
    const counter = document.getElementById('counter')
    const incremento = document.getElementById('Incremento')
    const decremento = document.getElementById('Decremento')

    incremento.addEventListener('click', function(){
        count++;
        counter.textContent = count;
    })
        decremento.addEventListener('click', function(){
            count--;
            counter.textContent = count;
        })
});