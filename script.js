// 1. Variable declaration errors
let name = "Abhishek";
let age = 20;
let age = 21;

const city = "Delhi";
city = "Noida";

// 2. Undefined variables
console.log(username);
console.log(userAge);

// 3. Data type errors
let num = "100";
let result = num + 50;
console.log(result);

let value = null;
console.log(value.length);

// 4. Function errors
function add(a, b) {
    return a + c;
}

console.log(add(10, 20));

// 5. Incorrect function calling
function greet(name) {
    console.log("Hello " + name);
}

greet();

// 6. Array errors
let numbers = [10, 20, 30, 40];

console.log(numbers[10]);

numbers.push(50);
numbers.pop(100);

console.log(numbers);

// 7. Object errors
let student = {
    name: "Abhishek",
    age: 20,
    course: "BTech"
};

console.log(student.name);
console.log(student.address.city);

// 8. Loop errors
for (let i = 0; i <= 5; i--) {
    console.log(i);
}

// 9. Conditional errors
let marks = 85;

if (marks = 90) {
    console.log("Excellent");
} else {
    console.log("Good");
}

// 10. String errors
let firstName = "Abhishek";
let lastName = "Yadav";

console.log(firstname + lastname);

// 11. Arrow function errors
const multiply = (a, b) => {
    a * b;
};

console.log(multiply(5, 10));

// 12. Promise errors
let promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise.then((data) => {
    console.log(result);
});

// 13. Async/Await errors
async function getData() {
    let response = await fetch("invalid-url");
    let data = response.json();
    console.log(data);
}

getData();

// 14. Scope errors
function test() {
    let x = 100;
}

console.log(x);

// 15. Type conversion errors
let a = "10";
let b = 5;

console.log(a - b);
console.log(a * b);
console.log(a / "hello");

// 16. Comparison errors
console.log(10 == "10");
console.log(10 === "10");
console.log(null == undefined);
console.log(NaN === NaN);

// 17. Logical errors
let x = 10;
let y = 20;

if (x > 5 || y < 10) {
    console.log("Condition true");
}

// 18. Class errors
class Person {
    constructor(name) {
        this.name = name;
    }

    showAge() {
        console.log(this.age);
    }
}

let p = new Person();
p.showAge();

// 19. Destructuring errors
let user = {
    username: "abhi",
    password: "12345"
};

let { name: userName } = user;
console.log(userName);

// 20. Recursive function error
function factorial(n) {
    return n * factorial(n - 1);
}

console.log(factorial(5));