// Example - 1
// let obj1 = {
//     name : "ninja",
//     batch : function(){
//         console.log(this.name);
//     }
// }
// let obj2 = {
//     name : "hansraj",
//     batch : obj1.batch()
// }
// obj1.batch();  
// obj2.batch(); 
// output - 
//         ninja
//         ninja
//         Uncaught TypeError: obj2.batch is not a function



// Example - 2 
// let obj1 = {
//     name : "ninja",
//     batch : function(){
//         console.log(this.name);
//     }
// }
// let obj2 = {
//     name : "hansraj",
//     batch : obj1.batch
// }
// obj1.batch(); // ninja 
// obj2.batch(); // hansraj 

// example - 3 

// let obj1 = {
//     name : "ninja",
//     batch : function(){
//         console.log(this.name);
//     }
// }
// let obj2 = {
//     name : "hansraj",
//     batch : obj1.batch
// }
// var name = "hansraj2"
// let newBatch = obj1.batch;  
// newBatch(); // hansraj2
// obj1.batch(); // ninja 
// obj2.batch(); // hansraj 



// object concept by RoadsideCoder

// Example - 1
// let nums = {
//     a : 100,
//     b : 200,
//     title : "My Nums",
// }
// console.log(nums);   // {a: 100, b: 200, title: 'My Nums'}

// multiplyByTwo(nums);   
// function multiplyByTwo(obj){
//     for(key in obj){
//         if(typeof obj[key] === 'number'){
//             obj[key] = obj[key] * 2;
//         }
//     }
// }

// console.log(nums);  // {a: 200, b: 400, title: 'My Nums'}


// Example - 2

// const a = {};
// const b = { key : "b"};
// const c = { key : "c"};

// a[b] = 123;
// console.log(a);  // {[object Object]: 123}
// // a["[object Object]"] = 123;

// a[c] = 456;
// // a["[object Object]"] = 456;
// console.log(a);  // {[object Object]: 456}

// // yha [object Object] key hai b or c ki that's why we are getting this output 
// console.log(a[b]);  // 456
// console.log(a[c]);  // 456

// Example - 3
// what is JSON.stringify and JSON.parse ?

// const user = {
//     name : "hasnraj",
//     age : 23
// };

// // console.log(JSON.stringify(user));  // {"name":"hasnraj","age":23}

// const strObj = JSON.stringify(user);
// // console.log(strObj);  // {"name":"hasnraj","age":23}

// // console.log(strObj.name);  // undefined 
// // console.log(JSON.parse(strObj));  // {name: 'hasnraj', age: 23}
// // console.log(JSON.parse(strObj).name);  // name 

// // we can't store object inside an our local storage we have to change our object into string, for that we will use JSON.stringify(obj). 

// localStorage.setItem("test",strObj); // test   {"name":"hansraj","age":23}
// console.log(localStorage.getItem("test"));  // {"name":"hasnraj","age":23}
// console.log(JSON.parse(localStorage.getItem("test")));  // {name:"hasnraj",age:23}

// // what if we set direct object in our local storage
// localStorage.setItem("test",user);  // test   [object object]
// console.log(localStorage.getItem("test"));  // [object object]


// Example - 4 
// object with spread operator
// console.log(..."hansraj");  // h a n s r a j
// console.log([..."hansraj"]);  //  ['h', 'a', 'n', 's', 'r', 'a', 'j']
// console.log({..."hansraj"});  //  {0: 'h', 1: 'a', 2: 'n', 3: 's', 4: 'r', 5: 'a', 6: 'j'}

// const user = {name : 'hansraj', age : 25};
// const admin = {admin : true, ...user};
// console.log(admin);  // {admin: true, name: 'hansraj', age: 25}


// Example - 5

// const setting = {
//     username : "hansraj",
//     level : 19,
//     health : 90,
// };

// // it will only stringify level and health property and completely ignore the username property
// const data = JSON.stringify(setting,["level","health"]);
// console.log(data);  // {"level":19,"health":90}


// Example - 6 

// const shape = {
//     radius : 10,
//     diameter(){
//         return this.radius * 2;
//     },
//     perimeter : () => 2 * Math.PI * this.radius,  // here this refereing to global object
// }
// console.log(shape.diameter());  // 20
// console.log(shape.perimeter());  // NAN


// Example - 7
// object destructuring
// let user = {
//     name : "hansraj",
//     age : 24,
// };

// const {name,age} = user;
// console.log(name);  // hansraj 
// console.log(age);  // 24

// problem with rename property
// const name = "piyush";
// const {name} = user;
// console.log(name);  // Uncaught SyntaxError: Identifier 'name' has already been declared  
 
// solution of problem 
// const name = "piyush";
// const {name : myName} = user;
// console.log(name);  // piyush


// Example - 8
// destructuring can be performed in nested way as well
// let user = {
//     name : "hansraj",
//     age : 24,
//     fullName : {
//         first : "piyush",
//         last : "Agarwal",
//     },
// };

// // generally we do like that without destructuring
// console.log(user.fullName.first); // piyush

// // using destructuring
// const name = "roadside coder";
// const {fullName : {first}} = user;
// console.log(first); // piyush


// example - 9 
// A rest parameter must be last in a parameter
// but spread operator can be used in between

// wrong 
// function getItems(fruitList,...args,favFruit){
//     return [...fruitList, ...args, favFruit]
// }
// console.log(getItems(["banana","apple"],"pear","orange"));  // Uncaught SyntaxError: Rest parameter must be last formal parameter


// Right
// function getItems(fruitList,favFruit,...args){
//     return [...fruitList, ...args, favFruit]
// }
// console.log(getItems(["banana","apple"],"pear","orange"));  // ['banana', 'apple', 'orange', 'pear']


// Example - 10
// let c = { greeting : "hey!"};
// let d;
// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);  // hello

// console.log({ a:1 } == { a:1});  // false 
// console.log({ a:1 } === { a:1});  // false

// let person = { name : "hansraj" };
// const members = [person];  // we are provideing member[0] index par person object
// person = null;
// console.log(members);  // [{name:'hansraj'}]

// let person = { name : "hansraj" };
// const members = [person];  // we are provideing member[0] index par person object
// person.name = null;
// console.log(members);  // [{name : null}]


// Example - 11 
// const value = { number: 10 };

// // This is a cloaning of object
// // let x = {...value};
// // console.log(x);  // { number:10}

// const multiply = (x = { ...value }) => {   // here we are passing default value 
//     console.log((x.number *= 2));
// };

// multiply(); // 20 
// multiply();  // 20
// multiply(value); // 20  // in this case it won't take default value x = { ...value }
// // so now it has modified this number:20 inside this object
// multiply(value); // 40


// Example - 12
// if we re-assigning a complete object then we can't modified it 
// function changeAgeAndReference(person){
//     person.age = 25;
//     person = {
//         name : "john",
//         age : 50,
//     };
//     return person;
// } 

// const personObj1 = {
//     name : "Alex",
//     age : 30,
// };

// const personObj2 =  changeAgeAndReference(personObj1)

// console.log(personObj1);  //  {name: 'Alex', age: 25}
// console.log(personObj2);  //  {name: 'john', age: 50}

