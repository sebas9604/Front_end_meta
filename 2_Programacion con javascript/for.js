
let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);

 
const [a, b] = [1,2,3,4]
console.log("Hola:", b)

function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);

