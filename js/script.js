// alert('Precione "ESPAÇO" para começar o seu jogo, Boa Sorte :D');

const bart = document.querySelector('.bart');
const lixo = document.querySelector('.obstaculo');
const nuvem = document.querySelector('.nuvem');
const btn = document.querySelector('.botao');
const div = document.querySelector('.game-board');
let gameStarted = false;

btn.addEventListener('click', clicou);

function clicou (){
  if (!gameStarted) {
    startGame();
    lixo.style.animation = 'lixo-animation 2s infinite linear';
    nuvem.style.animation = 'nuvem-animation 30s infinite linear';
    btn.style.opacity = '0';
    div.style.filter = 'invert(0)'
    gameStarted = true;
  };
};


// document.addEventListener('click', function(event){
//   if (event === btn){
//     startGame();
//     lixo.style.animation = 'lixo-animation 2s infinite linear';
//     nuvem.style.animation = 'nuvem-animation 30s infinite linear';
//   };
// });





function startGame(){

  const jump = () => {
    bart.classList.add('jump');
    
    setTimeout(() => {
    bart.classList.remove('jump');
    },1000);
  };

  const loop = setInterval(()=>{
    const lixoPosition = lixo.offsetLeft;
    const bartPosition = +window.getComputedStyle(bart).bottom.replace('px', '');

    if (lixoPosition <= 80 && bartPosition < 115 && lixoPosition > 0){
      clearInterval(loop);

      lixo.style.animation = 'none';
      lixo.style.left = `${lixoPosition}px`;

      bart.style.animation = 'none';
      bart.style.bottom = `${bartPosition}px`;

      bart.src = "imagens/1835-512x512.png";
      bart.style.width = '150px';
      
      // alert('Infelizmente você perdeu, precione clique para reiniciar o jogo!')
      btn.style.opacity = '1';
      gameStarted = false;
    }
  }, 10)
  
  document.addEventListener('keydown', jump);
}

