// const btn = document.querySelector(".btn");
// console.log(btn);

// function handleClick(){
//    console.log("Add to cart");
// }

// function leadingDebouncing(fun,delay){
//    let timeoutId = null;
//    // jab ye function return hoga to apne sath fun(handleClick),delay(3000),timeoutId ye sab lekar return hota hai 
//    return function(...args){
//         if(timeoutId === null) {
//            fun.call(this,...args);
//         }
//         clearTimeout(timeoutId);
//         // console.log(timeoutId);  // first time click karne par mujhe isme null mil rha hai 
        
//         // agar first time button ko click karne ke baad 3sec. ka time lekar fir se button ko click karta hu to mera timeoutId null ho jayega 
//         // or agar mene 3sec hone se pehle hi button ko click kar diya to timeoutId null nhi ho payegi or leadingDebouncing function fir se call hoga but iss time timeoutId null nhi hogi jisse vo if condition me enter nhi kar payega
//         //  then vo next line me uss timeoutId ko clearTimeout se uss time ko clear kar dega 
//         // and again ham 

//         timeoutId = setTimeout(()=>{
//             // setTimeout fun hame ek id/time return karega jise hame null karna padega
//             console.log(timeoutId); // 6,7,8,9 kuch bhi dega output me
//             timeoutId = null;
//             console.log(timeoutId); // null
//         }, delay);
//    };
// }
// const leadedDebounce = leadingDebouncing(handleClick,3000);
// btn.addEventListener("click",leadedDebounce);


// trailing and leading function ko merge karne par 
const btn = document.querySelector(".btn");
console.log(btn);

function handleClick(){
   console.log("Add to cart");
}

function debounce(fun,delay, option = {leading: false, trailing: true}){
    let timeoutId = null;
    return function(...args){
        let isInvoked = false
        if(timeoutId === null && option.leading) {
           fun.call(this,...args);
           isInvoked = true;
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
            if(option.trailing && !isInvoked){
                fun.call(this,...args);
            }
            timeoutId = null;
        }, delay);
    };
}

const debounced = debounce(handleClick,3000, option = {leading: true, trailing: false});
btn.addEventListener("click",debounced);