// alert('Precione "ESPAÇO" para começar o seu jogo, Boa Sorte :D');

const bart = document.querySelector('.bart');
const lixo = document.querySelector('.obstaculo');
const nuvem = document.querySelector('.nuvem');
const btn = document.querySelector('.botao')
const div = document.querySelector('.game-board')
let loop = null;

btn.addEventListener('click', clicou)

function clicou (){
  if (!loop){
    startGame();
    lixo.style.animation = 'lixo-animation 2s infinite linear';
    nuvem.style.animation = 'nuvem-animation 30s infinite linear';
    btn.style.opacity = '0';
    div.style.filter = 'invert(0)'
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

  loop = setInterval(()=>{
    const lixoPosition = lixo.offsetLeft;
    const bartPosition = +window.getComputedStyle(bart).bottom.replace('px', '');

    if (lixoPosition <= 80 && bartPosition < 115 && lixoPosition > 0){
      lixo.style.animation = 'none'
      lixo.style.left = `${lixoPosition}px`
      bart.style.animation = 'none'
      bart.style.bottom = `${bartPosition}px`
      bart.src = "imagens/1835-512x512.png"
      bart.style.width = '150px'
      
      clearInterval(loop);
      loop = null;      
      resetGame();
    }
  }, 10)
  
  document.addEventListener('keydown', jump);
}

function resetGame() {
  lixo.style.animation = 'lixo-animation 2s infinite linear';
  nuvem.style.animation = 'nuvem-animation 30s infinite linear';
  
  bart.src = "imagens/zyro-image.png"

  btn.style.opacity = '1';
  div.style.filter = 'invert(30%)';
}

