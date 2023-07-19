// By technical Suneja
// ! First Example  
// function sum(a){
//     console.log("Live Viewers" + a );
//     var c = 4;
//     return function(b){
//         return a+b+c;
//     }
// }
//! yha a,b,c ka jo scope hai vo lexical scope hai 
// console.log(sum(2)(5));  // 11
// var store = sum(2);
// console.log(store(5)); // 11
//! closure concept me hamari value retain rehti hai jabki baki dusri language me esa nhi hota hai.
//! key point is that jo values hai ek baar jab function call ho jaye to vo value lost nhi hoti hai retain rehti hai  

//! second Example 
var sum = function(a,b,c){
    return{
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}
var store = sum(2,3,4);
console.log(store.getSumTwo()); // 5
console.log(store.getSumThree());  // 9