const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const computer_score = document.querySelector("#computer_score");
const player_score = document.querySelector("#player_score");
const you_chose = document.querySelector(".you-chose");
const computer_chose = document.querySelector(".computer-chose");
const you_won = document.querySelector(".you-won");
const computer_won = document.querySelector(".you-lost");

console.log(you_won);
console.log(computer_won);

let player_choice;
paper.addEventListener("click", function (e) {
  resetResults();
  you_chose.textContent = "PAPER";
  const computer_choice = computerChoiceGenerator();
  player_choice = 1;
  resulting(player_choice, computer_choice);
});

rock.addEventListener("click", function (e) {
  resetResults();
  you_chose.textContent = "ROCK";
  const computer_choice = computerChoiceGenerator();
  player_choice = 2;
  resulting(player_choice, computer_choice);
});

scissors.addEventListener("click", function (e) {
  resetResults();
  you_chose.textContent = "SCISSORS";
  const computer_choice = computerChoiceGenerator();
  player_choice = 3;
  resulting(player_choice, computer_choice);
});

function resetResults() {
  you_won.classList.remove("block");
  you_won.classList.remove("hidden");
  computer_won.classList.remove("block");
  computer_won.classList.remove("hidden");
}
function resulting(player, computer) {
  if (player == computer) {
    you_chose.textContent = "It's a tie!";
    computer_chose.textContent = "It's a tie!";
  } else if (
    (player === 2 && computer === 1) ||
    (player === 3 && computer === 2) ||
    (player === 1 && computer === 3)
  ) {
    computer_score.textContent = parseInt(computer_score.textContent) + 1;
    you_won.classList.toggle("hidden");
    computer_won.classList.toggle("block");
  } else {
    player_score.textContent = parseInt(player_score.textContent) + 1;
    you_won.classList.toggle("block");
    computer_won.classList.toggle("hidden");
  }
}
function randomGenerator() {
  return Math.floor(Math.random() * 3) + 1;
}
function computerChoiceGenerator() {
  let computer_choice = randomGenerator();
  if (computer_choice === 1) {
    computer_chose.textContent = "PAPER";
  } else if (computer_choice === 2) {
    computer_chose.textContent = "ROCK";
  } else {
    computer_chose.textContent = "SCISSORS";
  }
  return computer_choice;
}
