const fishies = [
  "fish",
  "fiiish",
  "fiiiiish",
  "fiiiish",
  "fffish",
  "ffiiiiisshh",
  "fsh",
  "fiiiissshhhhhh",
];
// => "fiiiissshhhhhh";

function quadraticBiggestFish(fishes) {
  //nested loops for n^2
  //outer loop: holds first val of the array
  //inner loop: look at all other values of the array against outer loop val

  let longest = "";

  for (let i = 0; i < fishes.length; i++) {
    let currentWord = fishes[i];

    for (let j = 0; j < fishes.length; j++) {
      let words = fishes[j];

      if (words.length > currentWord.length) {
        longest = words;
      }
    }
  }
  return longest;
}

// console.log(quadraticBiggestFish(fishies))

function nlognBiggestFish(fishes) {
  //sorts smallest to largest
  fishes.sort((a, b) => {
    a.length - b.length;
  });
  return fishes[fishes.length - 1]; //we want the last in the array
}

// console.log(nlognBiggestFish(fishies))

function linearBiggestFish(fishes) {
  // Code goes here ...
  let longest = "";
  for (let i = 0; i < fishes.length; i++) {
    let word = fishes[i];
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// console.log(linearBiggestFish(fishies));

tilesArray = [
  "up", //0
  "right-up", //1
  "right",
  "right-down",
  "down",
  "left-down",
  "left",
  "left-up",
];
function slowDance(direction, tilesArray) {
  // Code goes here ...
  for (let i = 0; i < tilesArray.length; i++) {
    let curDirection = tilesArray[i];
    if (direction === curDirection) {
      return i;
    }
  }
}
// console.log(slowDance("right-down", tilesArray));?

tilesObj = {
  up: 0,
  "right-up": 1,
  right: 2,
  "right-down": 3,
  down: 4,
  "left-down": 5,
  left: 6,
  "left-up": 7,
};
function fastDance(direction, tilesObj) {
  // Code goes here ...
  return tilesObj[direction];
}
console.log(fastDance("right-down", tilesObj));
