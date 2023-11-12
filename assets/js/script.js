var startBtn = document.querySelector("#start-btn");
var quizStart = document.querySelector('.quiz-start');
var quizScreen = document.querySelector(".quiz-screen")

startBtn.addEventListener("click", startGame)

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
        prompt: "What is thhe newest Iphone?",
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
    //hide the quiz-start
    // show the quiz-screen
    //start the timer
}