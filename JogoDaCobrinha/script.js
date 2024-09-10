


const quadrado = document.getElementById('quadrado')

function creatPoint(){
 
    const pontos = document.createElement('div')

    pontos.style.width = '5px';
    pontos.style.height = '5px';
    pontos.style.backgroundColor = 'red';
    pontos.style.position = 'absolute';

    const maxX = quadrado.clientWidth - 5;
    const maxY = quadrado.clientHeight - 5;

    const x = Math.floor(Math.random() *maxX)
    const y = Math.floor(Math.random() * maxY)

    pontos.style.left = `${x}px`
    pontos.style.top = `${y}px`
    
    quadrado.appendChild(pontos)
}

let intervalo = setInterval(creatPoint, 1000);

function ajustarIntervalo(newInterval){

    clearInterval(intervalo);
    intervalo = setInterval(creatPoint, newInterval );
}


ajustarIntervalo(1000)

let posX = 200; 
let posY = 200;
let podeMover = true;

function moverCobrinha(eventos) {
    if(!podeMover) return;
    const cobrinha = document.getElementById('cobrinha');
    
    switch(eventos.key) {
        case 'ArrowUp':
            posY -= 5; 
            break;
        case 'ArrowDown':
            posY += 5; 
            break;
        case 'ArrowLeft':
            posX -= 5; 
            break;
        case 'ArrowRight':
            posX += 5; 
            break;
    }
    
    
    cobrinha.style.top = `${posY}px`;
    cobrinha.style.left = `${posX}px`;
    

   podeMover = false;
   setTimeout(() => {
    podeMover = true;
   }, 250);
}


window.addEventListener('keydown', moverCobrinha);


document.addEventListener('DOMContentLoaded', function(events){

    const recebeu = document.getElementById('recebeu')
    const button = document.getElementById('playGame')

    button.addEventListener('click', function(começou){
        recebeu.textContent = 'O jogo começou!'
    })
})





let intervalo2;
let posicao = 0;


function começarJogo(){

    const pontos = document.getElementById('pontos');
    const começarJogo = document.getElementById('playGame');
    
 


    
}




