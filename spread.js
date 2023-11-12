// ----------spread operator(... or three dot) -----------------------

const max = Math.max(7, 8, 39, 72, 76, 26, 65);
// console.log(max);

const numbers = [36, 76, 18, 38, 87, 84, 94];
const maximum = Math.max(...numbers);
// console.log(maximum);

// use spread operator to copy
const friends = [23, 57, 76, 46, 57, 87];
const bondhu = [...friends]; //copy
bondhu.push(23);
console.log(friends);
console.log(bondhu);


// advanched
const elements = [...friends, 2345]; //add extra elements while copy
console.log(elements);
