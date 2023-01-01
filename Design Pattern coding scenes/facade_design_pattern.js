// esa common interface jisse ki ham chijo ki complexsity ko hide kar dete hai 

// multiple browser ke liye common interface likhenge
// like hamare pass ek button hai or uss par click karne par ham kuch operation perform karvana chahte hai but vo click event har koi browser spport nhi karta hai in that situation w'll use facade design pattern

 
// without Facade design pattern 
// const btn = document.querySelector('btn');
// btn.addEventListener('click', function(event){
// })

// using Facade design pattern - sare browser par ye work karega
function RegisterEventHandler(thisObject, thisEvent, thisHandler){
    if(window.addEventListener) {
        thisObject.addEventListener(thisEvent, thisHandler);
    } else if(window.attachEvent) {
        thisObject.attachEvent(thisEvent,thisHandler);
    } else {
        thisObject['on' + thisEvent] = thisHandler;
    }
}

const btn = document.querySelector('btn');

RegisterEventHandler(btn,'click', function(){
    console.log("Element has been clicked!");
})