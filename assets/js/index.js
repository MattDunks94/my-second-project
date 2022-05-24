// Getting start button and quiz area elements.
let startButton = document.getElementById('start-btn');
let quizArea = document.getElementById('quiz-area');

// Adding event listener to start button to execute startGame function.
startButton.addEventListener('click', startGame);

/**
 * Adding class 'hide' to start button, so when 
 * start button is clicked it will disappear. 
 * Removing class 'hide' from quizArea element, so when 
 * start button is clicked quizArea element appears.
 */ 
function startGame() {
    startButton.classList.add('hide');
    quizArea.classList.remove('hide');
}

function selectAnswer() {


}

function nextQuestion() {


}