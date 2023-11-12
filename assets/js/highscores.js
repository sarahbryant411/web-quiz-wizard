const scoresGrid = document.querySelector(".scores-grid")

const scoresFromStorage = JSON.parse(localStorage.getItem("quizScores"))

const label1 = document.createElement("h3")
label1.textContent = "Initials"
const label2 = document.createElement("h3")
label2.textContent = "Score"
scoresGrid.append(label1)
scoresGrid.append(label2)

for (let i = 0; i < scoresFromStorage.length; i++) {
    console.log(scoresFromStorage[i])
    const initialsEl = document.createElement("p")
    initialsEl.textContent = scoresFromStorage[i].initials

    const scoreEl = document.createElement("p")
    scoreEl.textContent = scoresFromStorage[i].time
    
    scoresGrid.append(initialsEl)
    scoresGrid.append(scoreEl)
}