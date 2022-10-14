// write polyfill for document.getElementByClass
// By - code along with vishal youtube channel

// 1.
// let test = {
//     a : 1,
//     b : 2,
//     c : function() {
//         console.log(this);
//     }
// }
// test.c();  // {a: 1, b: 2, c: ƒ}

// let test2  = { ...test, d : 4 }
// test2.c();  // {a: 1, b: 2, d: 4, c: ƒ}  // here this, is pointing to the test2 object instead of test object


// 2. 
// document.findByClass = function(){
//     console.log(this);  // #document - findByClass,location,url, and all.
// }
// document.findByClass();

// 3. 
// doucument.body  // <body>

// 4. 
// document.body.children  // it will give us all child element of it's parent 

// 5. 
// document.body.classList 

// polyfill of document.getElementByClass();

// HTML part of it.
{/* <body>
    <div></div>
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <header class="wanted"></header>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <p></p>
        <p>
            <span></span>
            <span class="wanted">code with vishal</span>
            <span></span>
        </p>
    </div>
    <div class="wanted"></div>
    <div></div>
    <script src="scripts/findByClass.js"></script>
</body> */}

document.findByClass = function(requiredClass) {
    const root = this.body;  // this = document and document.body = <body> tag
    
    function search(node){
        let result = [];

        if(node.classList.contains(requiredClass)){
            return node;
        }

        for(element of node.children){
            result = result.concat(search(element));
        }

        return result;
    }
    
    return search(root);
}


// To Generate OTP

// var digit = "0123456789";
// let OTP = '';
// OTP = digit[Math.floor(6)];  // 6
// console.log(OTP);
// console.log(typeof OTP); // string 

// function generateOTP(){
//     var digit = '0123456789';
//     let OTP = '';
//     for(let i = 0; i < 6; i++){
//         OTP += digit[Math.floor(Math.random() * 10)];
//     }
//     return OTP;
// }
// console.log(generateOTP());
