
const question = document.getElementById('question');
const questionImg = document.getElementById('image');
const answerSelectsA = document.getElementById('A');
const answerSelectsB = document.getElementById('B');
const answerSelectsC = document.getElementById('C');
const answerSelectsD = document.getElementById('D');
const btnContainer = document.getElementById('select-container');
const scoreNumber = document.getElementById('points');
const questionIndex = document.getElementById('question-num');
const timerCountdown = document.getElementById('counter');
const welcomePage = document.getElementById('landing-page-container');
const playGame = document.getElementById('play-game');
const game = document.getElementById('game');


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
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/ao.png",
        choiceA: "Kyrgyzstan",
        choiceB: "Libya",
        choiceC: "Sri Lanka",
        choiceD: "Angola",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/128x96/aq.png",
        choiceA: "Cape Verde",
        choiceB: "United States Virgin Islands",
        choiceC: "Antarctica",
        choiceD: "Kosovo",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/ag.png",
        choiceA: "Somalia",
        choiceB: "Antigua and Barbuda",
        choiceC: "Palau",
        choiceD: "Nepal",
        answer: "B"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/am.png",
        choiceA: "Armenia",
        choiceB: "Ethiopia",
        choiceC: "Colombia",
        choiceD: "Guinea",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/128x96/aw.png",
        choiceA: "Togo",
        choiceB: "Bhutan",
        choiceC: "Aruba",
        choiceD: "Guinea",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/bd.png",
        choiceA: "Palau",
        choiceB: "Taiwan",
        choiceC: "Marshall Islands",
        choiceD: "Bangladesh",
        answer: "D"
    },
    
];
 
currentAskQuestion = {};
const rightAnswerPoints = 10;
const TOTAL_QUESTION = 6;
let questionNumber = 0;
let timer = 10;

document.addEventListener("DOMContentLoaded", function () {
    playGame.addEventListener('click', function (e) {
        runGame();
        console.log(this.click)
    });
});

function runGame() {
   // document.addEventListener("DOMContentLoaded", function () {
        
        // display
        welcomePage.style.display = 'none';
        game.style.display = 'block';
        //document.getElementById('main-conatainer').style.backgroundColor = 'rgb(10, 59, 77)';
        
        // starting information
        score = 0;
        questionNumber = 1;
        let counter = 0;
         
        const firstQuestion = questionsArray
    
    let btnChecks = document.querySelectorAll('.btn');
        btnChecks.forEach(function (event) {
            event.addEventListener('click', myClick);
        });

        function myClick (event) {
            if (event.click === 'click') {
                checkAnswer();
            };
            //console.log('click', event.target)
        };
    
    renderQuestion()
    countDown()
    
//});
};

// to pick a question from the array
function renderQuestion() {
    console.log(questionsArray)
    const pickQ = Math.floor(Math.random()* questionsArray.length);
    currentAskQuestion = questionsArray[pickQ];
    console.log(questionsArray[pickQ]) // to see if the renderQuestion works
    perventQuestion(currentAskQuestion);

    
    

    

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    questionsArray.splice(pickQ, 1);
};

function nextQuesiton() {
    if (questionsArray.length === 0 || questionNumber > TOTAL_QUESTION) {
        //https://developer.mozilla.org/en-US/docs/Web/API/Location/assign
        return window.location.assign("/score.html");
    } 

    renderQuestion();
  
}

// show the question
function perventQuestion() {
    questionIndex.innerText = "Q"+ questionNumber
    question.innerText = currentAskQuestion.question;
    questionImg.innerHTML = "<img src="+ currentAskQuestion.imgSrc +">";
    answerSelectsA.innerText = currentAskQuestion.choiceA;
    answerSelectsB.innerText = currentAskQuestion.choiceB;
    answerSelectsC.innerText = currentAskQuestion.choiceC;
    answerSelectsD.innerText = currentAskQuestion.choiceD;
    //timerCountdown.innerText = timer +"s"
    };
    
function countDown() {
    setInterval (function () {
        
            if (timer <= 0 || timer < 1) {
                questionNumber++
                nextQuesiton(); // Maybe need to show answer first.
                clearInterval(timer = 10 + 1);  // + 1 help give a break 
            } 
            
                timer--;
                timerCountdown.innerText = timer +"s"
            }, 1000);
            
    
}





// to check the Answer on click
function checkAnswer(answer) {
    questionNumber++
       
    if (answer == currentAskQuestion.answer) {
        console.log('yes')
        showAnswer();
        score = score + rightAnswerPoints;
        console.log(score)
        
    } else {
        console.log('no')
        showAnswer();
    }
    
        

    
};


function showAnswer() {
        document.getElementById(currentAskQuestion.answer).style.backgroundColor = 'rgb(135, 193, 62)';
        reset();
};


function reset () {
        setTimeout(() => {
            document.getElementById(currentAskQuestion.answer).style.backgroundColor = 'rgb(243, 105, 0)';
            nextQuesiton();
        }, 1000);
        clearInterval(timer = 10 + 1);
};


    




// runGame
//runGame();


