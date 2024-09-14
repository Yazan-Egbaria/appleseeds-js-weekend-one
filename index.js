// Ex1.1 Yes or no
const boolean = (bool) => {
  if (bool) {
    console.log("Yes");
    return "Yes";
  } else {
    console.log("No");
    return "No";
  }
};
boolean(true);

// Ex2.1 Sum of lowest numbers
function sumLowest(arr) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      x = arr[i];
      for (let num = 0; num < arr.length; num++) {
        if (arr[num] < x) {
          x = arr[num];
        }
      }
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > y) {
      y = arr[j];
      for (let numTwo = 0; numTwo < arr.length; numTwo++) {
        if (arr[numTwo] < y && arr[numTwo] > x) {
          y = arr[numTwo];
        }
      }
    }
  }
  return x + y;
}
sumLowest([5, 10, 15, 20]);

// Ex2.3 one and zero-binary
function binary(arr) {
  let binaryString = arr.join("");
  let number = parseInt(binaryString, 2);
  return number;
}
binary([0, 0, 0, 1]);
binary([1, 0, 0, 1]);
binary([0, 0, 1, 0]);

// Ex2.3 Find the next perfect square
function findNextSquare(num) {
  let squareRoot = Math.sqrt(num);
  if (Number.isInteger(squareRoot)) {
    squareRoot++;
    let nextPerSqr = squareRoot * squareRoot;
    return nextPerSqr;
  } else {
    console.log("Its not a perefect square");
    return -1;
  }
}
findNextSquare(16);

// Ex2.4 Unique
function unique(arr) {
  arr.sort((a, b) => a - b);
  const result = arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
  console.log(result);
  return result;
}
unique([0, 0, 0, 0, 2]);
unique([3, 3, 4, 3, 3]);
unique([1, 2, 2, 2, 2]);

// Ex2.5 summation
const summation = (num) => {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    counter += i;
  }
  console.log(counter);
};
summation(3);
summation(8);

// Ex2.6 years and centuries
function findCentury(year) {
  let century = Math.ceil(year / 100);
  console.log(century);
  return century;
}
findCentury(1);
findCentury(101);
findCentury(201);
findCentury(1723);

// Ex2.7 basic math
function basicMath(operation, value1, value2) {
  let num = null;
  if (operation === "+") {
    num = value1 + value2;
  } else if (operation === "-") {
    num = value1 - value2;
  } else if (operation === "*") {
    num = value1 * value2;
  } else if (operation === "/") {
    num = value1 / value2;
  }
  console.log(num);
  return num;
}
basicMath("-", 5, 2);

// Ex3.1 Growth of population
