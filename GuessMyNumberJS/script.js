"use strict";
const numberGenerated = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = numberGenerated();
let score = 7;
let highscore = 0;
const check_btn = document.querySelector(".check");
const rest_btn = document.querySelector(".again");

const displayMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};
const displayScore = (s) => {
  document.querySelector(".score").textContent = s;
};

check_btn.addEventListener("click", () => {
  const guess_nbr = Number(document.querySelector(".guess").value);
  if (!guess_nbr) {
    displayMessage("🚫 No number!");
    document.querySelector(".message").style.color = "red";
  } else if (guess_nbr === secretNumber) {
    displayMessage("Correct Number! 🎉🎉");
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess_nbr !== secretNumber) {
    if (score > 1) {
      displayMessage(guess_nbr > secretNumber ? "Too High!" : "Too Low!");
      score--;
      displayScore(score);
      document.querySelector(".message").style.color = "#eee";
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
      document.querySelector(".message").style.color = "#eee";
    }
  }
});
rest_btn.addEventListener("click", () => {
  score = 7;
  secretNumber = numberGenerated();
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  displayScore(score);
});
