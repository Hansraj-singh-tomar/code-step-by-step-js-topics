// Example - 1
// let x = 1000000000000000000;
// let y = 2000000000000000000;
// console.log(x);  // 1000000000000000000
// console.log(y);  // 2000000000000000000 
// console.log(x*y); // 2e+36

// Example - 2
// let x = 1000000000000000000n;
// let y = 2000000000000000000n;
// console.log(x);  // 1000000000000000000n
// console.log(typeof x);  // bigint
// console.log(y);  // 2000000000000000000n 
// console.log(x*y); // 2000000000000000000000000000000000000n


// Example - 3 
// let x = 100n;
// console.log(x); // 100n
// console.log(typeof x); // bigint

// let y = BigInt(100);
// console.log(y);  // 100n
// console.log(typeof y);  // bigint



// Example - 4
// behave with  0n
// let x = 100n;
// let y = 0n;
// console.log(y<x);  // true

// if(y){
//    console.log(y);  // y = 0n hone ke karan ye kuch bhi print nhi karegaa
// }


// Example - 5 
// limitations
// a bigint must be an integer not float value  
// let x = 100n;
// let y = 13n;
// console.log(x/y);  // 7n // yha decimal ke baad ki value show nhi kari


// Example - 6
// let x = 100n;
// let y = 13n;
// let z = "10";
// console.log(x==100); // true
// console.log(x===100); // false
// console.log(typeof 100);  // number
// console.log(typeof x);  // bigint

// console.log(Math.max(10,30));  // 30
// console.log(Math.max(x,y));  // Uncaught TypeError: Cannot convert a BigInt value to a number

// console.log(typeof z);  // string
// console.log(typeof +z);  // number
// console.log(typeof +x);  // Uncaught TypeError: Cannot convert a BigInt value to a number


