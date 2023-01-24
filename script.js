"use strict";

// Elements
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

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

// Random pick by CPU
function cpuChoose() {
  return Math.trunc(Math.random() * 3 + 1);
}
console.log(cpuChoose());
// Cpu choses rock funtion
function cpuRock() {
  cpuImg.classList.add("hidden");
  imgRock1.classList.remove("hidden");
}
// Cpu choses paper funtion
function cpuPaper() {
  cpuImg.classList.add("hidden");
  imgPaper1.classList.remove("hidden");
}
// Cpu choses scissors funtion
function cpuScissors() {
  cpuImg.classList.add("hidden");
  imgScissors1.classList.remove("hidden");
}

// Player choses rock
btnRock.addEventListener("click", function () {
  // Display rock img
  playerImg.classList.add("hidden");
  imgRock0.classList.remove("hidden");
  round++;
  roundNum.textContent = `${round}`;

  // Display CPU choice
  let cpuChoice = cpuChoose();
  console.log(cpuChoose());
  if (cpuChoice === 1) {
    cpuRock();
    document.querySelector(".result--text").textContent = "Draw!";
  } else if (cpuChoice === 2) {
    cpuPaper();
    document.querySelector(".result--text").textContent = "You lose! 🙊";
  } else if (cpuChoice === 3) {
    cpuScissors();
    document.querySelector(".result--text").textContent = "You win! 🎉";
    scoreCpu++;
    cpuScore.textContent = `${scoreCpu}`;
  }
});
