var choices = ['rock', 'paper', 'scissors'];
var humanChoice;
var compChoice;
var score = {wins: 0, loses: 0};
var scoreDisplay = document.getElementById("score");
var whoChoseWhat = document.createElement("p");
var wins = document.createElement("p");
var loses = document.createElement("p");
var body = document.querySelector("body");
var button = document.querySelector("button");
var images = document.querySelector(".images");

images.addEventListener("click", function(event){
  humanChoice = event.target.id;
    compChoice = choices[Math.floor(Math.random() * choices.length)];
     if (compChoice === humanChoice) {
      // do nothing
     } else if (compChoice === "rock" && humanChoice === "scissors") {
       score.loses += 1;
     } else if (compChoice === "paper" && humanChoice === "rock") {
       score.loses += 1;
     } else if (compChoice === "scissors" && humanChoice === "paper") {
       score.loses += 1;
     } else {
       score.wins += 1;
     }

    whoChoseWhat.innerHTML = "You chose " + humanChoice + "//" + "Opponent chose " + compChoice;
    whoChoseWhat.setAttribute("id", "whoChoseWhat");
    body.appendChild(whoChoseWhat);
    wins.innerHTML = "Wins: " + score.wins;
    loses.innerHTML = "Loses: " + score.loses;
    scoreDisplay.appendChild(wins);
    scoreDisplay.appendChild(loses);
});


button.addEventListener("click", function(){
  scoreDisplay.innerHTML = "";
  score.wins = 0;
  score.loses = 0;
});

body.appendChild(button);
