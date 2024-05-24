// Singleton Design Pattern - jiska object sirf ek hi baar create ho sakta hai 
// ek object ka ek hi instance bnana chahiye do nhi bnana chahiye

// IIFE use karenge 
// IIFE hame - enclosed scope + closure + privacy provide karta hai 
// closure use karne ke karan global namespace pollute nhi hota hai mtlb bahar ki chije access kar sakta hai andar ki chije bahar use nhi kar sakte hai 
const singleton = (function() {
    let instance = null;
    function createInstance(){
       return { name: "hansraj", age: 91, score: Math.floor(Math.random() * 100) }; 
    }
    return {
        getInstance: function() {
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