// Inversion of control - inversion of control is another problem we see while using callbacks.
// inversion of control is like that you loose the control of your code when we are using callbacks.


// Example-1 - callback hell by coder's gyan 
// function register(callback){
//     setTimeout(() =>{
//         console.log("Register End");
//         callback();
//     },1000);
// }
// function sendEmail(callback){
//         setTimeout(() => {
//         console.log("email end");
//         callback();
//     }, 2000);
// }
// function login(){
//         setTimeout(() => {
//         console.log("login end");
//     }, 1000);
// }

// register(function(){
//     sendEmail(function(){
//         login();
//     })
// })
// console.log("other application work");


// Example - creating problem to use promise 
// let data = 1;
// console.log("first output",data);
// data = 2;
// setTimeout(()=>{
//     console.log("timer",data);
// },2000); 
// data = 3 ;
// console.log("last output",data);
// output - first output 1
//          last output 3
//          timer 3



// Example - 14(2) => callback hell (By thapa technical) 
// const getRollNo = () => {
//     console.log("outer console");
//     setTimeout( ()=>{
//         console.log("API getting roll no");
//         let roll_no = [1,2,3,4,5];
//         console.log(roll_no);
        
//         setTimeout( (rollno)=>{
//             const biodata = {
//                 name: 'hansraj',
//                 age: 26
//             }
//             console.log(`My roll no is ${rollno}. My name is ${biodata.name} and i am ${biodata.age} year old.`);
                    
//        
//             setTimeout( (name) => {
//                 biodata.gender = 'male';
//                 console.log(`My roll no is ${rollno}. My name is ${biodata.name} and i am ${biodata.age} year old. I am an alpha ${biodata.gender} `);
//             }, 2000, biodata.name);
//         },2000, roll_no[1]);
//     },2000);
// }
// getRollNo();
// ouput -
// outer console
// API getting roll no 
// (5) [1, 2, 3, 4, 5]
// My roll no is 2. My name is hansraj and i am 26 year old.
// My roll no is 2. My name is hansraj and i am 26 year old. I am an alpha male 
