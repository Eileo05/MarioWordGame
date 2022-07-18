const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector ('.clouds');
const game_board =document.getElementById('gameboard');
const tempo = document.getElementById('tempo');
const gameover = document.getElementById('txt-gameover')
const gameover1 = document.getElementById('txt-score')

const som_hit = new Audio();
som_hit.src = './img/song/audio_mario.mpeg'
var numero = 1


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'
        gameover.innerHTML = `<h1> GAME OVER </h1>`;
        gameover1.innerHTML += `<h2> SCORES:${tempo.textContent} </h2>`
        som_hit.src = './img/song/gameover.mpeg';
        som_hit.play();


        clearInterval(loop);
    }

}, 10);

const atualizartempo = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition >= 120 && pipePosition > 0 && marioPosition < 80) {
        tempo.textContent = numero
        numero++
        som_hit.play();


    }
}, 1000);

const mudarcenario = setTimeout(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition >= 120 && pipePosition > 0 && marioPosition < 80) {
      clouds.src = './img/lua-preview.png';
      clouds.style.width = '250px';
      game_board.style.background = 'linear-gradient( #020b0e, #020b0e)';
      pipe.style.animation = 'pipe-animation 1.3s infinite linear'

    }
},20000);

document.addEventListener('keydown', jump);



function Iniciar() {
    
    location.reload(loop);
}