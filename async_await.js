
// Example - 1
// async_await by code step by step
// async function getData(){
//     let handlePromise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("All Done");
//         },1000)
//     })
//     // before async_await
//     // handlePromise.then((x)=>{
//     //     console.log(x);  // All done
//     // })

//     // using async_await
//     let x = await handlePromise;
//     console.log(x);
// }
// getData();



// Example - 2 (handle two promises)
async function getData(){
    try {
        let handlePromise1 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("All Done 1");
            },1000)
        })
        let handlePromise2 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject("All Done 2");
            },1000)
        })
        // using async_await
        let x1 = await handlePromise1;
        let x2 = await handlePromise2;
        console.log(x1,x2);  // All Done 1 All Done 2   
    } catch (error) {
       console.log("error is - ",error); 
    }
    
}
getData();


// Example - 3 
// 3(1)
// console.log("a"); // a
// console.log("b"); // b 
// console.log("c"); // c

// 3(2)
// console.log("a");
// setTimeout(()=>{
//     console.log("b");
// },1000)
// console.log("c");
// output - 
// a c b

// 3(3)
// async function getData(){
//     let handlePromise1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("b");
//         },1000)
//     })
//     console.log("a");
//     let x1 = await handlePromise1;
//     console.log(x1); 
//     console.log("c");
// }
// getData();

// output - 
// a b c

// Example - 4
// async function getData(){
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     data = await data.json();
//     console.log(data);
// }
// getData();

// 4(1)
// async function getData(){
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     data = await data.json();
//     return data;
// }
// console.log(getData()); // Promise {<pending>}

// 4(2)
// async function getData(){

// }
// console.log(getData()); // Promise {<fulfilled>: undefined}

// 4(3)
// async function getData(){
//     return "hansraj"
// }
// console.log(getData()); // Promise {<fulfilled>: 'hansraj'}





// async_await by thapa technical
// const pobj1 = new Promise( (resolve, reject) => { // yha arrow function hamara executor function hai
//     setTimeout( () => {
//         let  roll_no = [1,2,3,4,5];
//         resolve(roll_no);
//         // reject("Error while communicating");
//     }, 2000);
// });

// const getBiodata = (indexdata) => {
//     return new Promise((resolve,reject) => {
//         setTimeout((indexdata)=> {
//             let biodata = {
//                 name: 'vinod',
//                 age: 26
//             }
//             resolve(`My roll no is ${indexdata}. My name is ${biodata.name} and i am ${biodata.age} year old.`);
//         }, 2000, indexdata)
//     });
// }

// async function getData(){
//     const rollnodata = await pobj1;
//     console.log(rollnodata);
//     const biodata = await getBiodata(rollnodata[1]);
//     console.log(biodata);  // My roll no is 2. My name is vinod and i am 26 year old.
//     return biodata;
// }
// getData();

// const getname = getData()
// console.log(getname); // promise return karega jo pending state me rhega 

// const getname = getData().then((myname) => {
//     console.log(myname);  // My roll no is 2. My name is vinod and i am 26 year old.
// })




// // promises by coder's gyan 
// Example - 1 (using promise)
// function A(){
//    return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("a");
//             res();
//         },1000);
//     })
// } 
// function B(){
//    return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("b");
//             res();
//         },2000);
//     })
// } 
// function C(){
//    return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("c");
//         },1000);
//     })
// } 

// A().then(B).then(C);



// Example - 2 (using async_await)
// async Await by coder's gyan 
// function A(){
//    return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("a");
//             res("hii hansraj");
//         },1000);
//     })
// } 
// function B(){
//    return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("b");
//             res();
//         },2000);
//     })
// } 
// function C(){
//    return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("c");
//         },1000);
//     })
// } 

// async function authentication(){
    // try {
//     let message_of_resolve = await A(); // yha ham resolve vale part ko handle kar rhe hai
//     console.log(message_of_resolve);
//     await B(); // yha hame console ka output mil rha hai
//     await C(); // yha hame console ka output mil rha hai 
    // } catch (error) {
        // console.log(error);
    // }
// }
// authentication();

// output - 
//  a 
//  hii hansraj 
//  b
//  c