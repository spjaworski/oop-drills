
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

function Person(name, age, city) {
    this.name = name,
    this.city = city,
    this.age = age
}

let exGreeting = (person) => {
    console.log(`Hey! My name is ${person.name}, I am ${person.age} years old and live in ${person.city}.`)
}

const Sarah = new Person("Sarah", 28, "D.C");
const Alice = new Person("Alice", 27, "D.C");
const Ben = new Person("Ben", 25, "Bowie");
const Amanda = new Person("Amanda", 28, "Rockville");
const Dylan = new Person("Dylan", 27, "D.C");

exGreeting(Sarah);

class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}