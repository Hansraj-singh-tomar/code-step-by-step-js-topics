// Memoization is an optimization technique that can be used to reduce 
// time-consuming calculations by saving previous input to something 
// called cache and returning the result from it.

//1.
// let sum = 0;
// const calc = (n) => {
//     for(let i=0;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(calc(5));  // 15 

// 2.
// let num = 1;
// const fac = (n) => {
//     for(let i=1;i<=n;i++){
//         num*=i;
//     }
//     return num;
// }
// console.log(fac(5)); // 120 

// 3..
// let sum = 0;
// const calc = (n) => {
//     for(let i=0;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.time();
// console.log(calc(5));  // 15 
// console.timeEnd(); // default: 8.04ms

//! Memoize function using using if_in loop, which run at once.
// 4. 
// const calc = (n) => {
//     let sum = 0;
//     for(let i=0;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }

// const memoize = ( fun ) => {   // memoize function takes function and return another function, here we'll see best use of clousure.. 
//     let cache={}; // yha ham Map() ka use kar sakte hai 
//     return function(...args){
//         let n = args[0] ;   
//        if(n in cache){   // this is not for loop ye sirf ek baar hi chalega, condition hai ye or we can say it if loop
//            console.log('cache');
//            console.log(cache);
//            return cache[n]; // cache[5]
//        }else{
//           console.log("calculating first time");
//           let result = fun(n);  // yha normal function ki jagah ham call,apply,bind method ka use kar sakte hai 
//           cache[n] = result; //means - cache[5] = 15
//           return result;
//        }
       
//     }
// }

// console.time();
// const efficient = memoize(calc); // hamne memoize call kiya and calc pass kiya or ye hame ek or function return karega to hame usse stroe karna padega 
// console.log(efficient(5)); // iss efficient me jo bhi function return ke rup me mila hai vo isme store kiya gya hai 
// console.timeEnd();
// console.time();
// console.log(efficient(5));  
// console.timeEnd();
// /* outpput - 
        // calculating first time
        // 15
        // default: 8.713ms
        // cache
        // { '5': 15 }
        // 15
        // default: 4.488ms
// */


// console.time();
// const efficient = memoize(calc);
// console.log(efficient(6));  
// console.timeEnd();
// console.time();
// console.log(efficient(6));  
// console.timeEnd();

// /* output -
        // calculating first time
        // 21
        // default: 8.961ms
        // cache
        // { '6': 21 }
        // 21
        // default: 3.896ms
// */

// JS Quize -
// const {a:x=10,b:y=20} = {a:30}
// console.log(x);  // 30
// console.log(y);  // 20

//! Important Concept of object 
// const cache = {
//     '5' : 15,
//     '6' : 36,
//     name : 'hansraj',
//     7 : '19', // yha ye seven string me convert ho gya hai
// }
// console.log(cache); // { '5': 15, '6': 36, '7': '19', name: 'hansraj' }

// console.log(cache[5]); // 15

// cache[5] = 18;
// console.log(cache[5]);  // 18
// cache[8] = 64;
// console.log(cache[8]);  // 64

// console.log(cache[6]); // 36

// console.log(cache[0]); // undefined

// console.log(cache.name); // hansraj
// console.log(cache[7]); // 19  // iska color yellow nhi show kar rha hai 
// console.log(cache); // { '5': 18, '6': 36, '7': '19', '8': 64, name: 'hansraj' }

//! Using Map() method 
const calc = (n) => {
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
const memoize = (fun) => {
    let cache = new Map();
    // console.log(cache); // Map(0) {}
    return function(...args){
        // const n = args.toString();  // array ko string me convert karne ke liye use kiya gya hai 
        const n = args[0]; // iske through color yellow aa rha hai or toString() ka use kar ke color alag
        // console.log(n); // 5  
        if(cache.has(n)){
           console.log('cache');
           console.log(cache);
           return cache.get(n);
        //    return cache[n];  //! it won't work like that 
        }else{
            console.log("calculating first time");
            
            let result = fun(n); // yha normal function ki jagah ham call,apply,bind method ka use kar sakte hai 
            // let result = fun.apply(null,args);
                      
            // cache[n] = result; 
            cache.set(n, result)
            
            return result;
        }
    }
}
console.time();
const efficient = memoize(calc);
console.log(efficient(5,6));  // 15
console.timeEnd();
/*
calculating first time
15
default: 9.444ms
*/

console.time();
console.log(efficient(5));
console.timeEnd();
// /*
// cache
// Map(1) { '5' => 15 }
// 15
// default: 7.617ms
// */
