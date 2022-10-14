// Map,Filter,reducer are not return new array 
// By - Roadside Coder
// Q. what is map() method

// let nums = [1,2,3,4];

// const multiplyThree = nums.map((item,index,array)=>{
//     // console.log(item);  // 1 2 3 4 
//     // console.log(index);  // 0 1 2 3 4 
//     // console.log(array); // (4)  [1,2,3,4]
//                         // (4)  [1,2,3,4]
//                         // (4)  [1,2,3,4]
//                         // (4)  [1,2,3,4]
//     return item*3;
// })
// console.log(multiplyThree);   // (4) [3, 6, 9, 12]


// Q. Pollyfill for map() method

// prototype is doing is it's adding this myMap function to the method of this array in our current js file 
// jis this array ke upar ham myMap() method ko use karenge this usse hi point karega
// Array.prototype.myMap = function(cb){
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//        temp.push(cb(this[i],i,this)) 
//     }
//     return temp;
// }

// let nums = [1,2,3,4];
// const multiplyThree = nums.myMap((item,i,arr)=>{
//     return item*3;
// })
// console.log(multiplyThree);  // (4) [3, 6, 9, 12]


// Q. difference between map() vs forEach()

// 1.
// const arr = [2,5,3,4,7];

// const mapResult = arr.map((item) => {
//     return item+2;
// });

// const forEachResult = arr.forEach((item)=>{
//     return item+2;
// });

// console.log(mapResult);  // (5) [4, 7, 5, 6, 9] 
// console.log(forEachResult);  //  undefined

// const forEachResult = arr.forEach((item,i)=>{
//     arr[i] = item+2;
// });
// console.log(arr);  // (5) [4, 7, 5, 6, 9]


// 2. we can chain stuff on map
// const arr = [2,5,3,4,7];

// const mapResult = arr.map((item) => {
//     return item+2;
// }).filter()


// Q. what is filter method
// if the condition returns true, the element gets push into the output array 
// inshort filter returns only those element from the array which fullfills the provided criteria

// const nums = [1,2,3,4,5];
// const moreThanTwo = nums.filter((item) => {
//     return item > 2;
// });
// console.log(moreThanTwo); // (3) [3, 4, 5]


// Q. Pollyfill for filter() method
// Array.prototype.myFilter = function(cb){
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i],i,this)) {
//             temp.push(this[i])
//         }
//     }
//     return temp;
// };
// const nums = [1,2,3,4,5];
// const moreThanTwo = nums.myFilter((item) => {
//     return item > 2;
// });
// console.log(moreThanTwo); // (3) [3, 4, 5]



// Q. what is reducer method
// the reducer method reduces an array of values down to just one value just like map and filter
// reduce also execute the callback for each element of the array 
// so it receives two things first callback function and initial value 
// this callback function has an accumulator, the current value, the index and our array
// accumulator is basically the result of the previous computation, right now there is no computation at the begining right so this is going to be zero initially
// the current value is the current element of the array
// if there is no initial value,it takes first element of array as value for accumulator

// const nums = [1,2,3,4];
// const sum = nums.reduce((acc,curr)=>{
//     return acc + curr;
// },0);
// console.log(sum);  // 10


// Pollyfill for reducer() method
// Array.prototype.myReducer = function(cb,initialValue){
//     var accumulator = initialValue;
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]; 
//     }
//     return accumulator;
// };
// const nums = [1,2,3,4];
// const sum = nums.myReducer((acc,curr)=>{
//     return acc + curr;
// },0);
// console.log(sum);  // 10


// O/P based questions
// Q. Return only name of students in capital  

// let students = [
//     {name: "piyush", rollNumber: 31, marks: 80},
//     {name: "jenny", rollNumber: 15, marks: 69},
//     {name: "dilpreet", rollNumber: 3, marks: 35},
//     {name: "koushal", rollNumber: 7, marks: 55},
// ];

// first way using normal for loop
// let names = [];
// for (let i = 0; i < students.length; i++) {
//     names.push(students[i].name.toUpperCase());
// }
// console.log(names);  // (4) ['PIYUSH', 'JENNY', 'DILPREET', 'KOUSHAL']

// second way using map method
// const names = students.map(stu => {
//     return stu.name.toUpperCase();
// })
// console.log(names); // (4) ['PIYUSH', 'JENNY', 'DILPREET', 'KOUSHAL']


// Q. Return only details of those who scored more than 60 marks

// const details = students.filter((stu) => stu.marks > 60);
// console.log(details);
// 0: {name: 'piyush', rollNUmber: 31, marks: 80}
// 1: {name: 'jenny', rollNUmber: 15, marks: 69}

// Q. More than 60 marks and rollNumber greater than 15
// const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15)
// console.log(details);  //  0 : {name: 'piyush', rollNumber: 31, marks: 80} 


// Q. sum of marks of all students 
// const sum = students.reduce((acc, curr) => acc + curr.marks, 0);
// console.log(sum); // 239

// map, filter and reduce allows chaining 
// Q. Return only names of students who scored more than 60
// const names = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
// console.log(names);  // (2) ['piyush', 'jenny']


// Q. Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60 
// const totalMarks = students.map((stu) => {
//     if(stu.marks < 60){
//         stu.marks += 20;
//     }
//     return stu;
// }).filter((stu) => stu.marks > 60).reduce((acc,curr) => acc+curr.marks,0)
// console.log(totalMarks);  // 224
