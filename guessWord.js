function removeDuplicatesByProperty(arr, property) {
  return arr.filter(
    (obj, index, self) =>
      index === self.findIndex((o) => o[property] === obj[property])
  );
}

let uniqueArray = removeDuplicatesByProperty(words, "word");

const contents = document.querySelector(".content");
const typing = contents.querySelector(".typing");
const inputs = contents.querySelector(".inputs");
const hintType = contents.querySelector(".hint span");
const categoryType = contents.querySelector(".category span");
const difficultyLevel = contents.querySelector(".level span");
const wrongLetter = contents.querySelector(".wrong-letter span");
const guessLeft = contents.querySelector(".guess-left span");
const resetBtn = contents.querySelector(".reset-btn");
const win = contents.querySelector(".winlose .wins");
const lose = contents.querySelector(".winlose .losses");
let word;
let maxGuess;
let correct = [];
let incorrects = [];
let wins = 0;
let losses = 0;
