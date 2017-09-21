'use strict';

// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.

var guessesLeft = 4;
var secretNumber = 8;

while (guessesLeft > 0) {
  var guess = parseInt(prompt('Guess a number between 1 and 10!'));
  if (guess.toString() === 'NaN') {
    alert('Please enter a NUMBER. You entered something else.')
  } else if (guess > secretNumber) {
    guessesLeft--;
    alert('You guessed too high. You have ' + guessesLeft + ' guesses remaining.');
  } else if (guess < secretNumber) {
    guessesLeft--;
    alert('You guessed too low. You have ' + guessesLeft + ' guesses remaining.')
  } else {
    guessesLeft = -1;
    alert('You got it right!!!');
  }
  if (guessesLeft === 0) {
    alert('You used up all of your guesses without guessing the correct number. YOU LOSE.')
  }
}

// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.

var guessesRemaining = 6;
var answers = ['Tennessee', 'Louisiana', 'New York', 'Montana', 'Alabama', 'Florida'];

while(guessesRemaining > 0) {
  var stateGuess = prompt('Can you guess a state I have lived in besides Washington?');
  guessesRemaining--;

  // for(var i = 0; i < answers.length; i++) {
  //   if(stateGuess === answers[i]){
  //     alert('Nice, you got one!');
  //     guessesRemaining = -1;
  //     break;
  //   }
  // }

  if(answers.includes(stateGuess)){
    alert('Nice, you got one!');
    guessesRemaining = -1;
  }

  if(guessesRemaining > 0){
    alert('Nope, that is not a correct answer. You have ' + guessesRemaining + ' guesses remaining.');
  }

  if (guessesRemaining === 0) {
    alert('Sorry, you are out of guesses. My previous homes were Alabama, Florida, Tennesseee, Lousisiana, New York, and Montana.');
  }
}
