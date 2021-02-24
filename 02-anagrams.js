
string1 = ("gizmo", "sally");    // => false
string2 = ("elvis", "lives");    // => true

//log(n)
function firstAnagram(str1, str2) {
  // Code goes here ....
  // elvis / lives
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  for (let i = 0; i < arr1.length; i++) {
    let letter = arr1[i];
    let index2 = arr2.indexOf(letter);
    if (index2 >= 0) { //if we had a -1, then we would just never enter the conditional of the second array and perform the splice
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

//this one is faster than the first one. O(n)
function secondAnagram(str1, str2) {
  // Code goes here ....
  // here we needed to make it into a string again in order to strictly compare
  //these are saved in variables and pointing in different points in memory which is why we need to join
  let sorted1 = str1.split('').sort().join('')
  let sorted2 = str2.split('').sort().join('')

  if (sorted1 === sorted2){ //this is comparing by looking directly into spots in memory
    return true
  }
  return false
}

console.log(secondAnagram("elvis", "lives"))



function thirdAnagram(str1, str2) {
  // Code goes here ....
}

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
