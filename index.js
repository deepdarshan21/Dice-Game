function game() {
    var button = document.querySelector("button.btn");
    if (button.innerHTML === "Start")
        button.innerHTML = "Play Again";
    var dice1, dice2;
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1, dice2);
    if (dice1 === 1)
        document.querySelector("#dice1").setAttribute("src", "images/dice1.png");
    if (dice2 === 1)
        document.querySelector("#dice2").setAttribute("src", "images/dice1.png");
    if (dice1 === 2)
        document.querySelector("#dice1").setAttribute("src", "images/dice2.png");
    if (dice2 === 2)
        document.querySelector("#dice2").setAttribute("src", "images/dice2.png");
    if (dice1 === 3)
        document.querySelector("#dice1").setAttribute("src", "images/dice3.png");
    if (dice2 === 3)
        document.querySelector("#dice2").setAttribute("src", "images/dice3.png");
    if (dice1 === 4)
        document.querySelector("#dice1").setAttribute("src", "images/dice4.png");
    if (dice2 === 4)
        document.querySelector("#dice2").setAttribute("src", "images/dice4.png");
    if (dice1 === 5)
        document.querySelector("#dice1").setAttribute("src", "images/dice5.png");
    if (dice2 === 5)
        document.querySelector("#dice2").setAttribute("src", "images/dice5.png");
    if (dice1 === 6)
        document.querySelector("#dice1").setAttribute("src", "images/dice6.png");
    if (dice2 === 6)
        document.querySelector("#dice2").setAttribute("src", "images/dice6.png");

    if (dice1 > dice2)
        document.querySelector("h3").innerText = "🍷Player 1 Wins";
    else if (dice1 < dice2)
        document.querySelector("h3").innerText = "Player 2 Wins🍷";
    else
        document.querySelector("h3").innerText = "Match Draws";
}