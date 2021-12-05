import ball from './ball.js'
import paddle from './paddle.js';


const Ball = new ball(document.getElementById("ball"));

const playerPaddle = new paddle(document.getElementById("player-paddle"))
const computerPaddle = new paddle(document.getElementById("computer-paddle"))

const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")


let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;
        Ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
        computerPaddle.update(delta, Ball.y)
        if (isLose()) handleLose()       
    }
    
    lastTime = time;
    window.requestAnimationFrame(update);
}

function isLose() {
    const rect = Ball.rect();
    return rect.right >= window.innerWidth || rect.left <= 0  
}

function handleLose() {
    const rect = Ball.rect()
    if (rect.right >= window.innerWidth) {
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    } else {
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }
    Ball.reset()
    computerPaddle.reset()
}

document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)
