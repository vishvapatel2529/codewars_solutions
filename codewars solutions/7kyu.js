//minimize sum of array
function minSum(arr) {
  var res = 0;
  arr = arr.sort((a, b) => a - b);

  while (arr.length) {
    res += arr.pop() * arr.shift();
  }

  return res;
}

//sum of two lowest positive numbers

function sumTwoSmallestNumbers(numbers) {
  //Code here
  let min = numbers[0];
  let secondMin = numbers[1];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      secondMin = min;
      min = numbers[i];
    } else if (numbers[i] < secondMin) {
      secondMin = numbers[i];
    }
  }
  return min + secondMin;
}
//isograms

function isIsogram(str) {
  //...
  var i, j;
  str = str.toLowerCase();

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }
  return true;
}
