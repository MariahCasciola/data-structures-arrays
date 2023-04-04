/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
  // given an unsorted array of numbers, find the min and max
  if (numbers.length === 0) {
    return numbers;
  }
  const sortedNumbers = numbers.sort((a, b) => a - b);
  //   console.log('*****************', sortedNumbers)
  // should return 2 values in an array
  return [sortedNumbers[0], sortedNumbers[sortedNumbers.length - 1]];
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
  if (numbers.length === 0) {
    return numbers;
  }

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return [min, max];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
