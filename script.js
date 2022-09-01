const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let gamePlay = false;

button.addEventListener("click", function () {
  // When we click button, it'll run function that will check the following:
  if (!gamePlay) {
    // if gamePlay is "false" (!) --> then gamePlay will be set to "true"
    gamePlay = true;
    score = 0;
    gameArea.innerHTML = "";
    maker(); // Create a new function for the input areas
    message.innerHTML = "Guess the Combo";
    button.innerHTML = "Check Combo"; // When button is clicked - it'll be changed to say "Check Combo"
  } else {
    score++;
    message.innerHTML = "Guesses - " + score; // Displays "guesses"
    const numbers = document.querySelectorAll(".numb"); // Loop through ALL elements with class of "numb"
    let winCondition = 0;
    for (let i = 0; i < numbers.length; i++) {
      // Check each value to see if they match
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "green"; // if you guess correctly, the background turns green
        numbers[i].style.color = "white"; // changes text color to white within green box
        winCondition++;
      } else {
        let color = numbers[i].value < numbers[i].correct ? "blue" : "red";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "white";
      }
      if (winCondition == numbers.length) {
        gameEnd();
      }
    }
  }
});

function gameEnd() {
  message.innerHTML =
    "You Cracked the Code in " + score + " Guesses.  Great job!";
  gamePlay = false;
  button.innerHTML = "Restart Game";
}

// Add input boxes for the combo guesser

function maker() {
  for (let x = 0; x < 4; x++) {
    let el = document.createElement("input"); // generate an input field
    el.setAttribute("type", "number"); // Allows user to input a number
    el.max = 9; // Max value that you can select is 9
    el.min = 0;
    el.size = 1;
    el.style.width = "50px";
    el.classList.add("numb"); // Add style to the individual boxes (link to CSS)
    el.value = 0; // starting value for each box
    el.order = x; // Adds 4 options for combo guesses
    el.correct = Math.floor(Math.random() * 10); // creates random numbers for the guesser 0-9
    gameArea.appendChild(el); // actually adds the input box to the gameArea
  }
}
