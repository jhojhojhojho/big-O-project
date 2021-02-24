function firstAnagram(str1, str2) {
  // Code goes here ....
  // elvis / lives
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  for (let i = 0; i < arr1.length; i++) {
    let letter = arr1[i];
    let index2 = arr2.indexOf(letter);
    if (index2 >= 0) {
      arr2.splice(index2, 1);
    }
  }
  if (arr2.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(firstAnagram("gizmo", "sally"));

function secondAnagram(str1, str2) {
  // Code goes here ....
}

function thirdAnagram(str1, str2) {
  // Code goes here ....
}

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
