const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const goomba = document.querySelector(".goomba")
const stopAnimation =  document.querySelectorAll(".stop-animation")

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const goombaPosition = goomba.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if ((pipePosition <= 120 && pipePosition > 0 && marioPosition < 117.5) || (goombaPosition <= 120 && goombaPosition > 0 && marioPosition < 117.5)) {
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./Images/mario-game-over.png";
    mario.classList.add('game-over')
    mario.style.marginLeft = "80px";  
    for(let i in stopAnimation){
      stopAnimation[i].style.left = `${stopAnimation[i].offsetLeft}px`
      stopAnimation[i].style.animation =  "none" 
    }

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", jump);
