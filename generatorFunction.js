//! ye ese functions hote hai jinhe ham pause and resume kar sakte hai
// jiski exucution ko ham bich me rok sakte hai or resume kar sakte hai 

//TODO:1
// function* simpleGenerator(){  //! ye star* function ke sath ya function name ke sath dono jagah lga sakte hai
//     console.log('function called');
//     let x = 100;
    //! is function ke andar hame yields use karna pdte hai 
    // yield 'first step';
    // yield x;
    // yield 40;
    // let y = 'other'
    // yield y;
    //! yield means koi specific output. koi specific point par output deta hai 
    //! pehli bar jab ye fun. execute hoga to yield 20 tak execute hoga, then second time me yield 30 tak but yield 20 execute nhi hoga kyonki vo pehle execute ho chuka hai 
    
//     console.log('function called');
// }
// let sG = simpleGenerator();
// console.log(sG.next());  // {value: 'first step, done: false}
// console.log(sG.next());  // {value: 100, done: false}
// console.log(sG.next().value);  // 40
// console.log(sG.next());  // {value: 'other, done: false}
// console.log(sG.next());  // {value: undefined, done: true}
/*
output - 
        function called
        {value: 'first step, done: false}
        {value: 100, done: false}
        {value: 40, done: false}
        {value: 'other, done: false}
        function called
        {value: undefined, done: true}
*/

//TODO: 2 
//! Real Life use of Generators - Dynamic id generate karenge iski help se 
// me iske upar ek loop jaise hi me ek function par click karunga ye execute hoga but one step hi execute hogi isse or har baar ek new ID generate hokar milegi
// iske use se hamara function bar bar call nhi hoga, ek bar memory me aane par same function hi call hota rhega 

function* simpleGenerator(){
    let i = 100;
    while(true){
        yield i;
        i++; // ya direct yield(i++) bhi kar sakte hai 
        // yield(i++).toString();  // number se string me change ho gya hai 
    }
}

let sG = simpleGenerator();

function getNewId(){
    // console.log(sG.next());  // {value: undefined, done: true}
    document.getElementById("newId").innerText = sG.next().value;
}


// From Yahoo Baba 
        // 1.
        // function *generateIt(){
        //     console.log("First Message");
        //     console.log("Second Message");
        // }
        // let g = generateIt();
        // console.log(g); // generateIt{<suspended>}
        // g.next(); // first message // second message
        // console.log(g.next()); // {value: undefined, done: true}
        
        // 2.
        // function *generateIt(){
        //     console.log("First Message");
        //     yield "yield No. 1"; // yha par hamara code pause ho jayega iske baad ka koi bhi code run nhi hoga, iske aage ke code ko run karne ke liye hame next() method ko call karna padega 
        //     console.log("Second Message");
        //     yield "yield No. 2";
        // }
        // let g = generateIt();
        // console.log(g.next()); // first message  // {value: "yield no 1", done: false}
        // console.log(g.next()); // second message  // {value: "yield no 2", done: false}
        // console.log(g.next()); // {value: undefined, done: true}

        // 3.
        // function *generateIt(){
        //     yield ;
        // }
        // let g = generateIt();
        // console.log(g.next()); // {value: undefined, done: false}

        // 4. 
        // function *generateIt(){
        //     yield "First"
        // }
        // let g = generateIt();
        // console.log(g.next()); // {value: "first", done: false}
        
        // 5. 
        // function *generateIt(){
        //     yield "First"
        //     yield "Second"
        //     yield "Third"
        // }
        // let g = generateIt();
        // console.log(g.next()); // {value: "first", done: false}
        // g.next() // second vala yield skip ho gya hai 
        // console.log(g.next().value); // third

        // 6 - Using Loop 
        // function *generateIt(){
        //     yield "First"
        //     yield "Second"
        //     yield "Third"
        // }
        // let g = generateIt();
        // for(let value of g){
        //     console.log(value); // First // Second // Third
        // }
        
        // 7 = To get unique value
        // function *generateIt(){
        //     let i = 100;
        //     while(true){
        //          yield(i++);
        //     }
        // }

        // let g = generateIt();
        // console.log(g.next()); // {value: 100, done: false}
        // console.log(g.next()); // {value: 101, done: false}
        // console.log(g.next()); // {value: 102, done: false}
        // console.log(g.next()); // {value: 103, done: false}
        // console.log(g.next().value); //  103
        
        // 7.2 - using for_of loop
        // function *generateIt(){
        //     let i = 100;
        //     while(true){
        //          yield(i++);
        //     }
        // }

        // let g = generateIt();
        // for(let value of g){
        //     if(value > 105) break;
        //     console.log(value);
        // }

        // 8. 
        // function *generateIt(){
        //     let result = yield;
        //     // let result = (yield) * 10; // we can perform operations
        //     console.log(`Result: ${result}`); // Result: 500
        // }

        // let g = generateIt();
        // g.next();
        // g.next(500);

        // 9. 
        // function *generateIt(){
        //     let yArr = [yield, yield, yield];
            
        //     console.log(`Result: ${yArr}`); // Result: js,600,700
        //     // console.log(`Result: ${yArr[1]}`); // Result: 600
        // }

        // let g = generateIt();
        // g.next();
        // g.next("js");
        // g.next(600);
        // g.next(700);

        // 10.
        // function *generateIt(){
        //     yield 55;
        //     yield ["js","java","php"];
        // }

        // let g = generateIt();
        // console.log(g.next()); // {value: 55, done: false}
        // console.log(g.next()); // {value: Array(3), done: false}
        
        // 10.2
        // function *generateIt(){
        //     yield 55;
        //     yield* ["js","java","php"]; // to send single value for that we will use this(*) symbol
        // }
        
        // let g = generateIt();
        // console.log(g.next()); // {value: 55, done: false}
        // console.log(g.next()); // {value: "js", done: false}
        // console.log(g.next()); // {value: "java", done: false}
        // console.log(g.next()); // {value: "php", done: false}
        // console.log(g.next()); // {value: undefined, done: true}
        
        // 10.3 - using spread operator
        // function *generateIt(){
        //     yield 'php';
        //     yield 'js';
        //     yield 'java';
        // }

        // let g = generateIt();
        // console.log(g.next().value); // php
        // console.log([...g]); // ["js", "java"]
        
        // 10.4
        function *generateIt(){
            yield 'php';
            yield 'js';
            return ;
            yield 'java';
            yield 'c++';
            yield 'c#';
        }

        let g = generateIt();
        console.log(g.next().value); // php
        console.log(g.return('ending now'));  // {value: "Ending Now", done: true}
        console.log(g.return('ending now'));  // undefined