const bart = document.querySelector('.bart');
const obs = document.querySelector('.obstaculo');

 
const jump = () => {
  bart.classList.add('jump');

  setTimeout(() => {
  bart.classList.remove('jump');
  },1000);

};

const loop = setInterval(() => {

  const position = obs.offsetLeft;

  if (position <= 80){
    obs.computedStyleMap.animation = 'none'
  }


}, 10);

document.addEventListener('keydown', jump);