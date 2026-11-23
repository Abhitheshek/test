# Converted Python version of the original JavaScript examples

# 1. Variable declaration errors
name = "Abhishek"
age = 20
age = 21  # Reassignment is allowed in Python

city = "Delhi"
# city = "Noida"  # Reassignment is allowed, but keeping original value

# 2. Undefined variables
username = "testUser"
user_age = 30
print(username)
print(user_age)

# 3. Data type errors
num = "100"
result = int(num) + 50
print(result)

value = None
if value is not None:
    print(len(value))
else:
    print("Value is null, cannot get length.")

# 4. Function errors
def add(a, b):
    return a + b

print(add(10, 20))

# 5. Incorrect function calling
def greet(name):
    print("Hello " + name)

greet("John")

# 6. Array errors
numbers = [10, 20, 30, 40]
# print(numbers[10])  # Out-of-bounds would raise IndexError
print(numbers[0])

numbers.append(50)
numbers.pop()  # pop() removes last element
print(numbers)

# 7. Object errors
student = {
    "name": "Abhishek",
    "age": 20,
    "course": "BTech",
    "address": {
        "city": "Delhi"
    }
}
print(student["name"])
print(student["address"]["city"])

# 8. Loop errors
for i in range(0, 6):  # 0 to 5 inclusive
    print(i)

# 9. Conditional errors
marks = 85
if marks == 90:
    print("Excellent")
else:
    print("Good")

# 10. String errors
first_name = "Abhishek"
last_name = "Yadav"
print(first_name + " " + last_name)

# 11. Arrow function errors (using lambda)
multiply = lambda a, b: a * b
print(multiply(5, 10))

# 12. Promise errors (simulated with a simple function)
def simple_promise():
    return "Success"

promise_result = simple_promise()
print(promise_result)

# 13. Async/Await errors (using requests for simplicity)
import requests

def get_data():
    try:
        response = requests.get("https://api.github.com/users/octocat")
        data = response.json()
        print(data)
    except Exception as error:
        print("Error fetching data:", error)

get_data()

# 14. Scope errors
def test():
    x = 100
    print(x)

test()

# 15. Type conversion errors
a = "10"
b = 5
print(int(a) - b)
print(int(a) * b)
# print(a / "hello")  # Invalid operation
print(int(a) / 2)

# 16. Comparison errors
print(10 == "10")  # False, different types
print(10 == int("10"))  # True after conversion
print(None == None)  # True
print(float('nan') == float('nan'))  # False

# 17. Logical errors
x = 10
y = 20
if x > 5 or y < 10:
    print("Condition true")

# 18. Class errors
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def show_age(self):
        print(self.age)

p = Person("Alice", 30)
p.show_age()

# 19. Destructuring errors
user = {
    "username": "abhi",
    "password": "12345"
}
user_name = user["username"]
print(user_name)

# 20. Recursive function error

def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

print(factorial(5))
