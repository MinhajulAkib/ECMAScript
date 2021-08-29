const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number){
//     return number * 2;
// }

//arrow function
const doubleIt = num => num *2;

// for (const number of numbers){
//     const result = doubleIt(number);
//     output2.push(result);
// }
//console.log(output2);


//loop through each element
//element diye function call the provided function
//result for each element of an array

const output = numbers.map(doubleIt);
//console.log(output);


//const output = numbers.map(number => number * 2);
//const output = numbers.map(x => x * 2);
// console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);