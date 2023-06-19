alert('Precione "ESPAÇO" para começar o seu jogo, Boa Sorte :D');

const bart = document.querySelector('.bart');
const lixo = document.querySelector('.obstaculo');
const nuvem = document.querySelector('.nuvem');

document.addEventListener('keydown', function(event){
  if (event.code === 'Enter'){
    startGame();
    lixo.style.animation = 'lixo-animation 2s infinite linear';
    nuvem.style.animation = 'nuvem-animation 30s infinite linear';
  };
});


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

      lixo.style.animation = 'none'
      lixo.style.left = `${lixoPosition}px`

      bart.style.animation = 'none'
      bart.style.bottom = `${bartPosition}px`

      bart.src = "imagens/1835-512x512.png"
      bart.style.width = '150px'
      
      alert('Infelizmente você perdeu, precione enter para reiniciar o jogo!')
    }
  }, 10)
  
  document.addEventListener('keydown', jump);
}

