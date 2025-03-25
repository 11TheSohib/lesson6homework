// misol >>> 1

const matn = "  salom dunyoda nima gaplar  ";

function kopMas(matn, raqam) {
  const nuqta = "...";
  matn = matn.trim();
  matn = matn.slice(0, raqam) + nuqta;
  return matn;
}

console.log(kopMas(matn, 10));

// misol >>> 2

// https://www.w3schools.com/js/js_random.asp
const start = +prompt("Start sonni kiriting:");
const end = +prompt("End sonni kiriting:");

function randInt(start, end) {
  return Math.floor(Math.random() * (end - 1) + (start + 1));
}

console.log(randInt(start, end));

// misol >>> 3

const str1 = "Salomat",
  str2 = "Kaloman";

function select(str1, str2) {
  unrepeatableWord = "";
  for (const i of str1) {
    if (!str2.includes(i)) unrepeatableWord += i;
  }
  for (const i of str2) {
    if (!str1.includes(i)) unrepeatableWord += i;
  }
  return unrepeatableWord;
}

console.log(select(str1, str2));

// misol >>> 4

const word = "NAJOT TA'LIM";

function countLetter(word) {
  let neWord = "";
  for (const i of word) {
    let count = 0;
    if (i != " ") {
      for (const j of word) {
        if (i == j) count++;
      }
    }
    if (!neWord.includes(i)) neWord += " " + i + "*".repeat(count) + ",";
  }
  neWord = neWord.slice(1);
  return neWord;
}

console.log(countLetter(word));

//Qo'shimcha >>>>

const raqam = [12, 34, 556, 67, 23, 1456, 100];

function rqYig(nums) {
  let sum = 0;
  while (nums > 0) {
    sum += nums % 10;
    nums = parseInt(nums / 10);
  }
  return sum;
}

function sorts(arry) {
  for (let i in arry) {
    arry[i] = rqYig(arry[i]);
  }
  for (let i in arry) {
    for (let j in arry) {
      if (arry[j] > arry[i]) {
        let box = arry[j];
        arry[j] = arry[i];
        arry[i] = box;
      }
    }
  }
  return arry;
}

console.log(sorts(raqam));
