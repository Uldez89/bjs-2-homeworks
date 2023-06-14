function getArrayParams(...arr) {
  let result;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(function(a, b) {
    return a + b;
  });
  let avg = + ((sum / arr.length).toFixed(2));
  result = {min: min, max: max, avg: avg};
  return result;
};

function summElementsWorker(...arr) {
  let result;
  if (arr.length === 0) {
    return 0;
 }
   result = arr.reduce(function(a, b) {
    return a + b;
  }, 0);
  return result;
}

function differenceMaxMinWorker(...arr) {
  let result;
  if (arr.length === 0) {
    return 0;
 }
  result = Math.max(...arr) - Math.min(...arr);
  return result;
}

function differenceEvenOddWorker(...arr) {
  let result;
  if (arr.length === 0) {
     return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
    result = sumEvenElement - sumOddElement;
  }
  return result;
}

function averageEvenElementsWorker(...arr) {
  let result;
  if (arr.length === 0) {
    return 0;
 }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
    result = sumEvenElement / countEvenElement;
  }
  return result;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
