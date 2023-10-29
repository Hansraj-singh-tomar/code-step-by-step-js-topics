// Promise.any() method by - The Indian Dev
// Promise.race() method by - The Indian Dev


// resolve() vale case me 

const promise1 = new Promise((resolve, reject) => {
    resolve("TID success");
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("TID failed");
    },1000)
})

const promise3 = 10;

Promise.race([promise1,promise2,10])
    .then((result) => console.log(result))
        .catch((err) => console.log(err)); // TID success

Promise.any([promise1,promise2,10])
    .then((result) => console.log(result))
        .catch((err) => console.log(err)); // TID success

Promise.race([10,promise1,promise2])
    .then((result) => console.log(result))
        .catch((err) => console.log(err)); // 10

Promise.any([10,promise1,promise2])
    .then((result) => console.log(result))
        .catch((err) => console.log(err)); // 10


// reject() vale case me 

// const promise1 = new Promise((resolve, reject) => {
//     reject("TID success");
// })

// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("TID failed");
//     },1000)
// })

// const promise3 = 10;

// Promise.race([promise1,promise2,10])
//     .then((result) => console.log(result))
//         .catch((err) => console.log("Error is",err)); // Error is TID success

// Promise.any([promise1,promise2,10])  // isme reject vala part race bahar ho jata hai
//     .then((result) => console.log(result))
//         .catch((err) => console.log(err)); // 10

// Promise.race([10,promise2,promise2])
//     .then((result) => console.log(result))
//         .catch((err) => console.log(err)); // 10

// Promise.any([10,promise1,promise2])
//     .then((result) => console.log(result))
//         .catch((err) => console.log(err)); // 10

// ------------------------------------------------------------------

// polyfill for Promise.any()
// const promise1 = new Promise((resolve, reject) => {
//     reject("TID success");
// })

// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("TID failed");
//     },1000)
// })

// const promise3 = 10;

// Promise.any([promise1,promise2,10]).then((result) => console.log(result)).catch((err) => console.log(err)); // 10

// Promise.any([10,promise1,promise2]).then((result) => console.log(result)).catch((err) => console.log(err)); // 10

// // when all promise was rejected that time output will... 
// Promise.any([promise1,promise2]).then((result) => console.log(result)).catch((err) => console.error(err)); // AggregateError: All promise were rejected

// // code of polyfill 
// Promise.myAny = (arrayOfPromises) => {
//     return new Promise((resolve,reject) => {
//        let counter = 0;
//        let errors = [];
//        for (let i = 0; i < arrayOfPromises.length; i++) {
//             Promise.resolve(arrayOfPromises[i]).then(data => {
//                 resolve(data)
//             }).catch((e) => {
//                 counter++;
//                 errors[i] = e;
//                 if(counter === arrayOfPromises.length){
//                     reject(new AggregateError(errors, "All promises were rejected"))
//                 }
//             })
//        } 
//     })
// }
// Promise.myAny([promise1,promise2,10]).then((result) => console.log(result)).catch((err) => console.log(err)); // 10
// Promise.myAny([10,promise1,promise2]).then((result) => console.log(result)).catch((err) => console.log(err)); // 10
// Promise.myAny([promise1,promise2]).then((result) => console.log(result)).catch((err) => console.error(err)); // AggregateError: All promises were rejected