/*
Debouncing - 
1. Most useful concept for performance optimization by limiting function calls on different events 
(typing events, scroll event, resize event, on other keyboard / mouse events)
2. very very common frontend interview question.
3. mann lo hamne event handler kisi input par lgaya and user kuch type karta hai to vo bar bar call hota hai, 
   uss chij ko limit karne ke liye ham debouncing ka use karte hai.   

Topics =
1. keyup vs input vs change input events 
2. this.value vs e.target.value 
3. what is debouncing ?
4. what are decorator function ?
5. implement debouncing.
6. understanding debouncing in depth. 

1. keyup vs input vs change input events
ans - 


*/

// const myInput = document.getElementById("input-event");

// keyup,keypress,keydown  
// change 
// input //! this one is important in these all event and we have to use input event in our project 
// teeno event same work karte hai but input vala event hi hame apne project me use karna hai 

// myInput ek object hai jiske pass ek property hai and ek or property hai value 

//TODO:1
// myInput.addEventListener("input", () => {
//     // console.log("function called");
//     console.log(myInput.value);
// });

//TODO:2
// myInput.addEventListener("input", (e) => {
//     console.log(e.target.value);  // e.target means ye jo input event hai ye konse element par trigger hua hai(myInput element par trigger hua hai ) 
// });

//TODO:3
// myInput.addEventListener("input", function(e){
//     console.log(this.value);  // yha this myInput element ko point karega  
// });                           // this ki value ek object ke equal hoti hai, arrow function ke case me this ki value window object ke equal ho jati hai that's why we don't use this inside arrow function 


//TODO:4 - Let's understand debouncing
// input event ke case me jitni bar input field me value change hogi utni bar function call hoga jo ki nhi hona chahiye  
// agar user ke input field me type karne me 1sec. ka gap aa jaye uske baad hi function call ho, us case me ham use karenge debouncing

// const myInput = document.getElementById("input-event");
// function findSuggestions(e){
//     console.log("suggestions for ", e.target.value);
// }
// myInput.addEventListener('input',findSuggestions);

//TODO: Ab dekhenge debouncing kam kaise karti hai 
// debounce ek function hota hai //! Debounce ek decorator function hai 
// debounce function kehta hai mujhe tum ek function(findSuggestions) dedo or mujhe dedo delay time (1sec. = 1000ms) as a input 
// yha hame debouncing implement karne se pehle hame decorator function ke bare me pta hona chahiye.

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
/*
// 2.
function sum(a,b){
   console.log(a+b);
}
function decorator(fun){
   return function(...args){
      //  with some extra work
      console.log(`you are calling decorated function and also ${fun.name} function`);  // you are calling decorated function and also sum function 
      fun.call(this, ...args);
   }
}
const decoratedFun = decorator(sum);
decoratedFun(2,3);
// outpout 
// you are calling decorated function and also sum function
// 5
*/


//! now w'll write a code of debounce and try to understand it's concept.
//1. first example 
//! isse trailing debouncing bhi bolte hai 
// function debounce(func,delay){
//    let timeoutId;  // ! what is timeoutId
//    return function(...args){
//       // fist line 
//       console.log(timeoutId);
//       if(timeoutId){  //first time me timeoutId undefined rhegi 
//          clearTimeout(timeoutId);
//       }
//       console.log(timeoutId);
//       // second line 
//       // setTimeOut hame ek timeoutId return karta hai 
//       timeoutId = setTimeout(()=>{
//          func.call(this, ...args); 
//          // func(...args)
//       },delay); 
//    };
// }

// const myInput = document.getElementById("input-event");

// //! this is owr normal function - to whom make us decorator function  
// function findSuggestions(e){
//     console.log("suggestions for", e.target.value);
// }

// //! now we decorate our normal function by passing it in debounce function
// const decoratedFun = debounce(findSuggestions,2000);
// myInput.addEventListener('input',decoratedFun);


//1. myInput.addEventListener('input',decoratedFun); iss line se ye hoga ki user input field me jo kuch bhi type karega to decorated function call hoga 
//2. findSuggestions() hamara normal function hai jise ham debounce function me pass karenge, ye debounce function hame ek function return karega jise ham decorated function bolenge

//3. ab ham debounce function ko samjhenge
//3.1 debounce function two parameter leta hai ek hamara normal function and second delay time 
//3.2 debounce function jab function return karta hai to apne sath debounce ke environment variable ko apne sath lekar return hota hai
//3.3 return function ke pass args,func,delay and timeoutId hai jo ki hamara decorated function hai, 
//3.4 ye function jab debounce function se return hua tha tab apne sath args,func,delay and timeoutId ko sath lekar return hua tha. or inn values ko ham tab hi change kar payenge jab ham decorated function ko call kar payenge  

//4  ab user input field me kuch type karega and decorated function call hoga tab kya hoga vo dekhenge
//4.1 debounce function me if vala block hamari pehli line hai and setTimeOut vala block second line hai 
//4.2 if ke andar starting me timeoutId undefined hai to pehli line to run hogi hi nhi 
//4.3 second line me setTimeOut hame ek timeoutId return karta hai ab timeoutId undefined nhi rhegi 
//4.4 setTimeOut se ham browser ko keh rhe hote hai ki mere liye itna time wait kar and uske baad fun function ko call kar dena 
//4.5 agar user ne 3000ms pure hone se pehle hi ek or character type kar diya to debounce function fir se uss character ke liye call hoga or hamara fun function bhi call nhi ho payega 
//4.6 ab jo pichle function se jo timeoutId generate hui thi usse ab ham if block me clear kar denge clearInterval function ki help se
//4.7 pichle function se jo timeoutId generate hui thi man lo vo hai 1, to hoga ye ki clearInterval se ham browser ko kehte hai ki jo hamne tumhe function kha tha jiski id(timeoutId) hai 1 usko cancel kar do usse hame call nhi karna hai 
//4.8 ab ham second line par gye or browser ko ek nya function diya kha 3000ms wait karo and fun function ko call kar do ni ke liye agar mene 3000ms se pehle hi another character ko type kar diya to yhi process fir se run hogi, agar user koi character type karne ke baad 3000ms ruk jata hai to fun function call ho jayega   


// second Example - 
//! example of Trailing Debouncing - ye input field, resize events, and scroll ke liye ek dam shi hai 
const myInput = document.querySelector(".myInput");

function printValue(e){
   console.log(e.target.value);
}
function debounce(fun,delay){
   let setTimeoutId;
   return function(...args){
      clearTimeout(setTimeoutId);
      setTimeoutId = setTimeout(()=>{
         fun.call(this,...args);
      },delay);
   };
}
const debouncedPrintValue = debounce(printValue,3000);
myInput.addEventListener('input',debouncedPrintValue);


//! example - 
// setTimeoutId = setTimeout(()=>{
//             console.log(setTimeoutId);
//             console.log(2+3);
//          },2000);
         
         // output = 1
         //          5  // ek sath 1 and 5 aa rha hai 
         
// setTimeoutId = setTimeout(()=>{
//    console.log(2+3);
// },2000);
// console.log(setTimeoutId);

// output = 1 and then 2sec. baad 5 aayega