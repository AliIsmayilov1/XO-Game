function showSettings() {
    document.getElementById("start").style.display = "none"
    document.getElementById("theme").style.display = "flex"
}
function darkTheme() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    for (let i = 0; i < document.querySelectorAll("div#game > div").length; i++) {
        document.querySelectorAll("div#game > div")[i].style.borderColor = "white"
    }
}
function lightTheme() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    for (let i = 0; i < document.querySelectorAll("div#game > div").length; i++) {
        document.querySelectorAll("div#game > div")[i].style.borderColor = "black"
    }
}
function backToMenu() {
    document.getElementById("start").style.display = "flex"
    document.getElementById("theme").style.display = "none"
    document.getElementById("game").style.display = "none"
    document.getElementById("back").style.display = "none"

}
function startGame() {
    document.getElementById("start").style.display = "none"
    document.getElementById("game").style.display = "grid"
    document.getElementById("back").style.display = "block"
}
let turn = "x"
function writeX(x) {
    for (let i = 0; i < document.querySelectorAll("div#game > div").length; i++) {
        if (turn == "x") {
            document.querySelectorAll("div#game > div")[x - 1].innerHTML = `<i class="fa-solid fa-xmark"></i>`
            turn = "o"
        }
        else {
            document.querySelectorAll("div#game > div")[x - 1].innerHTML = `<i class="fa-regular fa-circle"></i>`
            turn = "x"
        }
    }
}

function findWinner() {
    if ((document.querySelectorAll("div#game > div")[0].innerHTML == document.querySelectorAll("div#game > div")[1].innerHTML == document.querySelectorAll("div#game > div")[2].innerHTML) || (document.querySelectorAll("div#game > div")[0].innerHTML == document.querySelectorAll("div#game > div")[4].innerHTML == document.querySelectorAll("div#game > div")[8].innerHTML) || (document.querySelectorAll("div#game > div")[0].innerHTML == document.querySelectorAll("div#game > div")[3].innerHTML == document.querySelectorAll("div#game > div")[6].innerHTML)) {
        document.getElementById("game").innerHTML = `<h1>Winner is X player</h1>`
        console.log(x);
    }
}
findWinner()
console.log(document.querySelectorAll("div#game > div")[0]);
