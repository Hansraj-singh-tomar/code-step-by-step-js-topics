// example - 1 (creating problem to use call,aplly,bind function)
// let student = {
//     name:"hansraj",
//     lastname:"tomar",
//     age:30,
//     getEmail:function(){
//         return `${this.name}.${this.lastname}@test.com`
//     }
// }
// let teacher = {
//     name:"devlali",
//     lastname:"tomar",
//     age:39,
//     getEmail:function(){
//         return `${this.name}.${this.lastname}@test.com`
//     }
// }
// console.log(student.getEmail());
// console.log(teacher.getEmail());

// example - 2 (try to solve problem with general code but it won't work in this case)
// function getEmail(name,lastname){
//     return `${name}.${lastname}@test.com`
// }

// let student = {
//     name:"hansraj",
//     lastname:"tomar",
//     age:30,
//     getEmail:getEmail(this.name,this.lastname)
// }
// console.log(student.getEmail); // undefined.undefined@test.com


// Example - 3 
// function getEmail(data){
//     console.log(this); // ye hame window object show karega as a output 
// }

// let student = {
//     name:"hansraj",
//     lastname:"tomar",
//     age:30,
//     getEmail:getEmail(this),
// }



// Example - 4
// let student = {
//     name:"hansraj",
//     lastname:"tomar",
//     age:30,
//     getEmail:function(){
//         return `${this.name}.${this.lastname}@test.com`
//     }
// }
// let teacher = {
//     name:"devlali",
//     lastname:"tomar",
//     age:39,
// }
// console.log(student.getEmail.call(teacher)); // devilal.tomar@test.com


// Example - 5 (using common function)
// function getEmail(){
//     return `${this.name}.${this.lastname}@test.com`
// }
// let student = {
//     name:"hansraj",
//     lastname:"tomar",
//     age:30,
// }
// let teacher = {
//     name:"devlali",
//     lastname:"tomar",
//     age:39,
// }
// function chooseSubject(sub1,sub2){
//     console.log(sub1,sub2); // maths, english
//     // return sub1;
//     return [sub1,sub2];  
// }
// console.log(getEmail.call(student)); // hansraj.tomar@test.com
// console.log(getEmail.call(teacher)); // devilal.tomar@test.com

// console.log(chooseSubject.call(teacher,"maths","english")); // maths   ->>> only type of params

// console.log(chooseSubject.apply(teacher,["maths","english"])); // (2)['maths','english']   ->>>> only array type of params

// console.log(getEmail.bind(teacher)); // ye ek function ko bnakar rakh dega but won't call it 

// let callAnotherTime = getEmail.bind(teacher)(); ->>>>> agar yhi call kar diya to call, apply ka use karne me hi faayda hai  
// console.log(callAnotherTime);  // devilal.tomar@test.com

// let callAnotherTime = getEmail.bind(teacher);   // best way to use bind method
// console.log(callAnotherTime());  // devilal.tomar@test.com


// Example - 6 (now we will add property in object using call method)
// let /teacher = {
//     firstName: "devilal",
//     lastName: "tomar",
//     age : 39,
// };

// function getEmail(){
//     return this.email = `${this.firstName}.${this.lastName}@test.com`;
// }

// function chooseSubject(sub1,sub2){
//     return this.subject = [sub1,sub2]
// }

// console.log(teacher);  // {firstName: 'devilal', lastName: 'tomar', age: 39}

// call
// console.log(getEmail.call(teacher)); // devilal.tomar@test.com
// console.log(teacher); // {firstName: 'devilal', lastName: 'tomar', age: 39, email: 'devilal.tomar@test.com'}

// apply
// console.log(chooseSubject.apply(teacher,["hindi","english"]));  // ['hindi','english']
// console.log(teacher);  // {firstName: 'devilal', lastName: 'tomar', age: 39, email: 'devilal.tomar@test.com', subject: (2)['hindi','english']}

// bind
// let callAnotherTime = getEmail.bind(teacher);
// console.log(callAnotherTime()); //  devilal.tomar@test.com
// console.log(teacher);  // {firstName: 'devilal', lastName: 'tomar', age: 39, email: 'devilal.tomar@test.com'}



// Road Side Coder - call,apply,bind

// O/P based question
// This never points to a function and setTimeout is obviously a function so this will not point to it and 
// instead it will point to the context of this function so what this function is pointing to the sestTimeout is pointing to the global object so that's why this is pointing to the global object   
// var status = "hii1";

// setTimeout(() => {
//     const status = "hii2";
//     const data = {
//         status : "hii3",
//         getStatus(){
//             return this.status;
//         },
//     };
//     console.log(data.getStatus()); // hii3
//     console.log(data.getStatus.call(this)); // hii1
// }, 0);

// Q. call printAnimals such that it prints all animals in object

// const animals = [
//     { species: "Lion", name: "King"},
//     { species: "Whale", name: "Queen"},
// ];

// function printAnimals(i){
//     this.print = function(){
//         console.log("#" + i + " " + this.species + ":" + this.name);
//     };
//     this.print();
// }

// // printAnimals.call(animals); // we can't do it like that 

// for(let i = 0; i < animals.length; i++){
//     printAnimals.call(animals[i],i);
// }
// output -
// #0 Lion:King
// #1 Whale:Queen

// Q. Append an array to an another array
// there is a lot of ways to do this using concat or writing a simple for loop for it
// concat returns us a completely a new array instead of modifying the original array 

// const array = ["a","b"];
// const elements = [0,1,2,3];
// // array.push(elements);  // (3) ['a', 'b', Array(4)]
// array.push.apply(array,elements);  // (6) ['a', 'b', 0, 1, 2, 3]
// console.log(array);

// Q. using apply to enhance Built-in functions
// // find min/max number in array
// const numbers = [5,43,2,6,4];
// console.log(Math.max(5,43,2,6,4)); // 43
// console.log(Math.max(numbers));  // NaN
// console.log(Math.max.apply(this,numbers));  // 43
// console.log(Math.max.apply(null,numbers));  // 43

// // loop based algorithm
// max = -Infinity, min = +Infinity;
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > max) {
//         max = numbers[i];
//     }
//     if(numbers[i] < min) {
//         min = numbers[i];
//     }
// } 


// Q. Bound function 
// function f(){
//     console.log(this);  // this will point to the window object
// }
// let user = {
//     g : f.bind(null),
// };
// user.g();

// Q. Bind chaining
// bind chainig doesn't exist
// once a function is bind to a particular object it will always be bound to that particular object.
// function f() {
//     console.log(this.name);  // john
// }
// f = f.bind({ name : "John"}).bind({name:"Ann"});
// f();


// Q. Fix the code 
// function checkPassword(success, failedd) {
//     let password = prompt("Password?","");
//     if(password == "Roadside Coder") success();
//     else failedd();
// }

// let user = {
//     name : "hansraj singh tomar",
//     loginSuccessful() {
//         console.log(`${this.name} logged in`);
//     },
//     loginFailed() {
//         console.log(`${this.name} failed to log in`);
//     },
// };

// checkPassword(user.loginSuccessful.bind(user),user.loginFailed.bind(user));


// Q. Partial application for login function 
// function checkPassword(ok, fail) {
//     let password = prompt("Password?","");
//     if(password == "Roadside Coder") ok();
//     else fail();
// }
// let user = {
//      name : 'hansraj singh tomar',
//      login(result) {
//         console.log(this.name + (result ? "login successful" : "login failed"));
//      },
// };
// checkPassword(user.login.bind(user,true), user.login.bind(user,false));


// Q. Explicit binding with Arrow function 
// const age = 10;
// var person = {
//     name: "hansraj",
//     age: 20,
//     getAgeArrow: () => console.log(this.age), // here this will point only window object
//     getAge: function(){
//         console.log(this.age);
//     },
// };

// var person2 = { age: 24};
// person.getAgeArrow.call(person2); // undefined
// person.getAge.call(person2);  // 24

// ---------------------------------------------------------------

// Pollyfill for call method

// let car1 = {
//     color : "Red",
//     company : "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
// }
// // purchaseCar.call(car1,"$", 50000000);   // I have purchased Red - Ferrari car for $50000000

// // pollyfill
// Function.prototype.myCall = function(context = {}, ...args){
//    if(typeof this !== "function") {
//     throw new Error(this + "It's not callable");
//    }
//    context.fn = this;
//    context.fn(...args); 
// };
// purchaseCar.myCall(car1, "$", 60000000);   // I have purchased Red - Ferrari car for $60000000



// Pollyfill for apply method
// let car1 = {
//     color : "Red",
//     company : "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
// }
// // purchaseCar.call(car1,"$", 50000000);   // I have purchased Red - Ferrari car for $50000000

// // pollyfill
// Function.prototype.myApply = function(context = {}, args = []){
//    if(typeof this !== "function") {
//     throw new Error(this + "It's not callable");
//    }
//    if(!Array.isArray(args)){
//     throw new Error("CreateList From Array like called on non-object");
//    }
//    context.fn = this;
//    context.fn(...args);  // here we are using spread operator
// };
// purchaseCar.myApply(car1, ["$", 60000000]);   // I have purchased Red - Ferrari car for $60000000



// Pollyfill for Bind method

// let car1 = {
//     color : "Red",
//     company : "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
// }
// // const newFunc = purchaseCar.bind(car1);
// // newFunc("$",50000000);  // I have purchased Red - Ferrari car for $50000000


// Function.prototype.myBind = function(context = {}, ...args){
//     if(typeof this !== "function") {
//         throw new Error(this + "cannot be bound as it's not callable");
//     }
//     context.fn = this;
//     return function (...newArgs){
//         return context.fn(...args, ...newArgs);
//     }
// };
// const newFunc = purchaseCar.myBind(car1,50000000);
// newFunc("$");  // I have purchased Red - Ferrari car for $50000000
