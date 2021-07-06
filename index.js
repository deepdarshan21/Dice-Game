var player1, player2;
var maxCount, count = 0;
var player1Count = 0, player2Count = 0;
document.querySelector(".final").classList.toggle("final-display");


function popUpJS() {
    document.querySelector(".container").style.display = "block"
    document.querySelector("footer").style.display = "block";
    document.querySelector(".popup").style.display = "none";
    player1 = document.querySelector("#player1").value;
    player2 = document.querySelector("#player2").value;
    if (player1 === "")
        player1 = "Player 1";
    if (player2 === "")
        player2 = "Player 2";
    // console.log(player1, player2);
    document.querySelectorAll(".player-name")[0].innerText = player1;
    document.querySelectorAll(".player-name")[1].innerText = player2;
    maxCount = document.querySelector("#count").value;
    console.log(maxCount);
}

function game() {

    count++;

    var button = document.querySelector("button.btn");
    if (button.innerHTML === "Start")
        button.innerHTML = "Play Again";
    var dice1, dice2;
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    // console.log(dice1, dice2);
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

    // console.log(player1, player2);

    if (dice1 > dice2) {
        document.querySelector("h3").innerText = "🍷 " + player1 + " Wins";
        player1Count++;
    }
    else if (dice1 < dice2) {
        document.querySelector("h3").innerText = player2 + " Wins🍷";
        player2Count++;
    }
    else
        document.querySelector("h3").innerText = "Match Draws";

    // console.log(count, maxCount);


    if (count == maxCount) {

        // alert("Game Over");
        setTimeout(function () {

            document.querySelector(".final").classList.toggle("final-display");
            document.querySelector(".container").style.display = "none"
            document.querySelector("footer").style.display = "none";
            document.querySelector(".popup").style.display = "none";
            if (player1Count > player2Count)
                document.querySelector("h4").innerText = player1.toUpperCase() + " WINS🎐🎐 BY " + player1Count + ":" + player2Count;
            else if (player1Count < player2Count)
                document.querySelector("h4").innerText = player2.toUpperCase() + " WINS🎐🎐 BY " + player1Count + ":" + player2Count;
            else
                document.querySelector("h4").innerText = "DRAW BY " + player1Count + ":" + player2Count;
        }, 1000);
    }
}
