//! Bitwise Operator & Binary Operator 

// let e = 0; // ....0000000 (64 zero)
// let x = 1; // one is made of 64 bits that means - ....00000001 (63 zero and one)
// let y = 2; // .....0000010

// short hand

// 0 ---> 000
// 1 ---> 001
// 2 ---> 010
// 3 ---> 011
// 4 ---> 100

// AND (&&) this is an boolean operator and we'll talk about single AND(&)
// AND (&) operator 
// 0 & 0 = 0
// 0 & 1 = 0
// 1 & 1 = 1

// OR (|) operator
// 0 | 0 = 0
// 0 | 1 = 1
// 1 | 1 = 1

// XOR operator 
// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 1 = 0

//! How we convert decimal number into binary
// In order to convert, there is a simple function which is toString() function 

// console.log((1).toString()); // It won't convert into binary form, we have to pass base inside this toString() function
// console.log((1).toString(2)); // "1" // binary has two so we'll pass 2 in that
// console.log((23).toString(2)); // "10111"
// console.log((4).toString(2)); // "100"
// console.log((2333).toString(2)); // "100100011101"


//! How to convert binary number into decimal 
// console.log(parseInt("100100011101", 2));  // 2333 (type - Number)
// console.log(parseInt("100", 2));  // 4 (type - Number)
// Better format for it
// console.log((0b100100011101).toString(10)); // "2333" (type - String) // 0b This means binary 
// console.log((0b100).toString(10)); // "4" (type - string)
//! for hexa or octa
console.log((0b100100011101).toString(16)); // "91d"
console.log((0b100100011101).toString(8));  // "4435"


//! now we w'll see exp. of &,|,^
// console.log(0 & 1);  // 0
// console.log(0 | 1);  // 1
// console.log(0 ^ 1);  // 1

//! shift left operator and shift right operator 

// console.log(9 << 2);  // 36
// console.log((9).toString(2)); // "1001"
// 9<<2 = 100100 (36)
// console.log((0b100100).toString(10));  // "36"

// console.log(9 >> 2); // 2
// console.log((9).toString(2)); // "1001"
// 9>>2 = 0010 (2)
// console.log((0b0010).toString(10)); // "2"

