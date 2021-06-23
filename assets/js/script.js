const game = document.getElementById('game'); // USE IN NUMBER FOR FUNCTIONS - runGame() & nextQuestions().
const model = document.getElementById('modal-hub');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const TOTAL_QUESTION = 10;  // VARIABLES TO SET THE NUMBER OF ASK QUESTION IN THE QUIZ
const overlay = document.getElementById('overlay'); // END MODAL HIGH SCORE

// THE QUESTION THE COMPUTER CAN PICK FROM
let QUESTION_ARRAY = [
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
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/gb-wls.png",
        choiceA: "Sri Lanka",
        choiceB: "Guam",
        choiceC: "South Georgia",
        choiceD: "Wales",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/va.png",
        choiceA: "United States Virgin Islands",
        choiceB: "Vatican City",
        choiceC: "Saint Barthelemy",
        choiceD: "Palua",
        answer: "B"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/us.png",
        choiceA: "Canada",
        choiceB: "USA",
        choiceC: "Mexico",
        choiceD: "Puerto Rico",
        answer: "B"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/tr.png",
        choiceA: "Turkey",
        choiceB: "Tunisia",
        choiceC: "Syria",
        choiceD: "Armenia",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/fr.png",
        choiceA: "Russia",
        choiceB: "Netherlands",
        choiceC: "Luxembourg",
        choiceD: "France",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/mf.png",
        choiceA: "Netherlands",
        choiceB: "Russia",
        choiceC: "Saint Martin",
        choiceD: "Luxembourg",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/de.png",
        choiceA: "Romaina",
        choiceB: "Belgium",
        choiceC: "Cote d'Ivoire",
        choiceD: "Germany",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/bg.png",
        choiceA: "Bulgaria",
        choiceB: "Italy",
        choiceC: "Ghana",
        choiceD: "Hungary",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/cz.png",
        choiceA: "Slovenia",
        choiceB: "Poland",
        choiceC: "Slovakia",
        choiceD: "Czech Republic",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/jp.png",
        choiceA: "Japan",
        choiceB: "Taiwan",
        choiceC: "South Korea",
        choiceD: "El Salvador",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/ae.png",
        choiceA: "Palestine",
        choiceB: "Sudan",
        choiceC: "United Arab Emirates",
        choiceD: "Western Sahara",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/cm.png",
        choiceA: "Cameroon",
        choiceB: "Benin",
        choiceC: "Republic of the Congo",
        choiceD: "Bolivia",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/gr.png",
        choiceA: "Honduras",
        choiceB: "Greece",
        choiceC: "Israel",
        choiceD: "Nicaragua",
        answer: "B"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/np.png",
        choiceA: "Saint Lucia",
        choiceB: "Palau",
        choiceC: "Nepal",
        choiceD: "Peru",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/ye.png",
        choiceA: "Oman",
        choiceB: "Syria",
        choiceC: "Yemen",
        choiceD: "Saudi Arabia",
        answer: "C"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/th.png",
        choiceA: "Malaysia",
        choiceB: "Laos",
        choiceC: "Cambodia",
        choiceD: "Thailand",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/tt.png",
        choiceA: "Isle of Man",
        choiceB: "Trinidad and Tobago",
        choiceC: "Republic of Congo",
        choiceD: "Cameroon",
        answer: "B"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/se.png",
        choiceA: "Finland",
        choiceB: "Norway",
        choiceC: "Switzerland",
        choiceD: "Sweden",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/pt.png",
        choiceA: "Mauritania",
        choiceB: "Spain",
        choiceC: "Jamaica",
        choiceD: "Portugal",
        answer: "D"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/jm.png",
        choiceA: "Jamaica",
        choiceB: "Cayman Islands",
        choiceC: "Dominican Republic",
        choiceD: "Saint Kitts and Nevis",
        answer: "A"
    },
    {
        question: "Whose flag is it?",
        imgSrc: "https://flagcdn.com/w160/mc.png",
        choiceA: "Malta",
        choiceB: "Monaco",
        choiceC: "Poland",
        choiceD: "Morocco",
        answer: "B"
    },


];

// TO HOLD THE CURRENT QUESTION BEING ASK
let currentAskQuestion = {};
let questionNumber = 0;
let timer = 60; //SETTING FOR THE TIME GIVEN ON COUNTDOWN TIMER
let clock; // VARIABLE FOR THE COUNTDOWN TIMER TO CLEAR INTERVAL

document.addEventListener("DOMContentLoaded", function () {

    // RUN GAME SECTION ONCE CLICK
    document.getElementById('play-game').addEventListener('click', function (e) {
        runGame();
        home();
    });

    // SHOW INSTRUCTIONS PANEL
    document.getElementById('instructions').addEventListener('click', function (e) {
        model.style.display = 'block';
    });
});

// CLOSE INSTRUCTION PANEL
closeModalButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        model.style.display = 'none';
    });
});

function runGame() {
    //DISPLAY PANEL
    document.getElementById('landing-page-container').style.display = 'none';
    game.style.display = 'block';


    // STARTING  INFORMATION
    score = 0;
    questionNumber = 1;

    let btnChecks = document.querySelectorAll('.btn');
    btnChecks.forEach(function (event) {
        event.addEventListener('click', myClick);
    });

    function myClick(event) {
        if (event.click === 'click') {
            checkAnswer();
        }
    }
    countDown();
    renderQuestion();
}

function home() {
    document.getElementById('btn-home').onclick = function () {
        window.location.href = "./index.html";
    };
}

// TO PICK A QUESTION FROM THE ARRAY
function renderQuestion() {
    const pickQ = Math.floor(Math.random() * QUESTION_ARRAY.length); // RANDOM THE PICK
    currentAskQuestion = QUESTION_ARRAY[pickQ]; // PICK QUESTION
    presentQuestion(currentAskQuestion);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    QUESTION_ARRAY.splice(pickQ, 1); // TO REMOVE THE PERVENT QUESTION FROM THE ARRAY
}

// TO RUN AFTER THE FIRST QUESTION HAS BEEN ASK AND ANSWER
function nextQuesiton() {
    const finalScore = document.getElementById('final-score');

    if (questionNumber > TOTAL_QUESTION || timer <= 0) { // TO CHANGE THE QUIZ PAGE TO SCORE PAGE
        game.style.display = 'none';
        finalScore.style.display = 'block';
        // https://www.w3schools.com/jsref/prop_win_localstorage.asp
        localStorage.setItem("Score", score);
        displayScore();
        returnToStartPage(); // RELOAD THE INDEX.HTML AGAIN, GOES TO HOME PAGE
        clearInterval(clock);
    } else {
        renderQuestion();
    }
}

// TIMER
function countDown() {
    clock = setInterval(function () {
        if (timer <= 0) {
            questionNumber++;
            nextQuesiton();
            clearInterval(clock);
        }
        timer--;
        document.getElementById('counter').innerText = timer + "s"; // SHOW THE TIMER ON PAGE
    }, 1000);

}

// SHOW THE  QUESTION, ANSWERS, IMAGE AND WHICH QUESTION NUMBER YOU ARE ON
function presentQuestion() {

    const question = document.getElementById('question');
    document.getElementById('question-num').innerText = "Q" + questionNumber;
    question.innerText = currentAskQuestion.question;
    document.getElementById('image').innerHTML = "<img src=" + currentAskQuestion.imgSrc + ">";
    document.getElementById('A').innerText = currentAskQuestion.choiceA;
    document.getElementById('B').innerText = currentAskQuestion.choiceB;
    document.getElementById('C').innerText = currentAskQuestion.choiceC;
    document.getElementById('D').innerText = currentAskQuestion.choiceD;
}

// TO CHECK THE ANSWER ON CLICK
function checkAnswer(answer) {
    const rightAnswerPoints = 10; // POINTS FOR RIGHT ANSWER
    const wrongAnswerPoints = 5;  // POINTS REMOVE FOR WRONG ANSWER
    questionNumber++;

    if (answer == currentAskQuestion.answer) {
        showAnswer();
        score = score + rightAnswerPoints;
    } else {
        alert('This is the wrong answer'); // TELL THE PLAYER THE ANSWER IS WRONG
        showAnswer();
        score = score - wrongAnswerPoints;
    }
}

// TO SHOW THE PLAYER THE RIGHT ANSWER
function showAnswer() {
    document.getElementById(currentAskQuestion.answer).style.backgroundColor = 'rgb(135, 193, 62)';
    reset(); // CHANGE COLOUR BACK TO THE ORIGINAL COLOUR
}

// TO RESET THE CHANGE FOR COLOUR BACK TO THE ORIGINAL COLOUR HELP JAMESQQUICK
function reset() {
    setTimeout(() => {
        document.getElementById(currentAskQuestion.answer).style.backgroundColor = 'rgb(243, 105, 0)';
        nextQuesiton();
    }, 1000);
}

// STORAGE THE PLAYER SCORE
const playerScore = localStorage.getItem("Score");
// https://stackoverflow.com/questions/35273539/json-parse-from-localstorage-issue
let highScore = JSON.parse(localStorage.getItem('highScore')) || [];

function displayScore() {
    document.getElementById("points").innerHTML = score;
    document.getElementById("score").innerHTML = "This is your overall score " + score + " points";
    loggingScore();

    const HighestScoreBtn = document.getElementById('Highest-score');
    const modelScoreCard = document.getElementById('model-score');

    // LISTENER FOR CLICK ON HIGHEST SCORE TABLE BUTTON AND OPEN TABLE
    HighestScoreBtn.addEventListener('click', function (e) {
        modelScoreCard.style.display = 'block';
        overlay.classList.add('active');

        const fiveBestScores = document.getElementById('Highest-score-list');
        fiveBestScores.innerHTML = highScore.map(function (yourstore) {
            let topScore = `<li>${yourstore.name} - ${yourstore.score}</li>`;
            return topScore;
        }).join('');
    });

    // TO CLOSE HIGH SCORE TABLE
    closeModalButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            modelScoreCard.style.display = 'none';
            overlay.classList.remove('active');
        });
    });

    // TO CLOSE THE MODAL BY CLICK THE OVERLAY 
    overlay.addEventListener('click', function () {
        modelScoreCard.style.display = 'none';
        overlay.classList.remove('active');
    });
}

function loggingScore() {
    const formCard = document.getElementById('form-player-score');
    formCard.addEventListener('submit', function (e) {
        e.preventDefault(); // PREVENT PAGE RELOADING ONCE PLAYER HIT SAVE SCORE
    });

    const playerName = document.getElementById('player-name');
    playerName.addEventListener('keydown', function (event) {
        if (playerName.value === "Enter") {
            return playerName.value;
        }
    });

    const saveScore = document.getElementById('save-score');
    saveScore.addEventListener('click', function (e) {
        if (playerName.value && saveScore.click) {
            alert('Your score has been save!');
            let yourstore = {
                score: score,
                name: playerName.value
            };
            highScore.push(yourstore);
        }
        // TO SORT SCORE BY BIGGEST TO LOWEREST
        highScore.sort(function (a, b) {
            return b.score - a.score;
        });
        // SPLICE THE LOWER SCORE OFF THE LIST IF MORE THAN FIVE SAVE SCORE
        highScore.splice(5);
        // TO SAVE THE YOURSTORE ARRAY ONCE YOU RESET THE GAME
        localStorage.setItem('highScore', JSON.stringify(highScore));
    });
}

// GOES BACK TO HOME PAGE
function returnToStartPage() {
    const restartBtn = document.getElementById('restart');
    restartBtn.addEventListener('click', function (e) {
        score = 0;
        window.location.href = "./index.html";
    });
}

// END OF SCRIPT

/* Line 66-67, 71, 78, 82, 149-151, 166-170, 191, 201-218
are being taken from Jamesquick see link in README.md */