const messageElement = document.getElementById('message');
const userScoreElement = document.getElementById('userScore');
const computerScoreElement = document.getElementById('computerScore');
let userScore = 0;
let computerScore = 0;

function handleKeyPress(event) {
  const pressedKey = event.keyCode;
  const computerKey = Math.floor(Math.random() * 26) + 65; // Generate A-Z key code

if (pressedKey === computerKey) {
 userScore++;
} else{
  computerScore++;
}

console.log(userScore);
console.log(computerScore);

  // Clear message and allow new keypress
  messageElement.textContent = "";
  document.addEventListener('keydown', handleKeyPress); // Re-add listener
}

document.addEventListener('keydown', handleKeyPress);