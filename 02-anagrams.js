string1 = ("gizmo", "sally"); // => false
string2 = ("elvis", "lives"); // => true

//O(n^2)
function firstAnagram(str1, str2) {
  // Code goes here ....
  // elvis / lives
  let arr1 = str1.split(""); // n
  let arr2 = str2.split(""); // n
  for (let i = 0; i < arr1.length; i++) {
    // n
    let letter = arr1[i]; // because it's nested we multiply
    let index2 = arr2.indexOf(letter); // n // this is a linear time complexity
    if (index2 >= 0) {
      //if we had a -1, then we would just never enter the conditional of the second array and perform the splice
      arr2.splice(index2, 1);
    }
  }
  if (arr2.length === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(firstAnagram("gizmo", "sally"));

//this one is slower than the first one. O(nlogn)
function secondAnagram(str1, str2) {
  // Code goes here ....
  // here we needed to make it into a string again in order to strictly compare
  //these are saved in variables and pointing in different points in memory which is why we need to join
  let sorted1 = str1.split("").sort().join("");
  let sorted2 = str2.split("").sort().join("");

  if (sorted1 === sorted2) {
    //this is comparing by looking directly into spots in memory
    return true;
  }
  return false;
}

// console.log(secondAnagram("elvis", "lives"));
// O(n)
function thirdAnagram(str1, str2) {
  // Code goes here ....
  // create 2 objects with keys as the letters
  // and values as the count of the letters
  //
  //compare final objects to see if equal
  // let obj1;
  // let obj2;

  let letterCount1 = {}; // e: 1, l: 1, v: 1
  let letterCount2 = {}; // e: 1, l: 1, v: 1

  for (let i = 0; i < str1.length; i++) {
    let letter1 = str1[i];
    if (!letterCount1[letter1]) {
      letterCount1[letter1] = 1;
    } else {
      letterCount1[letter1] += 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    let letter2 = str2[j];
    if (!letterCount2[letter2]) {
      letterCount2[letter2] = 1;
    } else {
      letterCount2[letter2] += 1;
    }
  }
  // {a: 1, b: 2} {a: 0, b: 2}
  for (const key in letterCount1) {
    const value1 = letterCount1[key];
    if (!key in letterCount2) {
      // edge case for extra letters
      return false;
    }
    if (value1 !== letterCount2[key]) {
      // if value in one obj is not equal
      return false;
    }
  }
  return true;
}
console.log(thirdAnagram("elvis", "livel"));
// let arr1keys = Object.keys(letterCount1);
// let arr2keys = Object.keys(letterCount2);  //[ e ,l ,v , i ,s]

// for (let key in letterCount1){

//   for(let key2 in letterCount2){
//     if(key === key2
//   }
// }

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
