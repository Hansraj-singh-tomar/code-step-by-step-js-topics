// polyfill for Promise.any()
// By - The Indian Dev youtube channel
const promise1 = new Promise((resolve, reject) => {
    reject("TID success");
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("TID failed");
    },1000)
})

const promise3 = 10;

Promise.race([promise1,promise2,10]).then((result) => console.log(result)).catch((err) => console.log("error is",err)); // Error is TID success

Promise.race([10,promise1,promise2]).then((result) => console.log(result)).catch((err) => console.log("error is",err)); // 10

// when all promise was rejected that time output will... 
Promise.race([promise1,promise2]).then((result) => console.log(result)).catch((err) => console.log("error is",err)); // Error is TID success


// polyfill of Promise.race()
Promise.myRace = (arrayOfPromises) => {
    return new Promise((resolve,reject) => {
        for (let i = 0; i < arrayOfPromises.length; i++) {
           Promise.resolve(arrayOfPromises[i]).then((data) => resolve(data)).catch((e) => reject(e))
        }
    })
}
