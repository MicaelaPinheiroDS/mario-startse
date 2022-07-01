export const mario = document.querySelector(".super-mario");
export const pipe = document.querySelector(".pipe-game");
const goomba = document.querySelector(".goomba")
export const stopAnimation =  document.querySelectorAll(".stop-animation")
const backgroundSongs = document.querySelector(".background-songs")
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
    backgroundSongs.src = "./songs/game-over.mp3"
    backgroundSongs.loop = false
    mario.classList.add('game-over')
    mario.style.marginLeft = "80px";  
    clearInterval(loopGame);
    for(let i in stopAnimation){
      stopAnimation[i].style.left = `${stopAnimation[i].offsetLeft}px`
      stopAnimation[i].style.animation =  "none" 
    }
  }
}, 10);

document.addEventListener("keydown", jump);
