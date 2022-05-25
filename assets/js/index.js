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
    showQuestion();
}

function showQuestion() {
    document.getElementById('questions');
}

function selectAnswer() {


}

function nextQuestion() {


}

let questions = [
    {
        question: 'Which famous brothers flew the first powered aircraft?',
        answers: {
        a: 'The Left Brothers', 
        b: 'The Hemsworth Brothers', 
        c: 'The Wright Brothers', 
        d: 'The Jonas Brothers'}, 
        correctAnswer: 'c',
    }
]