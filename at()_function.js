// New feature of ECMA 2022
// calculate Array length from both end
// Better Performance 
// It work similar to array.length()


let data = [3,4,5,6,7];

// isme itni problem nhi hai kyonki ham yha just number de rhe hai  
console.log(data[0]);  // 3

// agar hamare pass array me lakho value/data hai tab ye operation data[data.length-1] costly ban jata hai 
console.log(data[data.length-1]);  // 7 

// solution of this problem at() method
console.log(data.at(1));  // 4
console.log(data.at(-1)); // 7 
console.log(data.at(-3)); // 5
console.log(data.at(-30)); // undefined
console.log(data.at()); // 3  // bydefault it will show first value of array
