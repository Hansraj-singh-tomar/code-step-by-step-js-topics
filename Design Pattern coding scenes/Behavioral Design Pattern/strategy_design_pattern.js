// kisi task ko karne ke various options hona or vo options group of sets se belong karna chahiye or inn options ko ham dynamically invoke kar sake

// context (person) (should hold ref to the strategy object like car, bus, train taki vo office phuch jaye)
// strategy (car,bus,train,swim)
// person => {car,bus,train,swim} => office


// context
// function JobPerson(strategy) {
//     this.strategy = strategy;
// } 

// JobPerson.prototype.goToOffice = function () {
//     return this.strategy();
// }

// // Group of strategies
// const trainStrategy = function () {
//     console.log(" Caught Train for the office ");
// } 
// const busStrategy = function () {
//     console.log(" Caught Bus for the office ");
// }
// const cabStrategy = function () {
//     console.log(" Took cab for the office ");
// } 


// // call strategy

// // const officeViaTrain = new JobPerson(trainStrategy)
// // const officeViaBus = new JobPerson(busStrategy)
// // const officeViaCab = new JobPerson(cabStrategy)
// // console.log(officeViaBus.goToOffice());  // Caught Bus for the office 
// // console.log(officeViaTrain.goToOffice());  // Caught Train for the office 

// // call strategy using loop 
// const arr = [];
// const officeViaTrain = new JobPerson(trainStrategy);
// arr.push(officeViaTrain);
// const officeViaBus = new JobPerson(busStrategy);
// arr.push(officeViaBus);
// const officeViaCab = new JobPerson(cabStrategy);
// arr.push(officeViaCab);

// arr.forEach(function(context) {
//     context.goToOffice();
// })


// Example - 2

// context
function Shipping(strategy) {
    this.strategy = strategy;
}
// getShippingProductCost ek interface hai
Shipping.prototype.getShippingProductCost = function () {
    return this.strategy();
}

// Group of strategies
const viaTrain = function () {
    console.log(" it's cost 200$ via train ");
}
const viaBus = function () {
    console.log(" it's cost 100$ via Bus ");
}
const viaCab = function () {
    console.log(" it's cost 300$ via Cab ");
}

// runtime
const arr2 = [];
const shippedViaTrain = new Shipping(viaTrain);
arr2.push(shippedViaTrain);
const shippedViaBus = new Shipping(viaBus);
arr2.push(shippedViaBus);
const shippedViaCab = new Shipping(viaCab);
arr2.push(shippedViaCab);

arr2.forEach(function (Shipping) {
    Shipping.getShippingProductCost();
})

// output
// it's cost 200$ via train
//  it's cost 100$ via Bus
// it's cost 300$ via Cab

// ----------------------------------------------------------------------------

// chat gpt 
// Defines a family of algorithms and makes them interchangeable.

class Payment {
    pay(strategy) {
        strategy.pay();
    }
}

class CreditCard {
    pay() {
        console.log('Paid with Credit Card');
    }
}

class PayPal {
    pay() {
        console.log('Paid with PayPal');
    }
}

const payment = new Payment();
payment.pay(new CreditCard()); // Paid with Credit Card
payment.pay(new PayPal()); // Paid with PayPal
