const question = document.getElementById('question');
const questionImg = document.getElementById('image');
const answerSelectsA = document.getElementById('A');
const answerSelectsB = document.getElementById('B');
const answerSelectsC = document.getElementById('C');
const answerSelectsD = document.getElementById('D');

let questionsArray = [
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/ai.png",
        choiceA: "Anguilla",
        choiceB: "British Virgin Islands",
        choiceC: "Saint Kitts and Nevis",
        choiceD: "United Kingdom",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/gm.png",
        choiceA: "Guernsey",
        choiceB: "Finland",
        choiceC: "Åland Islands",
        choiceD: "Faroe Islands",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/as.png",
        choiceA: "Antarctica",
        choiceB: "American Samoa",
        choiceC: "Falkland Islands",
        choiceD: "United States Virgin Islands",
        answer: "B"
    },
    
];

currentAskQuestion = {};

function runGame() {
    const firstQuestion = questionsArray
    
    let btnChecks = document.querySelectorAll('.btn');
        btnChecks.forEach(function (event) {
            event.addEventListener('click', myClick);
        });

        function myClick (event) {
            if (event.click === 'click') {
                checkAnswer();
            };
            console.log('click', event.target)
        };
    
    renderQuestion(firstQuestion)
};

// to pick a question from the array
function renderQuestion() {
    console.log(questionsArray)
    const pickQ = Math.floor(Math.random()* questionsArray.length);
    currentAskQuestion = questionsArray[pickQ];
    console.log(questionsArray[pickQ]) // to see if the renderQuestion works
    perventQuestion(currentAskQuestion);

    // new part https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    questionsArray.splice(pickQ, 1);
};

// show the question
function perventQuestion() {
    question.innerText = currentAskQuestion.question;
    questionImg.innerHTML = "<img src="+ currentAskQuestion.imgSrc +">";
    answerSelectsA.innerText = currentAskQuestion.choiceA;
    answerSelectsB.innerText = currentAskQuestion.choiceB;
    answerSelectsC.innerText = currentAskQuestion.choiceC;
    answerSelectsD.innerText = currentAskQuestion.choiceD;
    };
    

// to check the Answer on click
function checkAnswer(answer) {
    
    if (answer == currentAskQuestion.answer) {
        console.log('yes')
    } else {
        console.log('no')
        wrongAnswer();
    }

    renderQuestion()
    
}





// runGame
runGame();


