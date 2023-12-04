'use strict';

// selecting Elements..
const player1El = document.querySelector('.player--1');
const player0El = document.querySelector('.player--0');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--Roll');
const btnHold = document.querySelector('.btn--Hold');

score0El.innerHTML = 0;
score1El.innerHTML = 0;
diceEl.classList.add('hidden');

const Scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
var switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El = classList.toggle('player--active');
  player1El = classList.toggle('player--active');
};

// rolling Dice funtionality
btnRoll = addEventListener('click', function () {
  // 1 Generating Random Number dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2 Display number
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3: check for Rolled 1: if True,then Switch to next player

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // then Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // 1: Add current player's score to the active player's score
  Scores[activePlayer] += currentScore;
  //  score[1] = score[1] + currentscore

  document.getElementById(`score--${activePlayer}`).textContent =
    Scores[activePlayer];
  // 2: check players score >=100
  //  finish the game
  // 3: switch to  the next player
  switchPlayer();
});
