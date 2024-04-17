function showSettings() {
    document.getElementById("start").style.display = "none"
    document.getElementById("theme").style.display = "flex"
}
function darkTheme() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    for (let i = 0; i < document.querySelectorAll("div#game > div").length; i++) {
        document.querySelectorAll("div#game > div")[i].style.borderColor="white"
    }
}
function lightTheme() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    for (let i = 0; i < document.querySelectorAll("div#game > div").length; i++) {
        document.querySelectorAll("div#game > div")[i].style.borderColor="black"
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
