// Encapsulation in js
// class Employee {
//     #employee_salary;
//     constructor(employee_id, employee_name, employee_designation, employee_salary, employee_pin) {
//         this.employee_id = employee_id
//         this.employee_name = employee_name
//         this.employee_designation = employee_designation
//         this.#employee_salary = employee_salary   // private property
//         this._employee_pin = employee_pin   // protected property

//     }
//     getSalary() {
//         return this.#employee_salary;
//     }
//     setSalary(employee_salary) {
//         this.#employee_salary = employee_salary;
//     }
//     getPin() {
//         return this._employee_pin;
//         }
//     setPin(employee_pin) {
//         this._employee_pin = employee_pin
//     }
// }
// e1 = new Employee(101, "John", "Manager", 70000, '1012')
// console.log(e1.employee_id, e1.employee_name, e1.employee_designation, e1.getSalary(), e1.getPin())
// e1.setPin('1011')
// console.log(e1.employee_id, e1.employee_name, e1.employee_designation, e1.getSalary(), e1.getPin())



// Inheritance: one class or object can inherit properties and methods from another class, allowing code reuse
// Parent class or Base class or Super class
class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}
// Child Class or Derived class or Sub Class
class Employee extends Person {
    constructor(name, jobTitle) {
        super(name)
        this.jobTitle = jobTitle
    }
    introduce() {
        console.log(`I am a ${this.jobTitle}`)

    }
    
}
let e1 = new Employee("Mark", "Web Developer")
e1.greet()
e1.introduce()





// Abstraction means hiding the complex detsils and only showing the essential features.
// an abstract method is one that is declared in base class but does not implemented in derived class

class Animal {
    makeSound() {
        throw new Error("makeSound must be implemented in sub class")

    }
}
class Dog extends Animal {
    makeSound() {
        console.log('bark')
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('Meow')

    }
}
const dog = new Dog()
dog.makeSound()


const cat = new Cat()
cat.makeSound()




// Polymorphism: many forms
class Calculator {
    sum(a, b) {
        console.log("Default sum method")
    }
}
class IntegerSum extends Calculator  {
    sum(a, b) {
        return parseInt(a) + parseInt(b)
    }
}
class FloatSum extends Calculator {
    sum(a, b) {
        return parseFloat(a) + parseFloat(b)
    }
}
class StringSum extends Calculator {
    sum(a, b) {
        return String(a) + String(b)
    }
}

const Calculators = [
    new IntegerSum,
    new FloatSum,
    new StringSum
]

console.log(Calculators[0].sum(1,2))
console.log(Calculators[1].sum(1.1, 2.3))
console.log(Calculators[2].sum('1', '2'))

const calc =  new Calculator(1, 3)
console.log(calc.sum(1, 4))




// Rest operator: Collects multiple values in a single variable
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 2)); // 10



// Rest operator is deStructuring


let  [first, ...rest] = [10, 20, 30, 40];
console.log(first)
console.log(...rest)






// Spread Operator: Expands an array into an individual elements
// Useful when passing arguments, or copying merging arrays or objects
// Example with arrays:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]
console.log(combined)

// Example with objects
let obj1 = {a : 1, b : 2};
let obj2 = {c : 3};
let merged = {...obj1, ...obj2}
console.log(merged)

// Example with function
function add(a, b, c) {
    return a + b + c
}
let nums = [1, 2, 3];
console.log(add(...nums));






