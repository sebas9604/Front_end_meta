let menu = [
    ["Pasta Italiana", 9.55],
    ["Arroz con verduras", 8.65],
    ["Pollo con patatas", 15.55],
    ["Pizza Vegetariana", 6.45]
];
function info_plates(boleano){
    if (boleano){
        console.log("Precios con un 20% de impuestos:")
        for (let x of menu){
            console.log("Plato:" + x[0], "Precio (Impuestos incluidos): $", x[1]*1.2)
        }
    }
    else{
        console.log("Precios sin impuestos:")
        for (let x of menu){
            console.log("Plato:" + x[0], "Precio (Impuestos no incluidos): $", x[1])
        }
    }

}

info_plates(true);
info_plates(false);

var result;
console.log(result);
result = 7;

try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}


var cat = {}
cat["sound"] = "meow"
var catSound = "purr"
console.log(cat.sound)