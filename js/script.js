alert('Clique em qualquer lugar para começar o jogo! Boa Sorte :D')
const bart = document.querySelector('.bart');
const lixo = document.querySelector('.obstaculo');
// const btn = document.querySelector('.botao');
const div = document.querySelector('.game-board');
const score = document.querySelector('.score')
let gameStarted = false;
let count = 0 
 
div.addEventListener('click', clicou);

function clicou (){
  if (!gameStarted) {
    startGame();
  };
};

const jump = () => {
  bart.classList.add('jump');
  
  setTimeout(() => {
  bart.classList.remove('jump');
  },1000);
};

function startGame(){
  var loop = setInterval(()=>{
    const lixoPosition = lixo.offsetLeft;
    const bartPosition = +window.getComputedStyle(bart).bottom.replace('px', '');

    if (lixoPosition <= 80 && bartPosition < 115 && lixoPosition > 0){
      alert(`Game Over! Seu score foi: ${count}`);
      lixo.style.left = `${lixoPosition}px`;
      bart.style.bottom = `${bartPosition}px`;

      bart.src = "imagens/1835-512x512.png";
      bart.style.width = '150px';

      // btn.style.opacity = '1';
      
      count = 0;
    };
    count++;
    score.innerHTML = `SCORE: ${count}`;
  }, 10);
  
  document.addEventListener('keydown', jump);
};



