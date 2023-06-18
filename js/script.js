const bart = document.querySelector('.bart');
const pipe = document.querySelector('.obstaculo');

 
const jump = () => {
  bart.classList.add('jump');

  setTimeout(() => {
  bart.classList.remove('jump');
  },1000);

};

const loop = setInterval(()=>{

  const pipePosition = pipe.offsetLeft;
  const bartPosition = +window.getComputedStyle(bart).bottom.replace('px', '');

  console.log(bartPosition)
  if (pipePosition <= 80 && bartPosition < 115 && pipePosition > 0){

    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    bart.style.animation = 'none'
    bart.style.bottom = `${bartPosition}px`

    bart.src = "imagens/1835-512x512.png"
    bart.style.width = '150px'
  }

}, 10)

document.addEventListener('keydown', jump);