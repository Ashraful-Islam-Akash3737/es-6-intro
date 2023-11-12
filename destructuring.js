// object destructuring
const actor = {
    name: "Akash",
    age: 20,
    phone: '01875133328',
    money: 4567890
}
// const name = actor.name;
// const age = actor.age;
// const phone = actor.phone;
// console.log(name, age, phone);



// we can use this things more easy with destructuring




// if right side is an object left side of destructuring will be object as well
const {money, age:boyos} = actor;
console.log(money);
console.log(boyos);



// array destructuring
const array = [23, 45];
const [one, two] = array;
console.log(one);
console.log(two);



// advanced
function doubleThem(a, b){
    return [a*3, b*6];
}
// console.log(doubleThem(3, 6));
const [first, second] = doubleThem(7, 8);
console.log(first);
console.log(second);
