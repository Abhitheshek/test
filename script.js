// 1. Variable declaration errors
let name = "Abhishek";
let age = 20;
age = 21; // Corrected: Removed redeclaration of 'age' with let

const city = "Delhi";
// city = "Noida"; // Corrected: Removed reassignment of const variable

// 2. Undefined variables
let username = "testUser"; // Corrected: Defined username
let userAge = 30; // Corrected: Defined userAge
console.log(username);
console.log(userAge);

// 3. Data type errors
let num = "100";
let result = parseInt(num) + 50; // Corrected: Converted num to integer
console.log(result);

let value = null;
if (value !== null) { // Corrected: Added null check
    console.log(value.length);
} else {
    console.log("Value is null, cannot get length.");
}

// 4. Function errors
function add(a, b) {
    return a + b; // Corrected: Changed 'c' to 'b'
}

console.log(add(10, 20));

// 5. Incorrect function calling
function greet(name) {
    console.log("Hello " + name);
}

greet("John"); // Corrected: Provided argument for greet function

// 6. Array errors
let numbers = [10, 20, 30, 40];

// console.log(numbers[10]); // Corrected: Removed out-of-bounds access
console.log(numbers[0]); // Example of valid access

numbers.push(50);
numbers.pop(); // Corrected: pop() does not take arguments

console.log(numbers);

// 7. Object errors
let student = {
    name: "Abhishek",
    age: 20,
    course: "BTech",
    address: { // Corrected: Added address object
        city: "Delhi"
    }
};

console.log(student.name);
console.log(student.address.city); // Corrected: Accessing existing property

// 8. Loop errors
for (let i = 0; i <= 5; i++) { // Corrected: Changed i-- to i++
    console.log(i);
}

// 9. Conditional errors
let marks = 85;

if (marks === 90) { // Corrected: Changed assignment to comparison operator
    console.log("Excellent");
} else {
    console.log("Good");
}

// 10. String errors
let firstName = "Abhishek";
let lastName = "Yadav";

console.log(firstName + " " + lastName); // Corrected: Case sensitivity and added space

// 11. Arrow function errors
const multiply = (a, b) => {
    return a * b; // Corrected: Added return statement
};

console.log(multiply(5, 10));

// 12. Promise errors
let promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise.then((data) => {
    console.log(data); // Corrected: Changed 'result' to 'data'
});

// 13. Async/Await errors
async function getData() {
    try {
        let response = await fetch("https://api.github.com/users/octocat"); // Corrected: Valid URL
        let data = await response.json(); // Corrected: Await response.json()
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();

// 14. Scope errors
function test() {
    let x = 100;
    console.log(x); // Corrected: Moved console.log(x) inside the function
}

test(); // Call the function to execute it

// 15. Type conversion errors
let a = "10";
let b = 5;

console.log(a - b);
console.log(a * b);
// console.log(a / "hello"); // Corrected: Removed division by non-numeric string
console.log(a / 2); // Example of valid division

// 16. Comparison errors
console.log(10 == "10");
console.log(10 === "10");
console.log(null == undefined);
console.log(NaN === NaN); // This will still be false, as NaN is never equal to itself

// 17. Logical errors
let x = 10;
let y = 20;

if (x > 5 || y < 10) {
    console.log("Condition true");
}

// 18. Class errors
class Person {
    constructor(name, age) { // Corrected: Added age to constructor
        this.name = name;
        this.age = age;
    }

    showAge() {
        console.log(this.age);
    }
}

let p = new Person("Alice", 30); // Corrected: Provided arguments to constructor
p.showAge();

// 19. Destructuring errors
let user = {
    username: "abhi",
    password: "12345"
};

let { username: userName } = user; // Corrected: Changed 'name' to 'username'
console.log(userName);

// 20. Recursive function error
function factorial(n) {
    if (n === 0) { // Corrected: Added base case
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
