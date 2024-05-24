// From chat gpt

// The Builder pattern is a creational design pattern that allows you to construct complex objects step by step.It separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

// In JavaScript, the Builder pattern can be implemented using classes or functions.Below is an example of how to implement the Builder pattern using ES6 classes:

/// ----------------------- using class ----------------------------------------

class Car {
    constructor() {
        this.make = '';
        this.model = '';
        this.year = 0;
        this.color = '';
        this.engine = '';
    }

    // Optional: Method to display car details
    display() {
        console.log(`Car Details:
    Make: ${this.make}
    Model: ${this.model}
    Year: ${this.year}
    Color: ${this.color}
    Engine: ${this.engine}`);
    }
}


class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    setMake(make) {
        this.car.make = make;
        return this; // Return the builder object for method chaining
    }

    setModel(model) {
        this.car.model = model;
        return this; // Return the builder object for method chaining
    }

    setYear(year) {
        this.car.year = year;
        return this; // Return the builder object for method chaining
    }

    setColor(color) {
        this.car.color = color;
        return this; // Return the builder object for method chaining
    }

    setEngine(engine) {
        this.car.engine = engine;
        return this; // Return the builder object for method chaining
    }

    build() {
        return this.car; // Return the fully constructed car object
    }
}


const carBuilder = new CarBuilder();
const myCar = carBuilder
    .setMake('Toyota')
    .setModel('Corolla')
    .setYear(2022)
    .setColor('Blue')
    .setEngine('V6')
    .build();

myCar.display();


// ------------------------------ using Function -------------------------------------

function Car(make, model, year, color, engine) {
    this.make = make || '';
    this.model = model || '';
    this.year = year || 0;
    this.color = color || '';
    this.engine = engine || '';
}

// Optional: Method to display car details
Car.prototype.display = function () {
    console.log(`Car Details:
    Make: ${this.make}
    Model: ${this.model}
    Year: ${this.year}
    Color: ${this.color}
    Engine: ${this.engine}`);
};



function CarBuilder() {
    let make = '';
    let model = '';
    let year = 0;
    let color = '';
    let engine = '';

    return {
        setMake: function (m) {
            make = m;
            return this; // Return the builder object for method chaining
        },
        setModel: function (m) {
            model = m;
            return this; // Return the builder object for method chaining
        },
        setYear: function (y) {
            year = y;
            return this; // Return the builder object for method chaining
        },
        setColor: function (c) {
            color = c;
            return this; // Return the builder object for method chaining
        },
        setEngine: function (e) {
            engine = e;
            return this; // Return the builder object for method chaining
        },
        build: function () {
            return new Car(make, model, year, color, engine); // Return the fully constructed car object
        }
    };
}


const carBuilder = CarBuilder();
const myCar = carBuilder
    .setMake('Toyota')
    .setModel('Corolla')
    .setYear(2022)
    .setColor('Blue')
    .setEngine('V6')
    .build();

myCar.display();
