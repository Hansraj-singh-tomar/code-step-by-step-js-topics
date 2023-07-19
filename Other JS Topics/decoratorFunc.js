//TODO: Decorator Function 
//! agar hame kisi function ki functionality ko bdana hai but uska code nhi change karna hai to uske liye ham decorator function ka use karenge. 
// 1. Decorator function apne andar ek function lega as a input 
// 2. Then ye apne andar ek function create kar lega and iss function ke andar jo hamne function pass kiya tha usse call kar dega and sath me kuch extra kam kar dega.
// 3. uske baad ye ek function return karega jo decorator ne kud create kiya tha, jise ham decorated function bolenge  
//!  jab decorator function as a input ek function lega and uss function me kuch extra work karega and uss function ko call bhi karega, after then iss decorated function ko return karega and apne code me run karega to do function call honge ek to mera decorated function with extra work and second jo function hamne pass kiya tha decorator function ko  

// example of Decorator function - 
// 1.
/*
function sum(){
   var a=2,b=3;
   console.log(a+b);
}
//!decorator function takes function and return function
function decorator(fun){
   return function(){
      //!  with some extra work
      fun();
      console.log("you are calling decorated function","and also",fun.name,"function");  // you are calling decorated function and also sum function 
   }
}
const decoratedFun = decorator(sum);
console.log(decoratedFun());
*/
/*  output -
      5
      you are calling decorated function sum // here sum is a function name 
*/

// 2.
function sum(a,b){
   console.log(a+b);
}
function decorator(fun){
   return function(...args){
      //  with some extra work
      console.log(`you are calling decorated function and also ${fun.name} function`);  // you are calling decorated function and also sum function 
      fun.call(null,...args); // null ki jagah this  bhi likh sakte hai but empty nhi chodna hai nhi to NAN milega output me  
   }
}
const decoratedFun = decorator(sum);
decoratedFun(2,3);
// outpout 
// you are calling decorated function and also sum function
// 5


// function add(x, y) {
//    return x + y;
//  }
 
//  let result = add.call(this, 10, 20);  // By default, the this inside the function is set to the global object i.e., window in the web browsers and global in Node.js.
//  console.log(result); // 30
 
//  let result = add.call(null, 10, 20);
//  console.log(result); // 30