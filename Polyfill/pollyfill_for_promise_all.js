// Pollyfill for Promise.all() method
// By - the indian dev youtube channel

const promise1 = new Promise((resolve, reject) => {
    resolve("TID success");
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        // API call
        // console.log("=====TID")
        resolve("TID failed");
    },1000)
})

const promise3 = 10;

Promise.all([promise1,promise2,10]).then((item)=>{console.log("then block : ",item);}).catch((e)=>{console.log("catch block :",e);});
// output => then block :  (2) ['TID success', 'TID failed', 10]

// pollyfill for Promise.all() method
Promise.myAll = (arrayOfPromises) => {
    return new Promise((resolve,reject) => {
        const result = [];
        let counter = 0;

        for(let i = 0; i < arrayOfPromises.length; i++) {
           Promise.resolve(arrayOfPromises[i]).then((data) => {  // promise3 = 10 ko as a ouput show karne ke liye hamne Promise.resolve(arrayOfPromises[i]) likha hai 
                result[i] = data;
                counter++;
                if(counter === arrayOfPromises.length){
                    resolve(result);
                }
            }).catch((e) => {
                // console.log(e);
                reject(e);
            });
        }
    })
}

Promise.myAll([promise1,promise2,10]).then((item)=>{console.log("then block : ",item);}).catch((e)=>{console.log("catch block : ",e);})

// ouput -
// resolve hone par output => then block :  (2) ['TID success', 'TID failed', 10]
// reject hone par output => TID failed