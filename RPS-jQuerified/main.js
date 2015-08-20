$(document).ready(function(){
  var choices = ['rock', 'paper', 'scissors'];
  var humanChoice;
  var compChoice;
  var score = {wins: 0, loses: 0};
  var scoreDisplay = $("#score");
  var whoChoseWhat = $("#whoChoseWhat");
  var wins = $("#wins");
  var loses = $("#loses");
  var body = $("body");
  var button = $("button");
  var images = $(".images");

  images.on("click", function(event){
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

      whoChoseWhat.html("");
      whoChoseWhat.append("You chose " + humanChoice + "//" + "Opponent chose " + compChoice);
      whoChoseWhat.attr("id", "whoChoseWhat");
      body.append(whoChoseWhat);
      wins.html("Wins: " + score.wins + " ");
      loses.html("Loses: " + score.loses);
      scoreDisplay.append(wins);
      scoreDisplay.append(loses);
  });


  button.on("click", function(){
    scoreDisplay.html("");
    score.wins = 0;
    score.loses = 0;
  });

  body.append(button);
});
