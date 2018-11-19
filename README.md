# Javascript 4 Beginners

# Table of Conents
- Getting Started
- Basic Programing
  - Variables
  - Functions
  - Lopps
  - If/Else
- Exercises
- Challenges
- Resources

# Getting Started

Install VS Code

Install Google Chrome

# Basic Programming

## Variables
**Variables** are named values and can store any type of JavaScript value.

Here’s how to declare a variable:

EXAMPLE
```javascript
var x = 100;
```

And here’s what’s happening in the example above:

- `var` is the keyword that tells JavaScript you’re declaring a variable.
- `x` is the name of that variable.
- `=` is the operator that tells JavaScript a value is coming up next.
- `100` is the value for the variable to store.
 
### Using variables

After you declare a variable, you can reference it by name elsewhere in your code.

EXAMPLE
```javascript
var x = 100;
x + 102;
```
OUTPUT
```javascript
202
```

You can even use a variable when declaring other variables.

EXAMPLE
```javascript
var x = 100;
var y = x + 102;
y;
```
OUTPUT
```javascript
202
```

### Reassigning variables

You can give an existing variable a new value at any point after it’s declared.

EXAMPLE
```javascript
var weather = "rainy";
​weather = "sunny";
weather;
```
OUTPUT
```javascript
"sunny"
```

### Naming variables

Variable names are pretty flexible as long as you follow a few rules:
- Start them with a letter, underscore _, or dollar sign $.
- After the first letter, you can use numbers, as well as letters, underscores, or dollar signs.
- Don’t use any of JavaScript’s reserved keywords.

With that in mind, here are valid variable names:

EXAMPLE
```javascript
var camelCase = "lowercase word, then uppercase";
var dinner2Go = "pizza";
var I_AM_HUNGRY = true;
var _Hello_ = "what a nice greeting"
var $_$ = "money eyes";
```

And here are some invalid variable names — try to spot what’s wrong with each of them:

EXAMPLE
```javascript
var total% = 78;
var 2fast2catch = "bold claim";
var function = false;
var class = "easy";
```

Variable names are case-sensitive, so myVar, MyVar, and myvar are all different variables. But generally, it’s a good practice to avoid naming variables so similarly.

---

## Functions
**Functions** are blocks of code that can be named and reused.

Here’s how to declare a function:

EXAMPLE
```javascript
function addTwoNumbers(x, y) {
       return x + y;
}
```

There’s a lot going on in the example above, so let’s look at each part individually.
- `function` is the keyword that starts declaring a function.
- `addTwoNumbers` is the function’s name, which is customizable — just like variable names.
- `(x, y)` are parameters, variable names for the inputs a function will accept.
- `return` is the keyword that exits the function and shares an optional value outside.
 
### Using functions

Once a function is defined, you can use it by referencing its name with parentheses `()` right after.

Note that a function doesn’t have to have parameters.

EXAMPLE
```javascript
function greetThePlanet() {
       return "Hello world!";
}
​
greetThePlanet();
```

OUTPUT
```javascript
"Hello world!"
```

If a function _does_ have parameters, you’ll need to provide values inside the parentheses when using the function.

EXAMPLE
```javascript
function square(number) {
       return number * number;
}
​
square(16);
```
OUTPUT
```javascript
256
```