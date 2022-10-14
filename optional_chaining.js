// By - xplodivity youtube channel
// Optional chaining in javascript => ?.

// optional chaining for object
// step - 1
// const animal = {
//     name : "tyson",
//     age : 4,
//     attributes : {
//         speed : "20km/h",
//         height : "small",
//     },
// };

// function printAnimal(animal){
//     console.log(animal.attributes.speed);  // 20km/h
//     console.log(animal.attributes.height);  // small
// }

// printAnimal(animal);

// step - 2(problem)
// const animal = {
//     name : "tyson",
//     age : 4,
//     // attributes : {
//     //     speed : "20km/h",
//     //     height : "small",
//     // },
// };

// function printAnimal(animal){
//     console.log(animal.attributes.speed);  // Uncaught TypeError: Cannot read properties of undefined (reading 'speed') at printAnimal
// }

// printAnimal(animal);

// step - 3(solution) - so people used to do before like that using AND operator (&&)
// const animal = {
//     name : "tyson",
//     age : 4,
//     // attributes : {
//     //     speed : "20km/h",
//     //     height : "small",
//     // },
// };

// function printAnimal(animal){
//     console.log(animal && animal.attributes && animal.attributes.speed);   // undefined
//    // animal exists then go on to the next part which is animal.attributes if animal.attributes gives true only then go to animal.attributes.speed
//    // but in this case animal.attributes will return us undefined so null or undefined is falsy value
//    //  so it won't go to animal.attribute.speed

//    // instead of writing animal && animal.attributes && animal.attributes.speed 
//    console.log(animal?.attributes?.speed);  // undefined
// }

// printAnimal(animal);


// optional chaining for function

// const animal = {
//     name : "tyson",
//     age : 4,
//     attributes : {
//         speed : "20km/h",
//         height : "small",
//     },
//     bark() {
//         console.log("bark");
//     },
// };

// function printAnimal(animal){
//     animal.bark();  // Uncaught TypeError: animal.bark is not a function at printAnimal
//     animal?.bark?.();  // yha undefined nhi show hoga because of function // now it will not show any error
// }

// printAnimal(animal);


// optional chaining for array

// const animal = {
//     name : "tyson",
//     age : 4,
//     // mood : ["sab","happy"],
// };

// function printAnimal(animal){
//     // console.log(animal.mood[0]);  // object_concept.js:371 Uncaught TypeError: Cannot read properties of undefined (reading '0') at printAnimal
//     console.log(animal?.mood?.[0]);  // undefined
// }

// printAnimal(animal) 