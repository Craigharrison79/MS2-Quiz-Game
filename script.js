const question = document.getElementById('question');
const questionImg = document.getElementById('image');
const answerSelectsA = document.getElementById('A');
const answerSelectsB = document.getElementById('B');
const answerSelectsC = document.getElementById('C');
const answerSelectsD = document.getElementById('D');

const questionsArray = [
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

function renderQuestion() {
const pickQ = Math.floor(Math.random()* questionsArray.length);
currentAskQuestion = questionsArray[pickQ];
console.log(questionsArray[pickQ]) // to see if the renderQuestion works
};

renderQuestion();

function perventQuestion() {
    question.innerText = currentAskQuestion.question;
    questionImg.innerHTML = "<img src="+ currentAskQuestion.imgSrc +">";
    answerSelectsA.innerText = currentAskQuestion.choiceA;
    answerSelectsB.innerText = currentAskQuestion.choiceB;
    answerSelectsC.innerText = currentAskQuestion.choiceC;
    answerSelectsD.innerText = currentAskQuestion.choiceD;
    

};

perventQuestion();

