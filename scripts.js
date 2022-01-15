
class Person {
    constructor(name, age, city) {
        this.name = name,
        this.city = city,
        this.age = age
    }
}


const person1 = {
    name: "Sarah",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

const person2 = {
    name: "Alice",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

const person3 = {
    name: "Ben",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

const person4 = {
    name: "Amanda",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

const person5 = {
    name: "Dylan",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

person1.sayHello();

//function Person(name, age, city) {
  //  this.name = name,
    //this.city = city,
    //this.age = age
//}

let exGreeting = (person) => {
    console.log(`Hey! My name is ${person.name}, I am ${person.age} years old and live in ${person.city}.`)
}

const Sarah = new Person("Sarah", 28, "D.C");
const Alice = new Person("Alice", 27, "D.C");
const Ben = new Person("Ben", 25, "Bowie");
const Amanda = new Person("Amanda", 28, "Rockville");
const Dylan = new Person("Dylan", 27, "D.C");

exGreeting(Sarah);




class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer,
        this.wheels = wheels
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${vehicleType} made by ${manufacturer}, and has ${wheels} wheels.`)
    }
}

class Truck extends Vehicle {
    constructor(doorNum, hasBed) {
        this.doorNum = doorNum,
        this.hasBed = true;
    }
    aboutVehicle() {
        console.log(`This vehicle is a truck made by ${manufacturer}. It has ${doorNum} doors and ${wheels} wheels.`)
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, wheels, size, mpg) {
        super(manufacturer, wheels),
        this.size = size,
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This vehicle is a sedan made by ${this.manufacturer}. It is a ${this.size} size, and gets ${this.mpg} miles to the gallon.`)
    }
}

class Motorcycles extends Vehicle {
    constructor(hasHandlebars, hasDoors) {
        this.hasHandlebars = true,
        this.hasDoors = false;
    }
    aboutVehicle() {
        console.log(`This vehicle is a motercycle made by ${manufacturer}, so it has handlebars and no doors.`)
    }
}

const myCar = new Sedan("Mazda", 4, "medium", 18);

console.log(myCar)

myCar.aboutVehicle();