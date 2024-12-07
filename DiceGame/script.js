"use strict";
const generatedNumber = () => Math.trunc(Math.random() * 6 + 1);
let diceNumber = generatedNumber();
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;

const scoreP01 = document.getElementById("score--0");
const scoreP02 = document.getElementById("score--1");
let pic = document.querySelector(".dice");
const reset_btn = document.querySelector(".btn--new");
const roll_btn = document.querySelector(".btn--roll");
const hold_btn = document.querySelector(".btn--hold");
const currentScoreP01 = document.getElementById("current--0");
const currentScoreP02 = document.getElementById("current--1");

// switch player
const switchPlayer = () => {
  document.querySelector(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
};
// initial score to 0
scoreP01.textContent = 0;
scoreP02.textContent = 0;
scoreP01.textContent = 0;
scoreP02.textContent = 0;
pic.classList.add("hidden");
console.log(diceNumber);

roll_btn.addEventListener("click", () => {
  diceNumber = generatedNumber();
  pic.classList.remove("hidden");
  pic.src = `./assest/images/dice-${diceNumber}.png`;
  if (diceNumber === 6) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else if (diceNumber <= 5) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
      switchPlayer()
  } else {
    currentScore = 0x
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    switchPlayer();
  }
});
