import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

const ball = new Ball(document.getElementById('ball'));
const playerPaddle = new Paddle(document.getElementById('player_paddle'));
const computerPaddle = new Paddle(document.getElementById('computer_paddle'));

const playerScoreElement = document.getElementById('player_score');
const computerScoreElement = document.getElementById('computer_score');

let lastTime;
function update(time){

    if(lastTime){
        const delta = time - lastTime;
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
        computerPaddle.update(delta, ball.y);

        if(isLose()) handleLose();
    }
    lastTime = time;
    window.requestAnimationFrame(update);
}

function handleLose(){
    const rect = ball.rect();

    if(rect.right >= window.innerWidth){
        playerScoreElement.innerText++;
    }

    if(rect.left <= 0){
        computerScoreElement.innerText++;
    }

    ball.reset();
    computerPaddle.reset();
}
function isLose(){
    const rect = ball.rect();
    return rect.right >= window.innerWidth || rect.left <= 0;
}

window.onmousemove = (e) => {
    playerPaddle.position = (e.y / window.innerHeight) * 100;
}


window.requestAnimationFrame(update);