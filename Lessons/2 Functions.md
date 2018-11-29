<a href="/javascript-4-beginners/">Home</a> / <a href="/javascript-4-beginners/Lessons/">Lessons</a> / Functions

# Functions
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
 
## Using functions

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

Reference: [https://www.javascript.com/learn/functions](https://www.javascript.com/learn/functions){:target="_blank"}

---
<div style="float: left">

<i>Previous: <a href="./1%20Variables">Variables</a></i>


</div>

<div style="float: right">

<i>Next: <a href="./3%20Conditionals">Conditionals</a></i>

</div>
