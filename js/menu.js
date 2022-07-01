import {mario, 
        pipe, 
        stopAnimation
} 
from './script.js'

pipe.style.display = "none"
mario.src = './Images/super-mario.png'
for(let i in stopAnimation){
    if(typeof(stopAnimation[i]) == 'object'){
        stopAnimation[i].style.animation =  "none"
    }
  }
class createElement {
    constructor(className, elementName){
        this.elementName = document.createElement(elementName)
        this.elementName.classList.add(className)
        return document.body.insertBefore(this.elementName, null);
    }
}
function createMenu(){
        var game = document.querySelector('.game')
        var container = game.appendChild(new createElement('container', 'div'))
        var templateMenu  = container.appendChild(new createElement("templateMenu", "div"))
        templateMenu.innerHTML = `<h1><span>Super</span> Mario StartSe.</h1>`
        var menuButton = container.appendChild(new createElement("menuButton", "nav"))
        menuButton.innerHTML = `<ul>
                            <li id="starGame">Start</li>
                        </ul>`
}
createMenu()
starGame.addEventListener('click', ()=>{
    document.querySelector('.container').style.display = 'none'
    mario.src = '../Images/super-mario.gif'
    pipe.style.display = ""
    for(let i in stopAnimation){
        if(typeof(stopAnimation[i]) == 'object'){
            stopAnimation[i].style.animation =  "" 
        }
      }
    
})