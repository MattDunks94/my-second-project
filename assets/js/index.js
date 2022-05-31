let startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', function startGame() {
    gameLoop();
});

let loops = 0;
let peopleVisible = false;
let gameScore = 0;

function gameLoop() {
    createCharacters();
    peopleVisible = !peopleVisible;
    loops++
    if(loops < 12) {
        setTimeout(gameLoop, 3000);
    } else {
        alert("You scored " + gameScore);
    }
}

function createCharacters() {
    let board = document.getElementById('board');
    let classToSet = peopleVisible? "character visible" : "character hidden";
    for(let i = 0; i < 6; i++) {
        board.children[i].className = classToSet;
        board.children[i].innerHTML = "Guest";
        board.children[i].onclick = function() {
            gameScore += -2;
        };
    };

    let randomNumber = Math.floor(Math.random() * 6) + 1;
    board.children[randomNumber-1].innerHTML = "Thief"
    board.children[randomNumber-1].onclick = function() {
        gameScore++;
    };
}
