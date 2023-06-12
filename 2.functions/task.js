function getArrayParams(...arr) {
  if (!arr) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(function(a, b) {
    return a + b;
  });
  let avg = + ((sum / arr.length).toFixed(2));
  return ('{ min: ' + min + ', ' + 'max: ' + max + ', ' + 'avg: ' + avg + ' }')
};

function summElementsWorker(...arr) {
  if (!arr) {
    return 0;
  }
  let sum = arr.reduce(function(a, b) {
    return a + b;
  });
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (!arr) {
    return 0;
  }
  let difference = Math.max(...arr) - Math.min(...arr);
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (!arr) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if (!arr) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
    return sumEvenElement / countEvenElement;
  }
}

function makeWork(arrOfArr, func) {
  func();
  let maxWorkerResult = Number.MIN_VALUE;
  for (let i = 0; i <= arrOfArr.length; i++) {
    let result = func(arrOfArr[i])();
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
    return maxWorkerResult;
  }
}
