"use strict";

// Elements
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const btnReset = document.querySelector(".reset--button");

const playerImg = document.getElementById("player--image");
const cpuImg = document.getElementById("cpu--image");

const imgRock0 = document.querySelector(".rock--img0");
const imgPaper0 = document.querySelector(".paper--img0");
const imgScissors0 = document.querySelector(".scissors--img0");

const imgRock1 = document.querySelector(".rock--img1");
const imgPaper1 = document.querySelector(".paper--img1");
const imgScissors1 = document.querySelector(".scissors--img1");

const roundNum = document.querySelector(".round--number");
const playerScore = document.querySelector(".score--player");
const cpuScore = document.querySelector(".score--cpu");

let round = 0;
let scorePlayer = 0;
let scoreCpu = 0;

// Win round function
function roundWin() {
  document.querySelector(".result--text").textContent = "You win! 🎉";
  scorePlayer++;
  playerScore.textContent = `${scorePlayer}`;
}

// Draw round function
function roundDraw() {
  document.querySelector(".result--text").textContent = "Draw!";
}

// Lose round funtion
function roundLose() {
  document.querySelector(".result--text").textContent = "You lose! 🙊";
  scoreCpu++;
  cpuScore.textContent = `${scoreCpu}`;
}

// Random pick by CPU
function cpuChoice() {
  return Math.trunc(Math.random() * 3 + 1);
}

// Cpu choses rock funtion
function cpuRock() {
  cpuImg.classList.add("hidden");
  imgPaper1.classList.add("hidden");
  imgScissors1.classList.add("hidden");
  imgRock1.classList.remove("hidden");
}
// Cpu choses paper funtion
function cpuPaper() {
  cpuImg.classList.add("hidden");
  imgRock1.classList.add("hidden");
  imgScissors1.classList.add("hidden");
  imgPaper1.classList.remove("hidden");
}
// Cpu choses scissors funtion
function cpuScissors() {
  cpuImg.classList.add("hidden");
  imgRock1.classList.add("hidden");
  imgPaper1.classList.add("hidden");
  imgScissors1.classList.remove("hidden");
}

// Result of the match function
function result() {
  if (scorePlayer === 3) {
    document.querySelector(".modal--window").classList.remove("hidden");
    document.querySelector(".result--reset").textContent = "You win! 🎉";
  } else if (scoreCpu === 3) {
    document.querySelector(".modal--window").classList.remove("hidden");
    document.querySelector(".result--reset").textContent = "You lose! 🙊";
  }
}

// ********* Player choses rock *********
btnRock.addEventListener("click", function () {
  // Display rock img
  playerImg.classList.add("hidden");
  imgRock0.classList.remove("hidden");
  imgPaper0.classList.add("hidden");
  imgScissors0.classList.add("hidden");
  round++;
  roundNum.textContent = `${round}`;

  // Display CPU choice

  if (cpuChoice() === 1) {
    cpuRock();
    roundDraw();
  } else if (cpuChoice() === 2) {
    cpuPaper();
    roundLose();
  } else if (cpuChoice() === 3) {
    cpuScissors();
    roundWin();
  }

  result();
});

// ********* Player choses paper *********
btnPaper.addEventListener("click", function () {
  // Display paper img
  playerImg.classList.add("hidden");
  imgPaper0.classList.remove("hidden");
  imgRock0.classList.add("hidden");
  imgScissors0.classList.add("hidden");
  round++;
  roundNum.textContent = `${round}`;

  // Display CPU choice

  if (cpuChoice() === 1) {
    cpuRock();
    roundWin();
  } else if (cpuChoice() === 2) {
    cpuPaper();
    roundDraw();
  } else if (cpuChoice() === 3) {
    cpuScissors();
    roundLose();
  }

  result();
});

//  ********* Player choses scissors  *********
btnScissors.addEventListener("click", function () {
  // Display scissors img
  playerImg.classList.add("hidden");
  imgPaper0.classList.add("hidden");
  imgRock0.classList.add("hidden");
  imgScissors0.classList.remove("hidden");
  round++;
  roundNum.textContent = `${round}`;

  // Display CPU choice
  if (cpuChoice() === 1) {
    cpuRock();
    roundLose();
  } else if (cpuChoice() === 2) {
    cpuPaper();
    roundWin();
  } else if (cpuChoice() === 3) {
    cpuScissors();
    roundDraw();
  }

  result();
});

btnReset.addEventListener("click", function () {
  round = 0;
  scorePlayer = 0;
  scoreCpu = 0;

  roundNum.textContent = "0";
  playerScore.textContent = "0";
  cpuScore.textContent = "0";

  document.querySelector(".modal--window").classList.add("hidden");
});
