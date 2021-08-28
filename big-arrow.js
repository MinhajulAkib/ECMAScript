//one parameter
const fiveTimes = num => num *10;
const output = fiveTimes(5);
console.log(output);
//two parameter
const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
//three paramaeter
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2,3,4);


const getName = () => 'Brandon Sam';
const name = getName()
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);




console.log(result);