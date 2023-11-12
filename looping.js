const glass = {
    name: "glass",
    color: "green",
    price: 12,
    isCleaned: true,
}

// using for in loop
for(const key in glass){
    const value = glass[key];
    console.log(key, value);
}

// using for of loop
const keys = Object.keys(glass);

for (const key of keys){
    const values = glass[key];
    console.log(key, values);
}