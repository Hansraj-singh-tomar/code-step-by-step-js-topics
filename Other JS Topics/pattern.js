// let max = Math.max([1,2,3]);
// console.log(max);  // NAN

// let max = Math.max.apply(null,[1,2,3])
// console.log(max);

// const num = [1,2,3];
// const minVal = Math.min(...num);
// console.log(minVal);  // 1 
// const maxVal = Math.max(...num);  // yha three dot is num var. ko string me leta hai 
// console.log(maxVal);  // 3

// let max = Math.max(1,2,3);
// console.log(max);  // 3

//! nCr , 0! = 1, nC0 = 1

// function factorial(n){
//     var fact = 1;
//     for(i=1;i<=n;i++){
//         fact = fact * i;
//     }
//     return fact;
// }

// function nCr(n,r){
//     let numerator = factorial(n);
//     let denomirator = factorial(r) * factorial(n-r);
//     return numerator/denomirator;
// }

// console.log(nCr(8,0));  // 1
// console.log(nCr(5,3));  // 10 

// console.log(factorial(6)); // 720


// let arr = [1,23,4];
// // console.log(arr.length); // 3
// function printArr(array){
//     // 1.
//     // let arr2 = [];
//     // for(i=0;i<arr.length;i++){
//     //      arr2.push(arr[i]);
//     // }
//     // return arr2;

//     // 2.
//     array.forEach(element => {
//        console.log(element); 
//     });
// }

// console.log(printArr(arr));

// 1.
// var n = 2 ;
// function squa(num){
//     var ans = num * num;
//     return ans;
// }
// var squa2 = squa(n);
// var squa4 = squa(4);

// 2. 
// console.log(x);

// var x = 7;
// function getName(){
//     console.log('Namaste Js');
// }
// getName();
// console.log(x);
// output - namaste js undefined

 
// console.log(x); // undefined 
// console.log(getName); // undefined
// var x = 7;
// var getName = () => {
//     console.log('namaste js');
// }

// getName();  // getName is not a function 
// console.log(x);  
// console.log(getName); 
// var x = 7;
// var getName = () => {
//     console.log('namaste js');
// }

// let a = 20;
// function x(){
//     var a = 20;
//     console.log(a);  // 20 
// }
// x();

// function a(){
//     let x = 7;
//     function b(){
//         console.log(x);
//     }
//     return b;
// }

// let z = a();
// z();


// let a ;
// const b = 200;
// a = 100 ;
// console.log(a);

// let a = 20;
// {
//     let a = 30;
//     console.log(a); // 30 
// }
// console.log(a);  // 20 


// let a = 10;
// {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);