// ! Different ways to Exit JavaScript Loops
//1. Using Break Keyword
// As it can be seen when the vowel equals 'i' the condition stisfyies, the break statement is next, the for of loop stops with that.

// let vowels = ['a','e','i','o','u'];
// for(const vowel of vowels){
//     console.log(vowel);
//     if(vowel === 'i'){
//         break;
//     }
// }
// output - a e i


//2. Some Method 
// the some method is an array method that lets you check if atleast one of the elements of the given array
// satisfies the given condition and exits the loop.

// let vowels = ['a','e','i','o','u'];
// vowels.some(vowel => {
//     console.log(vowel);
//     return vowel === 'i';
// });
// output - a e i

//3. Every Method
// The every method is another array method which can be used to exit an array.
// it functions in exactly the opposite way of some method.

// In the above code the condition is to check if "every" element is an even number, when the condition fails the loop is exited.

let vowels = [2,10,12,7,16,14];
vowels.every(number => {
    console.log(number);
    return (number % 2 === 0);
});
// output - 2 10 12 





