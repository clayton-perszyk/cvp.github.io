var choices = ['rock', 'paper', 'scissors'];
var humanChoice;
var compChoice;
var score = {wins: 0, loses: 0};
var images = document.querySelectorAll("img");
var scoreDisplay = document.getElementById("score");
var whoChoseWhat = document.createElement("p");
var wins = document.createElement("p");
var loses = document.createElement("p");
var body = document.querySelector("body");
var button = document.querySelector("button");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function(){
    humanChoice = this.getAttribute("id");
      compChoice = choices[Math.floor(Math.random() * choices.length)];
       if (compChoice === humanChoice) {
         score.loses += 0;
         score.wins += 0;
       } else if (compChoice === "rock" && humanChoice === "scissors") {
        score.loses += 1;
      } else if (compChoice === "paper" && humanChoice === "rock") {
        score.loses += 1;
      } else if (compChoice === "scissors" && humanChoice === "paper") {
        score.loses += 1;
      } else {
        score.wins += 1;
      }

      whoChoseWhat.innerHTML = "";
      whoChoseWhat.innerHTML = "You chose " + humanChoice + "//" + "Opponent chose " + compChoice;
      whoChoseWhat.setAttribute("id", "whoChoseWhat");
      body.appendChild(whoChoseWhat);
      scoreDisplay.innerHTML = "";
      wins.innerHTML = "Wins: " + score.wins;
      loses.innerHTML = "Loses: " + score.loses;
      scoreDisplay.appendChild(wins);
      scoreDisplay.appendChild(loses);

  });
}

button.addEventListener("click", function(e){
  e.preventDefault();
  scoreDisplay.innerHTML = "";
  score.wins = 0;
  score.loses = 0;
});

body.appendChild(button);





  console.log("You chose " + humanChoice + "\t//\t" + "Your opponent chose " + compChoice);
