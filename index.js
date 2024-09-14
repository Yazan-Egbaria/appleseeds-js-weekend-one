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
function nb_year(p0, percent, aug, p) {
  let count = 0;
  let percentNum = percent / 100;
  while (p0 < p) {
    p0 = p0 + (p0 * percentNum + aug);
    count++;
  }
  console.log(count);
}
nb_year(1500, 5, 100, 5000);

// Ex3.2 People on the bus
function movingBus(arr) {
  let peopleIn = 0;
  let peopleOut = 0;
  for (let row of arr) {
    peopleIn += row[0];
    peopleOut += row[1];
  }
  const peopleLeft = peopleIn - peopleOut;
  return peopleLeft;
}
movingBus([
  [5, 0],
  [2, 3],
  [4, 1],
]);

// Ex4.1 Fibonacci CHATGPT
// function fibonacciSequence(n) {
//   let a = 0;
//   let b = 1;
//   let temp;
//   for (let i = 2; i <= n; i++) {
//     temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return n ? b : a;
// }
// console.log(fibonacciSequence(6));

// Ex4.2 Tribonacci CHATGPT
// function tribonacciSequence(n) {
//   let a = 1;
//   let b = 1;
//   let c = 1;
//   let temp;
//   for (let i = 2; i <= n; i++) {
//     temp = a + b + c;
//     a = b;
//     b = c;
//     c = temp;
//   }
//   return n ? b : a;
// }
// console.log(tribonacciSequence(4));

// Ex5.1 trimming string
function trimString(str) {
  if (str.length > 2) {
    return str.slice(1, str.length - 1);
  } else {
    return str;
  }
}
console.log(trimString("Yazan"));

// Ex5.2 string repeat
function repeatStr(count, str) {
  return str.repeat(count);
}
console.log(repeatStr(5, "Hello"));

// // Ex5.3 to camel case
function camelCase(str) {
  let words = [];
  if (str.includes("-")) {
    words = str.split("-");
  } else if (str.includes("_")) {
    words = str.split("_");
  }
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);

  return words.join("");
}
console.log(camelCase("the-stealth-warrior"));
console.log(camelCase("the_stealth_warrior"));
console.log(camelCase("The_stealth_warrior"));

// Ex5.4 to weird case
function toWeirdCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}
console.log(toWeirdCase("Yazan"));

// Ex5.5 abbreviate two words
function abbreviateWord(str) {
  const newStr = str.split(" ");
  let abbr = "";
  for (let i = 0; i < newStr.length; i++) {
    abbr += newStr[i].charAt(0).toUpperCase();
    if (i < newStr.length - 1) {
      abbr += ".";
    }
  }
  return abbr;
}
console.log(abbreviateWord("Yazan Egbaria"));

// Ex5.6 Mask
function maskify(str) {
  let strArr = str.split("");
  let newArrOne = strArr.slice(strArr.length - 4);
  let newArrTwo = strArr.slice(0, strArr.length - 4);
  for (let i = 0; i < newArrTwo.length; i++) {
    newArrTwo[i] = "#";
  }
  const newStr = newArrTwo.join("") + newArrOne.join("");
  return newStr;
}
console.log(maskify("1111222233334444"));
console.log(maskify("Yazan"));

// Ex5.7 shortest words
function shortestWords(str) {
  const words = str.split(" ");
  let shortestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }
  return shortestWord.length;
}
console.log(shortestWords("Hello everyone my name is Yazan Egbaria"));

// Ex5.8 shortest words version 2
function longestWords(str) {
  const words = str.split(" ");
  let longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(longestWords("Hello everyone my name is Yazan Egbaria"));
