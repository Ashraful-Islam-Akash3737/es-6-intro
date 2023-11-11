// single parameter or one parameter(with paranthesis)
const getAge = (person) => person.age;
const student = {name:"Akash", age:20};
const age = getAge(student);
console.log(age);


// single parameter or one parameter(with no paranthesis)
const getThird = numbers => numbers[2];
const third = getThird([34, 647, 73, 403, 790, 480, 89]); 
console.log(third);


// no parameter
const getPI = () => parseFloat(Math.PI.toFixed(4));
console.log(getPI());


// large arrow function
// for create multiple line body function you have to use: {} and also have to use return keyword
const doMath = (a, b, c) => {
    const sum1 = a + b + c + 67;
    const sum2 = a - b - c + 67;
    const sum3 = a * b * c + 67;
    const sum4 = a / b / c + 67;

    const result = sum2 * sum1 - sum4 / sum3;
    return result;
}

const resultIs = parseFloat(doMath(37, 47, 57).toFixed(3));
console.log(resultIs);