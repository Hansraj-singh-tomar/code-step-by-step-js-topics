// By code step by step 
// Prototype are the mechanism by which js objects inherit features from one another
// prototype mechanism hote hai, ek object ke feature ya properties ko dusre object me inherit karne ke liye
// prototype function,array,Number,String kisi ke sath bhi use ho sakta hai 
// sirf object isliye bolte hai kyonki, in js everthing is object. 

// Example - 1
// let student = {
//     name : "hansraj",
//     lastname : "tomar",
//     getFullName : function(){
//         return `${this.name} ${this.lastname}`
//     }
// }
// console.log(student);  // {name : "hansraj", lastname : "tomar", getName : f()}
// console.log(student.name); // hansraj
// console.log(student.lastname); // tomar
// console.log(student.getFullName());  // hansraj tomar


// Example - 2 
// let student = {
//     name : "hansraj",
//     lastname : "tomar",
//     birth : 2000,
//     getFullName : function(){
//         return `${this.name} ${this.lastname}`
//     },
//     getAge : function(){
//         let age = new Date().getFullYear()-this.birth;
//         return age;
//     }
// }
// let teacher = {
//     name : "pravin",
//     lastname : "sharma",
//     birth : 1980,
//     getFullName : function(){
//         return `${this.name} ${this.lastname}`
//     },
//     getAge : function(){
//         let age = new Date().getFullYear()-this.birth;
//         return age;
//     }
// }
// console.log(student.getAge());  // 22 
// console.log(teacher.getAge());  // 42 


// Example - 3 
// let users = {
//     getFullName : function(){
//         return `${this.name} ${this.lastname}`
//     },
//     getAge : function(){
//         let age = new Date().getFullYear()-this.birth;
//         return age;
//     }
// }
// let student = {
//     name : "hansraj",
//     lastname : "tomar",
//     birth : 2000,
// }
// let teacher = {
//     name : "pravin",
//     lastname : "sharma",
//     birth : 1980,
// }
// console.log(student.getAge());   // prototypes.js:70 Uncaught TypeError: student.getAge is not a function
// // niche vala console chalega hi nhi upar vale console ki error ke karan 
// console.log(teacher.getAge());


// Example - 4
// isme user object ka use na hane par bhi load ho jayega  

// let users = {
//     getFullName : function(){
//         return `${this.name} ${this.lastname}`
//     },
//     getAge : function(){
//         let age = new Date().getFullYear()-this.birth;
//         return age;
//     }
// }
// let student = {
//     name : "hansraj",
//     lastname : "tomar",
//     birth : 2000,
//     getAge : users.getAge,
// }
// let teacher = {
//     name : "pravin",
//     lastname : "sharma",
//     birth : 1980,
//     getAge : users.getAge,
//     getFullName : users.getFullName
// }
// console.log(student);  // {name: 'hansraj', lastname: 'tomar', birth: 2000, getAge: ƒ}
// console.log(teacher);  // {name: 'pravin', lastname: 'sharma', birth: 1980, getAge: ƒ, getFullName: ƒ}
// console.log(student.getAge());  // 22 
// console.log(teacher.getAge());  // 42


// Example - 5 
// isme users object tab load hoga jab hame iski jarurat hogi
// ye prototype ke andar store rehti hai jo browser ko heavy hone se bachata hai 

let users = {
    getFullName : function(){
        return `${this.name} ${this.lastname}`
    },
    getAge : function(){
        let age = new Date().getFullYear()-this.birth;
        return age;
    }
}
let student = {
    name : "hansraj",
    lastname : "tomar",
    birth : 2000,
}
let teacher = {
    name : "pravin",
    lastname : "sharma",
    birth : 1980,
}
teacher.__proto__ = users;
student.__proto__ = users;
console.log(student);  // {name: 'hansraj', lastname: 'tomar', birth: 2000,[[Prototype]]: Object}
console.log(teacher);  // {name: 'pravin', lastname: 'sharma', birth: 1980,[[Prototype]]: Object}
console.log(student.getAge());  // 22 
console.log(teacher.getAge());  // 42 



// Example - 6 - best and better way 
// let teacher = {
//     name : "pravin",
//     lastname : "sharma",
//     birth : 1980,
// }
// Object.prototype.getAge = function(){
//     let age = new Date().getFullYear()-this.birth; // yha this, jo bhi object iss getAge function ko call karega usse point karega  
//     return age;
// }
// Object.prototype.myAppData = "this is a simple project";
// console.log(teacher.getAge());  // 42 
// console.log(teacher.myAppData); // this is simple project