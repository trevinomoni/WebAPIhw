var startBtn = document.querySelector("#start-btn");
var startSection = document.querySelector("#start");
var questionSection = document.querySelector("#questions");
var spanTimeleft = document.querySelector("#time-left");
var questionElement = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var answerButton = document.querySelector("#answer-buttons");
var feedBack = document.querySelector("#feedback");
var scoreSection = document.querySelector("#score");
var submitBtn = document.querySelector("#submit");
var intialInput = document.querySelector("#initials");


startBtn.addEventListener("click", startQuiz);
answerButton.addEventListener("click", compareAnswers);
submitBtn.addEventListener("click", submitScore);

var timeLeft = 40;
var myInterval;
var questionsIndex = 0;
var questions = [{
    q: "What is the HTML tag under which one can write the JavaScript code?",
    o1: "<javascript>",
    o2: "<scripted>",
    o3: "<script>",
    o4: "<js>",
    c: "<script>"
},
{
    q: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
    o1: "document.getElement(“geek”).innerHTML=”I am a Geek”;",
    o2: "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
    o3: "document.getId(“geek”)=”I am a Geek”;",
    o4: "document.getElementById(“geek”).innerHTML=I am a Geek;",
    c: "document.getElementById(“geek”).innerHTML=”I am a Geek”;"
},
{
    q: "What is the correct syntax for referring to an external script called “geek.js”?",
    o1: "<script src=”geek.js”>",
    o2: "<script href=”geek.js”>",
    o3: "<script ref=”geek.js”>",
    o4: "<script name=”geek.js”>",
    c: "<script src=”geek.js”>"
}
];


function startQuiz() {
    startSection.style.display = "none";
    questionSection.style.display = "block";
    myInterval = setInterval(startTime, 1000);
    assignQuestions();
}



function startTime() {
    spanTimeleft.textContent = timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
        clearInterval(myInterval);
    }
}

function assignQuestions() {
    question.textContent = questions[questionsIndex].q;
    option1.textContent = questions[questionsIndex].o1;
    option2.textContent = questions[questionsIndex].o2;
    option3.textContent = questions[questionsIndex].o3;
    option4.textContent = questions[questionsIndex].o4;
}

function compareAnswers() {
    var userAnswer = event.target.textContent;
    if (userAnswer === questions[questionsIndex].c) {
        feedBack.textContent = "Correct!";
        clearFeedback();
    } else {
        feedBack.textContent = "Incorrect!";
        clearFeedback();
        timeLeft -= 10;
        spanTimeleft.textContent = timeLeft;
    }
    questionsIndex++;
    if (questionsIndex < questions.length) {
        assignQuestions();
    } else {
        clearInterval(myInterval);
        questionSection.style.display = "none";
        scoreSection.style.display = "block";
    }


}

function clearFeedback() {
    setTimeout(function () {
        feedBack.textContent = "";
    }, 500);
}

function submitScore() {
    localStorage.setItem("scores", JSON.stringify({ "initial": intialInput.value, "score": timeLeft }));
}
