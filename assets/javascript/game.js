


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

      // Key pressed assigned to output to HTML id.
      var userGuess = event.key;
      var divParent = document.getElementById("userGuess");
      var newDiv = document.createElement("span");
      
      //Win if user gueses computer's choice and resets guesses
      if(computerGuess===userGuess){
        wins++;
        reset()
      }
      //Loss if user does not guess computer's choice after 9 guesses and resets guesses 
      //Losses get incremented after last guess (i.e. guesses===1) 
      else {
      if (guesses===1){
        losses++;
        reset()
      }
      //First incorrect guess (i.e. guesses === 9), outputs to userGuess HTML id with no comma 
      else{
        if (guesses===9){
          guesses--;
          newDiv.textContent = (userGuess);
          divParent.appendChild(newDiv);
        }

        //Remaining incorrect guesses, outputs to userGuess HTML id with leading comma
        else{
        guesses--;
        newDiv.textContent = (", " + userGuess);
        divParent.appendChild(newDiv); 
        }
      }
      }

      //Output count of wins, loses and guesses to HTML respective ids
      var winParent = document.getElementById("winCount");
      winParent.textContent = (wins);
      
      var lossParent = document.getElementById("lossCount");
      lossParent.textContent = (losses);

      var guessParent = document.getElementById("guessCount");
      guessParent.textContent = (guesses);

      //Left these console.log entries as comments. These helped me see results of the different variables 
      //This was very helpful in trying to understand how the different methods and properies worked and helped me debug many of the errors
      //console.log(computerGuess);
      //console.log(allChoices);
      //console.log("losses=" + losses);
      //console.log(userGuess);
      //console.log(wins);
      //console.log(guesses);
      //console.log(newDiv);

      //reset funtction that resets starting guesses to 9 and clears out user guesses from output html span.
      function reset(){
        guesses = 9;
        divParent.textContent = ("");
      };
    };