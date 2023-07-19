// By code step by step 
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
        i++;
        // yield(i++).toString();  // number se string me change ho gya hai 
    }
}

let sG = simpleGenerator();

function getNewId(){
    // console.log(sG.next());  // {value: undefined, done: true}
    document.getElementById("newId").innerText = sG.next().value;
}