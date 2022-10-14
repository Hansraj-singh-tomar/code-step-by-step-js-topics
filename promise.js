// example for create problem to use promise 
// let data = 1;
// console.log("first",data);
// data = 2;
// setTimeout(()=>{
//     console.log("timer",data);
// },2000)

// data = 3;
// console.log("last",data);

// output - 
// first 1
// last 3
// timer 3 // yha output me 2 hi aana chahiye tha 
// so iss problem ko resolve karne ke liye ham promise ka use karenge 



// example-2
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("code has been executed");
//     })
// })
// console.log(data);
// // output ->
// // Promise {<pending>}
// // [[Prototype]]: Promise
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: "code has been executed"

// data.then((result)=>{
//     console.log(result); // code has been executed
// })



// example-3
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:'anil',age:29});
//     })
// })
// data.then((result)=>{
//     console.log(result); 
// })
// console.log('hello'); 

// output -
// hello
// {name: 'anil', age: 29}



// example-4(1)
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("some issues")
//     },2000)
// })
// data.then((result)=>{
//     console.log(result); // Uncaught (in promise) some issues 
// })


// example-4(2)
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("some issues")
//     },2000)
// })
// data.then((result)=>{
//     console.log(result); 
// })
// .catch((err)=>{
//     console.log("catch block",err);  // catch block some issues
// })
// // inn dono console me se catch block vala console chla 



// example-5
// jab bhi ham API call karte hai to hame promise nhi bnana padta hai because API hame promise hi return karta hai
// let data = fetch('http://dummy.restapiexample.com/api/v1/employees');
// console.log(data);
// data.then((item)=>{
//     console.log(item);
// }).catch((err)=>{
//     console.log(err);
// });



// example-6 promise chaining - jab ham ek promise ka result dusre promise me resolve karte hai to usse ham promise chaining kahte hai 
// kabhi bhi API ko call karte time hame 2 promise ko resolve karna padta hai
// let data = fetch('http://dummy.restapiexample.com/api/v1/employees');
// data.then((item)=>{
//     // console.log(item);
//     return item.json();
// }).then((result)=>{
//     console.log("second output",result);
// }).catch((err)=>{
//     console.log(err);
// });



// Example-7
// promise chaining without fetch method
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10)
//     },2000)
// })
// data.then((item1)=>{
//     console.log("first",item1); // first 10
//     return item1*10;
// }).then((item2)=>{
//     console.log("second",item2); // second 100
//     return item2*10;
// }).then((item3)=>{
//     console.log('third',item3); // third 1000
// }).catch((err)=>{
//     console.log("catch block",err);  
// })



// Example-8
// what is finally keyword - isse hoga ye ki result kuch bhi aaye resolve or reject, hame uske baad apna dusra kam start kar dena hai 
// Q. esa kon sa function hota hai promise ke andar jo reject or resolve hone par dono par chalta hai
// Ans -  finally()
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10);
//     },2000)
// })
// data.finally((item)=>{
//     console.log("finally block",item); // finally block undefined
// })
// data.then((item)=>{
//     console.log("then block",item); // then block 10
// }).catch((err)=>{
//     console.log("catch block",err);  
// })



// Example-9
// Error handling with promises
// 1.
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("data issue"))
//     },2000)
// })
// data.then((item)=>{
//     console.log("then block",item);
// }).catch((err)=>{
//     console.log("catch block",err); // catch block Error: data issue
// })

// 2.
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         throw new Error("data issue");
//     },2000)
// })
// data.then((item)=>{
//     console.log("then block",item);
// }).catch((err)=>{
//     console.log("catch block",err);  // Uncaught Error: data issue
// })

// 3.
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        resolve("done");
//     },2000)
// })
// data.then((item)=>{
//     throw new Error("data issue");
//     console.log("then block",item);
// }).catch((err)=>{
//     console.log("catch block",err);  // Uncaught Error: data issue
// })



// Example-10(1)
// jab hamare 3 se 4 promise parallarly work karte hai tab promise.all(),promise.allsettled(),promise.race() kam aate hai
//  promise.all() - teeno promise resolve hone ke baad hi hame output milega, chahe koi promise kitna hi time kyo na le rha ho
//  or teeno promise me se ek bhi promise nhi chla to kuch bhi output me nhi milega
// promise.allsettled - ye hame output me btata hai ki kitne promise resolve huye or kitne reject 
// promise.race hame teeno promise me se jo pehle resolve hoga uska output hame milega

// let  data = Promise.all([
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("2 second");
//         },2000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("1 second");
//         },1000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("4 second");
//         },4000)
//     })
// ]);
// data.then((item)=>{
//     console.log("then block",item); // then block (3) ['2 second', '1 second', '4 second']
// }).catch((err)=>{
//     console.log("catch block",err);
// })

// Example-10(2) => ek bhi promise reject hone par ye catch block me chale jayega
// jo ki shi nhi hai to ham Promise.allsettled() method ka use karenge
// let  data = Promise.all([
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("2 second");
//         },2000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("1 second");
//         },1000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("4 second");
//         },4000)
//     })
// ]);
// data.then((item)=>{
//     console.log("then block",item); 
// }).catch((err)=>{
//     console.log("catch block",err); // catch block 1 second
// })


// Example-11(1) => Promise.allSettled()
// let  data = Promise.allSettled([
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("2 second");
//         },2000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("1 second");
//         },1000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("4 second");
//         },4000)
//     })
// ]);
// data.then((item)=>{
//     console.log("then block",item);  
// }).catch((err)=>{
//     console.log("catch block",err); 
// })
// output - 
// then block (3) [{…}, {…}, {…}]
                // 0: {status: 'fulfilled', value: '2 second'}
                // 1: {status: 'fulfilled', value: '1 second'}
                // 2: {status: 'fulfilled', value: '4 second'}
                // length: 3


// Example-11(2)
// let  data = Promise.allSettled([
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("2 second");
//         },2000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("1 second");
//         },1000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("4 second");
//         },4000)
//     })
// ]);
// data.then((item)=>{
//     console.log("then block",item);  
// }).catch((err)=>{
//     console.log("catch block",err); 
// })

// output - 
// then block (3) [{…}, {…}, {…}]
                // 0: {status: 'fulfilled', value: '2 second'}
                // 1: {status: 'rejected', value: '1 second'}
                // 2: {status: 'fulfilled', value: '4 second'}
                // length: 3


// Example-12(1) Promise.race()
let  data1 = Promise.race([
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("2 second");
        },2000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("1 second");
        },1000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("4 second");
        },4000)
    })
]);
data1.then((item)=>{
    console.log("then block",item);   // then block 1 second
}).catch((err)=>{
    console.log("catch block",err); 
})


// Example-12(2) Promise.any() - isme reject() vale promise ko race se bahar kar deta hai 
let  data2 = Promise.any([
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("2 second");
        },2000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("1 second");
        },1000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("4 second");
        },4000)
    })
]);
data2.then((item)=>{
    console.log("then block",item);   // then block 2 second
}).catch((err)=>{
    console.log("catch block",err); 
})


// Example-13 - resolve and reject me se resolve vala part chalega 
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("2 second")
//         reject("reject")
//     },2000)
// })
// data.then((item)=>{
//     console.log("then block",item); // then block 2 second
// }).catch((err)=>{
//     console.log("catch block",err);
// })


// Example - 14(1)
// Nesting of normal function and nesting of setTimeout function 
// function fun(){
//     console.log("outer function");
//     return function fun2(){
//         console.log("inner function");
//     }
// }
// fun()();
// output - 
// outer function 
// inner function 
        


// Example - 15 => By Thapa Technical(Promises)
// 1: 2s student roll no
// 2: 2s name and age
// 3: 2s gender

// promise Produce 
// const pobj1 = new Promise( (resolve, reject) => { // yha arrow function hamara executor function hai
//     setTimeout( () => {
//         let  roll_no = [1,2,3,4,5];
//         // console.log("hii");
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

// .. promise consume
// pobj1.then((rollno) => {
//     console.log(rollno);
//     getBiodata(rollno[1]).then((result)=>{
//         console.log(result);
//     })
// }).catch((err) => {
//     console.log(err);
// })

// second way and easy way and right way to consume promise
// pobj1.then((rollno) => {
//     console.log(rollno);
//     return getBiodata(rollno[1]);
// }).then((result)=>{
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })



// Example - 16 
// promises - by coder's gyan 
// function register(){
//     return new Promise((res,rej)=>{
//         setTimeout(() =>{
//             console.log("Register End");
//             res();
//         },1000);
//     })
// }
// function sendEmail(){
//     return new Promise((res,rej)=>{
//         setTimeout(() =>{
//             console.log("Email end");
//             res();
//         },2000);
//     })
// }
// function login(){
//     return new Promise((res,rej)=>{
//         setTimeout(() =>{
//             console.log("login End");
//         },1000);
//     })
// }
// register().then(sendEmail).then (login);
// console.log("other application work");

 
