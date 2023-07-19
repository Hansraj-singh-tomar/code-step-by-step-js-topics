// Apply, Call & Bind in JS

// TODO => Problem statement 1 for call method
// ! Call() Method
//     let userDetails1 = {
//         name : "hansraj singh tomar",
//         age : 26,
//         Designation: "Software Engineer",
//         printDetails: function (){
//             console.log(this.name);
//         }
//     }
//     userDetails.printDetails(); // yha this userDetails1 ko point kar rha hai 
    
//     let userDetails2 = {
//         name : "shiv yadav",
//         age : 24,
//         Designation: "Software Engineer"
//     }
// // ! Function Borrowing bol sakte hai 
//     userDetails1.printDetails.call(userDetails2); // call() method se ham ab printDetails method ko userDetails method ke liye use kar pa rhe hai  



// TODO => Problem statement 2 for call method
//     let userDetails1 = {
//         name : "hansraj singh tomar",
//         age : 26,
//         Designation: "Software Engineer",
//     }
// // ? Generic function bnaya hai jise koi bhi object use kar sakta hai    
//     let printDetails = function (){
//         console.log(this.name);
//     }
//     printDetails.call(userDetails1);  // yha hamne printDetail() function ko userDetails1 object ke liye call/use kiya hai



// TODO => Problem statement 3 for Call and Applly method, to know minner difference between Call() and Apply()
    let userDetails1 = {
        name : "hansraj singh tomar",
        age : 26,
        Designation: "Software Engineer",
    }
// ? Generic function bnaya hai jise koi bhi object use kar sakta hai    
    let printDetails = function (state, country){   // yha parameter me delhi and india aaa rha hai 
        console.log(`${this.name}, ${state}, ${country}`);  // hansraj singh tomar, Delhi, India 
    }
    printDetails.call(userDetails1,"Delhi","India");
    printDetails.apply(userDetails1,["Delhi","India"]);  // apply ke through ham array ke form me data send kar rha hai

    

// TODO => Problem statement 4 for Bind method 
// bind function says don't call printDetails function direct instead of store the data of this function and then use it.
    let newfun = printDetails.bind(userDetails1,"Delhi","India");
    console.log(newfun); // ye hame pura printDetails function show karega  
    newfun(); // hansraj singh tomar Delhi India

