const correctNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = 0;

while (userGuess !== correctNumber) {
   
       userGuess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
          
              if (userGuess > correctNumber) {
                      console.log("Too high!");
                          } else if (userGuess < correctNumber) {
                                  console.log("Too low!");
                                      } else if (userGuess === correctNumber) {
                                              console.log("Correct! You guessed the number.");
                                                  } else {
                                                          console.log("Invalid input. Please enter a number.");
                                                              }
                                                              }