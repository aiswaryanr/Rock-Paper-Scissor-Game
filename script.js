let userScore = 0;
let compScore = 0;

const btn =  document.querySelectorAll(".choice");

const msg = document.getElementById("msg");

const uscore = document.getElementById("user-score");
const cscore = document.getElementById("computer-score");

function compChoice () {
    const arr = ['rock', 'paper', 'scissor'];
    const idx = Math.floor(Math.random()*3);
    return arr[idx];
}

function check (userSelect, compSelect) {
    let userWin = true;
    if (userSelect === 'paper') {
        userWin = compSelect === 'rock' ? true : false;
    } else if (userSelect === 'rock') {
        userWin = compSelect ===  'scissor' ? true : false;
    } else {
        userWin = compSelect === 'paper' ? true : false;
    }
    return userWin;
}

function game(userSelect, compSelect){
    if (userSelect === compSelect) {
        console.log("Draw. Play Again!");
        msg.innerText = "Draw. Play Again!";
    } else {
        if (check(userSelect, compSelect)) {
            console.log(`You Won. Your ${userSelect} beats ${compSelect}`);
            userScore++;
            uscore.innerText = userScore;
            msg.innerText = `You Won. Your ${userSelect} beats ${compSelect}`;
        } else{
            console.log(`Computer Won. Your ${userSelect} lost to ${compSelect}`);
            compScore++;
            cscore.innerText = compScore;
            msg.innerText = `Computer Won. Your ${userSelect} lost to ${compSelect}`;
        }
    }
}

for(let b = 0; b<btn.length; b++) {
    btn[b].addEventListener('click', () => {
        console.log('button clicked!');
        const userSelect = btn[b].getAttribute('id');
        const compSelect = compChoice();
        console.log(userSelect);
        console.log("computer selected");
        console.log(compSelect);
        game(userSelect, compSelect);
    });
}
