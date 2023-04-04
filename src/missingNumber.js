/**
 * Implement a brute force algorithm for finding the missing number in an array
 */

// [2, 5, 1, 4] 1 to n, n being 5 in this case
function missingNumberBruteForce(numbers) {
  for (let i = 0; i < numbers.length + 1; i++) {
    // Use a loop to consider every possible integer from 1 to n and check if that integer exists in the array or not.
    if (numbers.includes(i + 1)) {
      continue;
    } else {
      return i + 1;
    }
  }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
// function missingNumberSum(numbers) {
//   let sumWithMissingNumber = 0;
//   let sumWithAllNumbers = 0;
// // sort the numbers array
//   const sortedArray = numbers.sort();
//   //Find the expected sum of all integers from 1 to n. Then find the actual sum of the numbers in the array. The difference is the missing number.
//   for (let i = 0; i < sortedArray.length - 1; i++) {
//     sumWithMissingNumber += sortedArray[i];
//     sumWithAllNumbers += sortedArray[i];
//   }
//   return sumWithAllNumbers - sumWithMissingNumber;
// }

function missingNumberSum(numbers) {
  let n = numbers.length + 1;
  let sumWithAllNumbers = (n * (n + 1)) / 2;
  let sumExpected = 0;
  for (let i in numbers) {
    sumExpected = sumExpected + numbers[i];
  }
  let diff = sumWithAllNumbers - sumExpected;
  return diff;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
