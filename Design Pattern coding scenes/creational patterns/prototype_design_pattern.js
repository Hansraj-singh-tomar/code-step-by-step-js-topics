// clone => var car1 = Object.create(car); // yha hamane car object ko clone kar liya hai car1 me

// clone
// prototype (set up of rules / clone)
// object(Car)

function CarPrototype(proto) {
    this.proto = proto;
    this.clone = function(){
        const car = new Car();
        car.wheels = proto.wheels;
        car.engines = proto.engines;
        return car;
    }
}

// constructor function 
function Car(wheels, engines) {
    this.wheels = wheels;
    this.engines = engines;
    this.start = function(){
        console.log("Car Started");
    }
    this.break = function(){
        console.log("Car has stopped!");
    }
}

// client
function run() {
    // first car
    const proto = new Car(4, 2); 
    console.log(proto);  // Car {wheels: 4, engines: 2, start: ƒ, break: ƒ}
    console.log(proto.wheels);  // 4

    const prototype = new CarPrototype(proto)
    console.log(prototype);  // CarPrototype {proto: Car, clone: ƒ}

    // copied car
    const car1 = prototype.clone();
    console.log(car1);  // Car {wheels: 4, engines: 2, start: ƒ, break: ƒ}
    car1.start();  // car started
    car1.wheels = 8;
    console.log(car1.wheels); // 8

    const car2 = prototype.clone();
    car2.start();  // car started
    
    const car3 = prototype.clone();
    console.log(car3.wheels);  // 4
}
run();

// yhi chij ham object.create() se karte 