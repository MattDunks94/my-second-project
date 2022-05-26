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
}

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
let questions = [
    {
        q: "Which famous brothers flew the first powered aircraft?"
    },
    {
        q: "What does 'DVD' stand for?"
    },
    {
        q: "Which planet is closest to the sun?"
    },
    {
        q: "What colour is a giraffe's tongue?"
    },
    {
        q: "How many sides does a Heptagon have?"
    },
    {
        q: "What year did the Titanic sink?"
    },
    {
        q: "Which country presented the Statue of Liberty to America as a gift?"
    }, 
    {
        q: "Which sport is the 'Haka' dance associated with?"
    },
    {
        q: "Which multinational corporation developed the PlayStation?"
    },
    {
        q: "What type of instrument are Fender famous for making?"
    }
]