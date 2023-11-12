// objects
const glass = {
    name: "glass",
    color: "green",
    price: 12,
    isCleaned: true,
}
console.log(glass);

// all the keys of this object
const keys = Object.keys(glass);
console.log(keys); //[ 'name', 'color', 'price', 'isCleaned' ]

// all the values of this objects
const values = Object.values(glass);
console.log(values); //[ 'glass', 'green', 12, true ]

// pair couple of this object
const pair = Object.entries(glass);
console.log(pair);

// delete  property------- solution:1
delete glass.isCleaned;
console.log(glass);


// delete  property with create a new object--- solution:2
const {price, ...shortGlass} = glass;
console.log(shortGlass);



// freeze object
Object.freeze(glass);
glass.source = "bangladesh";
console.log(glass);