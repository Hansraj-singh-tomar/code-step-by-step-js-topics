// Example - 1
// let users = {
//     student:{
//         name : "Hansraj",
//         age : 25
//     }
// }
// console.log(users.student.name);  // Hansraj 



// Example - 2
// let users = {
//     student:{
//         name : "",
//         age : 25
//     }
// }

// // jab name nam ki property na hane par tab hame undefinde show karega 

// console.log(users.student.name); // undefined 

// // agar student ke andar name property nhi hai tab ye hame output me undefined show karega
// // but i want something else instead of undefined  

// console.log(users.student.name || 'unknown'); // unknown 



// Example - 3 
// man lo ab age bhi nhi hai student object ke andar
// let users = {
//     student:{
//         name : "",
//         age : 
//     }
// }
// console.log(users.student.age) // undefined
// console.log(users.student.age || 21);  // 21



// Example - 4
// man lo ab hamare pass age aa gyi student object ke andar tab ye still 21 age show karega which is wrong then what we do 
// iske liye solution kya hai hamare pass - undefined , true/false check karna padega
// but ham Nullish operator (??) ka use karenge  
let users = {
    student:{
        name : undefined,
        age : 0,
    }
}
// so users.student.name and users.student.age ki property undefined and null hone par hi hame 'unkonown' output and 21 age milegi
console.log(users.student.name ?? 'unknown');  // unknown
console.log(users.student.age ?? 21);  // 0
console.log(users.student.age || 21);  // 21
 
// nullish operator use karne ke baad ye ab na bool value, na hi string, na hi empty value ko check karenge 
// ye sirf undefined and null ko hi check karenge  