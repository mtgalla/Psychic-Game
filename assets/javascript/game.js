


    //computer choices as string of all the letters a-z
    var choices = "abcdefghijklmnopqrstuvwxyz";

    //initial wins, losses and guesses
    var wins = 0;
    var losses = 0;
    var guesses = 9;

    // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {

      // Randomly chooses a choice from the computer choice string. This is the Computer's guess.
      var computerGuess = choices[Math.floor(Math.random() * choices.length)]; 

      // Key pressed assigned to output to html span.
      var userGuess = event.key;
      var divParent = document.getElementById("userGuess");
      var newDiv = document.createElement("span");
      
      //
      if(computerGuess===userGuess){
        wins++;
        reset()
      }
      
      else {
      if (guesses===1){
        losses++;
        reset()
      }
      else{
        guesses--;
        newDiv.textContent = (userGuess +" ")
        divParent.appendChild(newDiv); 
      }
      }

      //Output count of wins, loses and guesses to html span
      var winParent = document.getElementById("winCount");
      winParent.textContent = (wins);
      
      var lossParent = document.getElementById("lossCount");
      lossParent.textContent = (losses);

      var guessParent = document.getElementById("guessCount");
      guessParent.textContent = (guesses);

      
      //console.log(computerGuess);
      //console.log(allChoices);
      //console.log("losses=" + losses);
      //console.log(userGuess);
      //console.log(wins);
      //console.log(guesses);
      //console.log(newDiv);

      //rest funtction that resets starting guesses to 9 and clears out user guesses from output html span.
      function reset(){
        guesses = 9;
        divParent.textContent = ("");
      };
    };