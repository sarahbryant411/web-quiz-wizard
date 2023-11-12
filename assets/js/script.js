var startBtn = document.querySelector("#start-btn");
var quizStart = document.querySelector('.quiz-start');
var quizScreen = document.querySelector(".quiz-screen")
var endScreen = document.querySelector(".end-screen")
var optionButtons = document.querySelector("#option-buttons")
var promptEl = document.querySelector("#prompt")
var timeDisplay = document.querySelector("#time-display")

startBtn.addEventListener("click", startGame)

var currentQuestion = 0;
var timeRemaining = 60;
var timer;

var questions = [
    {
        prompt: "What color is the sky?",
        options: {
            a: "gray",
            b: "green",
            c: "chatreuse",
            d: "blue",
        },
        correct: "d"
    }, {
        prompt: "What season are we in?",
        options: {
            a: "winter",
            b: "spring",
            c: "fall",
            d: "summer",
        },
        correct: "c"
    }, {
        prompt: "What is the newest Iphone?",
        options: {
            a: "iphone 15",
            b: "iphone 13",
            c: "iphone 14",
            d: "iphone 11",
        },
        correct: "a"
    }
]

function startGame() {
    console.log("start the game!")

    quizStart.classList.add("hidden")
    quizScreen.classList.remove("hidden")
 
    timeDisplay.textContent = timeRemaining;

    // start the timer
    timer = setInterval(() => {
        timeRemaining--;

        if (timeRemaining <= 0) {
            timeDisplay.textContent = 0;
            endGame()
        } else timeDisplay.textContent = timeRemaining

    }, 1000)

    renderQuestion()

}

function renderQuestion() {
    promptEl.textContent = questions[currentQuestion].prompt

    var options = questions[currentQuestion].options

    optionButtons.innerHTML = ""

    for (letter in options) {
        var li = document.createElement("li")
        var button = document.createElement("button")
        button.textContent = options[letter]
        button.setAttribute("data-letter", letter)
        button.addEventListener("click", (e) => {

            // correct or incorrect ?
            console.log(e.target.dataset.letter === questions[currentQuestion].correct)

            currentQuestion++
            if (currentQuestion >= questions.length) {
                endGame()
            } else renderQuestion()
        })
        li.append(button)
        optionButtons.append(li)
    }

}

function endGame() {
    clearInterval(timer)
    //hide the quiz-screen
    quizScreen.classList.add("hidden")
    // show the end-screen
    endScreen.classList.remove("hidden")
}