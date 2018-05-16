$(document).ready(function(){


//Creating the random number we are going to guess

var randomNumber = Math.floor(Math.random()*101+19);
$("#numberGuess").text(randomNumber);

//Setting up random numbers for the crystals

  var crystalBlue= Math.floor(Math.random()*11+1)
  var crystalRed= Math.floor(Math.random()*11+1)
  var crystalgreen= Math.floor(Math.random()*11+1)
  var crystalyellow= Math.floor(Math.random()*11+1)

  console.log(crystalBlue);
  console.log(crystalgreen);
  console.log(crystalRed);
  console.log(crystalyellow);

  var wins = 0;
  var looses = 0;
  var userScore = 0;

  $("#winsScore").text(wins);
  $("#loosesScore").text(looses);
  //$("#score").text(userScore);
  
  //Reset game

  function resetGame () {
    var randomNumber = Math.floor(Math.random()*101+19);
    $("#numberGuess").text(randomNumber);

    var crystalBlue= Math.floor(Math.random()*11+1)
    var crystalRed= Math.floor(Math.random()*11+1)
    var crystalgreen= Math.floor(Math.random()*11+1)
    var crystalyellow= Math.floor(Math.random()*11+1)
    userScore = 0;
    $("#score").text(userScore);
  }


    function youWin() {
        wins++;
        $("#winScore").text(wins);
        self
        resetGame();
    }

    function youLose(){
        looses++; 
        $("#loosesScore").text(looses);
        resetGame();
    }

    //on click event for crystals
    $("#blue").on("click", function(){
        userScore = userScore + crystalBlue;
        $("#score").text(userScore);
    })


})