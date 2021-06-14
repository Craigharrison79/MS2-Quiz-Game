const game = document.getElementById('game'); // USE IN NUMBER FOR FUNCTIONS - runGame() & nextQuestions().
const model = document.getElementById('modal-hub');
const closeModalButtons = document.querySelectorAll('[data-close-button]')

currentAskQuestion = {};
let questionNumber = 0;
let timer = 10;


document.addEventListener("DOMContentLoaded", function () {

    // Run Game section once click
    document.getElementById('play-game').addEventListener('click', function (e) {
        runGame();
        console.log(this.click)

    });//END

    // Show instructions
    document.getElementById('instructions').addEventListener('click', function (e) {
        model.style.display = 'block';
    });
}); //END

closeModalButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        model.style.display = 'none';
    });
}); //END

function runGame() {
    // display
    document.getElementById('landing-page-container').style.display = 'none';
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

    function myClick(event) {
        if (event.click === 'click') {
            checkAnswer();
        };
        //console.log('click', event.target)
    };

    countDown()
    renderQuestion()
};

// TO PICK A QUESTION FROM THE ARRAY
function renderQuestion() {

    console.log(questionsArray)
    const pickQ = Math.floor(Math.random() * questionsArray.length); // RANDOM THE PICK
    currentAskQuestion = questionsArray[pickQ]; // pick question
    perventQuestion(currentAskQuestion);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    questionsArray.splice(pickQ, 1); // TO REMOVE THE PERVENT QUESTION FROM THE ARRAY
};


function nextQuesiton() {
    const finalScore = document.getElementById('final-score');
    const TOTAL_QUESTION = 5;

    if (questionNumber > TOTAL_QUESTION) { // TO CHANGE THE QUIZ PAGE TO SCORE PAGE
        game.style.display = 'none';
        finalScore.style.display = 'block';
        // https://www.w3schools.com/jsref/prop_win_localstorage.asp
        localStorage.setItem("Score", score);
        displayScore();
        returnToStartPage(); // RELOAD THE INDEX.HTML AGAIN, GOES TO HOME PAGE
    } else {
        clearInterval(timer = 10 + 1);
        renderQuestion();
    }
};



function countDown() {
    setInterval(function () {
        if (timer <= 0 || timer < 1) {
            questionNumber++
        }
        timer--;
        document.getElementById('counter').innerText = timer + "s" // SHOW THE TIMER ON PAGE
    }, 1000);
};  //END */

// SHOW THE  QUESTION, ANSWERS, IMAGE AND WHICH QUESTION NUMBER YOU ARE ON
function perventQuestion() {

    const question = document.getElementById('question');
    document.getElementById('question-num').innerText = "Q" + questionNumber
    question.innerText = currentAskQuestion.question;
    document.getElementById('image').innerHTML = "<img src=" + currentAskQuestion.imgSrc + ">";
    document.getElementById('A').innerText = currentAskQuestion.choiceA;
    document.getElementById('B').innerText = currentAskQuestion.choiceB;
    document.getElementById('C').innerText = currentAskQuestion.choiceC;
    document.getElementById('D').innerText = currentAskQuestion.choiceD;
};

// TO CHECK THE ANSWER ON CLICK
function checkAnswer(answer) {
    const rightAnswerPoints = 10;
    const wrongAnswerPoints = 5;
    questionNumber++

    if (answer == currentAskQuestion.answer) {
        console.log('yes')
        showAnswer();
        score = score + rightAnswerPoints;
    } else {
        console.log('no')
        showAnswer();
        score = score - wrongAnswerPoints;
    }
}; //END

// TO SHOW THE PLAYER THE RIGHT ANSWER
function showAnswer() {
    document.getElementById(currentAskQuestion.answer).style.backgroundColor = 'rgb(135, 193, 62)';
    reset(); //  change color back to original color  
}; //END

// TO RESET THE CHANGE FOR COLOUR BACK TO THE ORIGINAL COLOUR HELP JAMESQQUICK
function reset() {
    setTimeout(() => {
        document.getElementById(currentAskQuestion.answer).style.backgroundColor = 'rgb(243, 105, 0)';
        nextQuesiton();
    }, 1000);
}; //END

const playerScore = localStorage.getItem("Score");
// https://stackoverflow.com/questions/35273539/json-parse-from-localstorage-issue
let highScore = JSON.parse(localStorage.getItem('highScores')) || [];

function displayScore() {
    console.log(playerScore);
    document.getElementById("points").innerHTML = score
    document.getElementById("score").innerHTML = "This is your overall score " + score + " points";
    loggingScore()
    

    const HighestScoreBtn = document.getElementById('Highest-score');
    const modelScoreCard = document.getElementById('model-score');

    // listener for click on Highest Score table button and open table
    HighestScoreBtn.addEventListener('click', function (e) {
        modelScoreCard.style.display = 'block';

        const fiveBestScores = document.getElementById('Highest-score-list');
        fiveBestScores.innerHTML = highScore.map(function (yourstore) {
            let topScore = `<li>${yourstore.name} - ${yourstore.score}</li>`;
            return topScore;
        }).join('');
    });

    // To close high score table
    closeModalButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            modelScoreCard.style.display = 'none';
        });
    });
}

function loggingScore() {
    const hiscoreMaxNum = 3;
    const formCard = document.getElementById('form-player-score');
    formCard.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    const playerName = document.getElementById('player-name')
    playerName.addEventListener('keydown', function (event) {
        if (playerName.value === "Enter") {
            return playerName.value
        }
    });

    const saveScore = document.getElementById('save-score')
    saveScore.addEventListener('click', function (e) {
        if (playerName.value && saveScore.click) {
            console.log('save detail')
            let yourstore = {
                score: score,
                name: playerName.value
            }
            console.log(yourstore)
            highScore.push(yourstore);
        }   
        // TO SORT SCORE BY BIGGEST TO LOWEREST
        highScore.sort(function (a, b) {
            return b.score - a.score;
        });
        // SPLICE THE LOWER SCORE OFF THE LIST IF MORE THAN FIVE SAVE SCORE
        highScore.splice(3)
        // TO SAVE THE YOURSTORE ARRAY ONCE YOU RESET THE GAME
        localStorage.setItem('highScores', JSON.stringify(highScores));
        console.log(highScore)     
    });
};  

//const scoreList = JSON.parse(localStorage.getItem("score")) || [];
console.log(highScore)
// GOES BACK TO HOME PAGE
function returnToStartPage() {
    const restartBtn = document.getElementById('restart')
    restartBtn.addEventListener('click', function (e) {
        score = 0;
        const finalScore = document.getElementById('final-score');
        finalScore.style.display = 'none';
        document.getElementById('landing-page-container').style.display = 'flex';
    });

};//END

returnToStartPage(); 


/* SCORE CARD CODE FOR HIGHSCORE AND SAVING SCORE

function yourScore() {
    // https://www.w3schools.com/jsref/prop_win_localstorage.asp
    localStorage.setItem("yourScore", score);

    // show the score and pervent it on screen
    document.getElementById("points").innerHTML = localStorage.getItem("yourScore");
    document.getElementById("score").innerHTML = "This is your overall score " + score + " points";

    const HighestScoreBtn = document.getElementById('Highest-score');
    const modelScoreCard = document.getElementById('model-score');

    // listener for click on Highest Score table button and open table
    HighestScoreBtn.addEventListener('click', function (e) {
        modelScoreCard.style.display = 'block';

    });

    // To close high score table
    closeModalButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            modelScoreCard.style.display = 'none';

        });
    });

    // https://stackoverflow.com/questions/35273539/json-parse-from-localstorage-issue
    const highestScore = JSON.parse(localStorage.getItem('score')) || [];

    // stop the form senting
    const formCard = document.getElementById('form-player-score');
    formCard.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    // Player enter name 
    const playerName = document.getElementById('player-name')
    playerName.addEventListener('keydown', function (event) {
        if (playerName.value === "Enter") {
            return playerName.value
        }
    });

    // player saving score
    const saveScore = document.getElementById('save-score')
    saveScore.addEventListener('click', function (e) {

        let yourstore = {
            score: score,
            name: playerName.value
        };

        if (playerName.value && saveScore.click) {
            highestScore.push(yourstore);
        }

        scoreRankings()
        topScoreList()
        console.log(highestScore)
        // highestScore.splice(5)       
    });

    // https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort2
    function scoreRankings(yourstore) {
        highestScore.sort(function (a, b) {
            return b.score - a.score;
        });
        // Save just the 5 top scores
        highestScore.splice(5)
        // TO SAVE THE YOURSTORE ARRAY ONCE YOU RESET THE GAME
        localStorage.setItem('score', JSON.stringify(highestScore));
    };
    //topScoreList()
};// END


// TO GET THE SAVE LIST FROM THE GAMES BEFORE
//https://www.youtube.com/watch?v=jfOv18lCMmw&t=363s
const scoreList = JSON.parse(localStorage.getItem("score")) || [];

// ENTER THE TOPSCORE INTO THE TABLE AND SHOW IT
function topScoreList() {
    const HiScoreList = document.getElementById('Highest-score-list');
    HiScoreList.innerHTML = scoreList.map(function (yourstore) {
        let topScore = `<li>${yourstore.name} - ${yourstore.score}</li>`;
        return topScore;
    }).join('');
}; //END 

topScoreList()

// GOES BACK TO HOME PAGE
function returnToStartPage() {
    const restartBtn = document.getElementById('restart')
    restartBtn.addEventListener('click', function (e) {
        score = 0;
        return window.location.assign("/index.html");
    });
};/END */


// THE QUESTION THE COMPUTER CAN PICK FROM
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
        imgSrc: "https://flagcdn.com/w160/ax.png",
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
        imgSrc: "https://flagcdn.com/w160/aq.png",
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
        imgSrc: "https://flagcdn.com/w160/co.png",
        choiceA: "Armenia",
        choiceB: "Ethiopia",
        choiceC: "Colombia",
        choiceD: "Guinea",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/aw.png",
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
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/al.png",
        choiceA: "Albania",
        choiceB: "Kosovo",
        choiceC: "North Macedonia",
        choiceD: "Greece",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/ar.png",
        choiceA: "Argentina",
        choiceB: "Uruguay",
        choiceC: "Bolivia",
        choiceD: "Paraguay",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/bh.png",
        choiceA: "Turkey",
        choiceB: "Belarus",
        choiceC: "Bahrain",
        choiceD: "Eqypt",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/be.png",
        choiceA: "Uganda",
        choiceB: "Belgium",
        choiceC: "Netherlands",
        choiceD: "Germany",
        answer: "B"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/af.png",
        choiceA: "Iran",
        choiceB: "Tajikistan",
        choiceC: "Pakistan",
        choiceD: "Afghanistan",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/dz.png",
        choiceA: "Algeria",
        choiceB: "Mauritania",
        choiceC: "Libya",
        choiceD: "Morocco",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/ad.png",
        choiceA: "Spain",
        choiceB: "Senegal",
        choiceC: "Tuvalu",
        choiceD: "Andorra",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/am.png",
        choiceA: "Mayotte",
        choiceB: "Armenia",
        choiceC: "Georiga",
        choiceD: "Azerbaijan",
        answer: "B"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/au.png",
        choiceA: "Australia",
        choiceB: "Papua New Guinea",
        choiceC: "New Zealand",
        choiceD: "Faroe Islands",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/at.png",
        choiceA: "Switzerland",
        choiceB: "Canada",
        choiceC: "Austria",
        choiceD: "Denmark",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/br.png",
        choiceA: "Guyana",
        choiceB: "Portugal",
        choiceC: "Venezuela",
        choiceD: "Brazil",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/az.png",
        choiceA: "Russia",
        choiceB: "Azerbaijan",
        choiceC: "Armenia",
        choiceD: "Iran",
        answer: "B"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/bs.png",
        choiceA: "Bahamas",
        choiceB: "Cuba",
        choiceC: "Montenegro",
        choiceD: "Barbados",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/bb.png",
        choiceA: "Bahamas",
        choiceB: "Barbados",
        choiceC: "Venezuela",
        choiceD: "Costa Rica",
        answer: "B"
    }, {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/by.png",
        choiceA: "Guinea",
        choiceB: "Lithuania",
        choiceC: "Ukraine",
        choiceD: "Belarus",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/ca.png",
        choiceA: "United States",
        choiceB: "Canada",
        choiceC: "Gambia",
        choiceD: "Cook Islands",
        answer: "B"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/cl.png",
        choiceA: "Cameroon",
        choiceB: "Peru",
        choiceC: "Chile",
        choiceD: "Bolivia",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/cn.png",
        choiceA: "Vietnam",
        choiceB: "Hong Kong",
        choiceC: "China",
        choiceD: "North Korea",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/hr.png",
        choiceA: "Croatia",
        choiceB: "Uzbekistan",
        choiceC: "Serbia",
        choiceD: "Hungary",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/dk.png",
        choiceA: "Germany",
        choiceB: "Danmark",
        choiceC: "Finland",
        choiceD: "Norway",
        answer: "B"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/gb-eng.png",
        choiceA: "England",
        choiceB: "Gibraltar",
        choiceC: "Great Britain",
        choiceD: "Ireland",
        answer: "A"
    },
];

// END OF SCRIPT

/* Line 64, 65, 69, 76 137-141, 174, 194-197,
224, 227-232, 242 are being taken from Jamesquick see link in README.md */