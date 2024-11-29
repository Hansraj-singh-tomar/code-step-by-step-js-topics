// Singleton Design Pattern - jiska object sirf ek hi baar create ho sakta hai 
// ek object ka ek hi instance bnana chahiye do nhi bnana chahiye

// IIFE use karenge 
// IIFE hame - enclosed scope + closure + privacy provide karta hai 
// closure use karne ke karan global namespace pollute nhi hota hai mtlb bahar ki chije access kar sakta hai andar ki chije bahar use nhi kar sakte hai 
const singleton = (function () {
    let instance = null;
    function createInstance() {
        return { name: "hansraj", age: 91, score: Math.floor(Math.random() * 100) };
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

console.log(singleton); // {getInstance: ƒ}
const instance1 = singleton.getInstance();
console.log(instance1);  // {name: 'hansraj', age: 91, score: 98}
const instance2 = singleton.getInstance();
console.log(instance2);  // {name: 'hansraj', age: 91, score: 98}
const instance3 = singleton.getInstance();
console.log(instance3);  // {name: 'hansraj', age: 91, score: 98}

// Note - hame score alag-alag milna chahiya tha but esa nhi hua that's proof of use of singleton
// score me ham Math.random() ka use kar rhe hai to hame random value milna chahiye but hame same hi value mil rhi hai

// -------------------------------------------------------------------------------------------------------------------

// link - https://javascriptpatterns.vercel.app/patterns/design-patterns/singleton-pattern

let instance;

// 1. Creating the `Counter` class, which contains a `constructor`, `getInstance`, `getCount`, `increment` and `decrement` method.
// Within the constructor, we check to make sure the class hasn't already been instantiated.
class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instance!");
        }
        this.counter = counter;
        instance = this;
    }

    getCount() {
        return this.counter;
    }

    increment() {
        return ++this.counter;
    }

    decrement() {
        return --this.counter;
    }
}

// 2. Setting a variable equal to the the frozen newly instantiated object, by using the built-in `Object.freeze` method.
// This ensures that the newly created instance is not modifiable.
const singletonCounter = Object.freeze(new Counter());

// 3. Exporting the variable as the `default` value within the file to make it globally accessible.
export default singletonCounter;

// --------------------------------

// Objects
// We can also directly create objects without having to use a class, which can lead to much simpler and cleaner code.
// To create a singleton using a regular object, we have to:

let counter = 0;

// 1. Create an object containing the `getCount`, `increment`, and `decrement` method.
const counterObject = {
    getCount: () => counter,
    increment: () => ++counter,
    decrement: () => --counter,
};

// 2. Freeze the object using the `Object.freeze` method, to ensure the object is not modifiable.
const singletonCounter = Object.freeze(counterObject);

// 3. Export the object as the `default` value to make it globally accessible.
export default singletonCounter;

// We could even export the frozen object directly, without having to declare multiple variables.
let counter = 0;

export default Object.freeze({
    getCount: () => counter,
    increment: () => ++counter,
    decrement: () => --counter,
});