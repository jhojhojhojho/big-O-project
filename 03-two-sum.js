// const arr = [0, 1, 5, 7];

//o (n^2)
function badTwoSum(arr, targetSum) {
  // Code goes here ...
  for(let i = 0; i < arr.length; i++){
    let num1 = arr[i]
    for(let j = i + 1; j < arr.length; j++){
      let num2 = arr[j]

      if(num1 + num2 === targetSum){
        return true
      }
    }
  }
  return false
}

// console.log(badTwoSum(arr, 6))
// console.log(badTwoSum(arr, 10))


const arr = [0, 5, 1, 7];

function binarySearch(array, target){
  let lowerIndex = 0
  let upperIndex = arr.length - 1
  let midIndex

  while (lowerIndex <= upperIndex){
    midIndex = Math.floor((lowerIndex + upperIndex) / 2)
    if(array[midIndex] < target){
      lowerIndex = midIndex + 1
    } else if (array[midIndex] > target) {
      upperIndex = midIndex - 1
    } else {
      return true
    }
  }
  return false
}

// const arr = [0, 1, 5, 7];
function okayTwoSum1(arr, targetSum) {
 let sorted = arr.sort()

 for(let i = 0; i < sorted.length; i++){
   let num = sorted[i]

   if(binarySearch(sorted, targetSum - num)){
    return true
   }
 }
return false
}


console.log(okayTwoSum1(arr, 6))
console.log(okayTwoSum1(arr, 10))







function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
