// Adds new functionality to an object dynamically.
function coffee() {
    return 'Coffee';
}

function withMilk(coffeeFn) {
    return () => coffeeFn() + ' with Milk';
}

function withSugar(coffeeFn) {
    return () => coffeeFn() + ' with Sugar';
}

let myCoffee = coffee;
myCoffee = withMilk(myCoffee);
myCoffee = withSugar(myCoffee);

console.log(myCoffee()); // Coffee with Milk with Sugar
