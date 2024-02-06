const listOne = [2, 4, 3];
const listTwo = [5, 6, 4];

const sumArray =
  parseInt(listOne.reverse().join("")) + parseInt(listTwo.reverse().join(""));

const totalSumArray = sumArray.toString().split("").reverse().map(Number);

console.log(totalSumArray); // [7, 0, 8]
