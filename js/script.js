alert('Clique em qualquer lugar para começar o jogo! Boa Sorte :D')
const bart = document.querySelector('.bart');
const lixo = document.querySelector('.obstaculo');
const div = document.querySelector('.game-board');
const score = document.querySelector('.score')
let gameStarted = false;
let count = 0;
let loop = null;

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

function restartGame(){
  clearInterval(loop);
  loop = null;
  
  bart.style.bottom = '3%';
  bart.src = 'imagens/zyro-image.png';
  bart.style.width = '180px';
  
  count = 0;
  score.innerHTML = `Score: ${count}`;   
  
  loop = setInterval(()=>{
    const lixoPosition = lixo.offsetLeft;
    const bartPosition = +window.getComputedStyle(bart).bottom.replace('px', '');
  
    if (lixoPosition <= 80 && bartPosition < 115 && lixoPosition > 0 ){
      alert(`Game Over! Seu score foi: ${count}`);
      restartGame();
    };
    count++;
    score.innerHTML = `Score: ${count}`;
  }, 10);
}

function startGame(){
  restartGame();
  gameStarted = true;

  document.addEventListener('keydown', jump);
};



