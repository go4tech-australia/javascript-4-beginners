[Home](../README.md) / [Lessons](./) / Variables

# Variables

<p align="center">
<img width="640" alt="JavaScript-logo" src="https://j.gifs.com/W7ZNBX.gif">
</p>

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
 
## Using variables

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

## Reassigning variables

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

## Naming variables

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

Reference: [https://www.javascript.com/learn/variables](https://www.javascript.com/learn/variables){:target="_blank"}

---
<div style="overflow:auto">
<div style="float: left">

<i>Previous: <a href="./">Lessons</a></i>

</div>

<div style="float: right">

<i>Next: <a href="./2 Functions.md">Functions</a></i>

</div>
</div>
