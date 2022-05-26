// Wait for the DOM to finish loading before running game.
// Get button elements and add event listeners to them. 

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button'); 

    for(let button of buttons) {
        button.addEventListener('click', function() {
            if(this.getAttribute("data-type") === 'submit') {
                alert("You clicked Submit!");
            } else {
                let otherButton = this.getAttribute("data-type");
                alert(`You clicked ${otherButton}`);
            }
        })
    }
})

let startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', runQuiz);

let quizArea = document.getElementById('quiz-area');


function runQuiz() {
    startButton.classList.add('hide');
    quizArea.classList.remove('hide');


};

function checkAnswer() {

};

function incrementScore() {

};

function incrementWrongAnswers() {

};

function displayQuestions() {
    let question = document.getElementById('question');

};

function displayAnswers() {

};

// An array of questions(objects)
let 