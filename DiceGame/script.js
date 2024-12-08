"use strict";
const generatedNumber = () => Math.trunc(Math.random() * 6 + 1);
let diceNumber = generatedNumber();
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let play = true;

const player_1 = document.querySelector(".player--0");
const player_2 = document.querySelector(".player--1");
const scoreP01 = document.getElementById("score--0");
const scoreP02 = document.getElementById("score--1");
let pic = document.querySelector(".dice");
const reset_btn = document.querySelector(".btn--new");
const roll_btn = document.querySelector(".btn--roll");
const win_txt = document.querySelector(".win");
const currentScoreP01 = document.getElementById("current--0");
const currentScoreP02 = document.getElementById("current--1");

// switch player
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.player--0`).classList.toggle("player--active");
  document.querySelector(`.player--1`).classList.toggle("player--active");
};
// initial element
const init = () => {
  play = true;
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  scoreP01.textContent = 0;
  scoreP02.textContent = 0;
  currentScoreP01.textContent = 0;
  currentScoreP02.textContent = 0;
  pic.classList.add("hidden");
  player_1.classList.remove("player--winner");
  player_2.classList.remove("player--winner");
  player_1.classList.add("player--active");
  player_2.classList.remove("player--active");
};
// initiale
init();
roll_btn.addEventListener("click", () => {
  if (play) {
    diceNumber = generatedNumber();
    pic.classList.remove("hidden");
    pic.src = `./assest/images/dice-${diceNumber}.png`;
    if (diceNumber === 6) {
      currentScore = 0;
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
    } else {
      currentScore = 0;
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      switchPlayer();
      if (scores[activePlayer] >= 100) {
        play = false;
        pic.classList.add("hidden");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove("player--active");
        // scores[activePlayer] = 0;
        // document.getElementById(`score--${activePlayer}`).textContent =
        //   scores[activePlayer];
      }
    }
  }
});
// Reset buttom
reset_btn.addEventListener("click", init);
