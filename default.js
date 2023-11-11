function add (num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;

}
// const sum = add(5, 7);
// add(5);
// add();

// ------------------with default value-------
function summetion(num1, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
const AddSum = summetion(5, 7);
summetion(5);
// summetion();