// ------- function declaretion -------------
function add(a, b){
    // const result = a + b;
    // return result;
    return a + b;
}
console.log(add(4, 6));


// ------------- function expression---------
const sum = function (a, b){
    // const result = a + b;
    // return result;
    return a + b;
}
console.log(sum(3, 6));


// ----------array function--------
// add
const total = (a, b) => a + b;
console.log(total(4, 6));
// multiply
const multiply = (a, b, c, d, e) => a * b * c * d * e;
console.log(multiply(6, 6, 3, 7, 8));