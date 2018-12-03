[Home](../README.md) / [Lessons](./) / Conditionals

# Conditionals

<p align="center">
<img width="640" alt="JavaScript-logo" src="https://j.gifs.com/pQE522.gif">
</p>

**Conditionals** control behavior in JavaScript and determine whether or not pieces of code can run.

## if
The most common type of conditional is the `if` statement, which only runs if the condition enclosed in parentheses `()` is truthy.

An if statement looks like this:

EXAMPLE
```javascript
if (10 > 5) {
      var outcome = "10 is greater than 5. This is assigned inside the if block";
}
​
alert(outcome);
```
OUTPUT
```javascript
"10 is greater than 5. This is assigned inside the if block"
```

Here’s what’s happening in the example above
- The keyword `if` tells JavaScript to start the conditional statement.
- `(10 > 5)` is the condition to test, which in this case is true — 10 is greater than 5. the `>` is the greater than operator
- The part contained inside curly braces `{}` is the block of code to run.

Because the condition passes, the variable outcome is assigned the value `"10 is greater than 5. This is assigned inside the if block"`.

**Tip**: More information on operators can be found [here](https://www.javascript.com/learn/operators).

## else

You can extend an `if` statement with an `else` statement, which adds another block to run when the `if` conditional doesn’t pass.

EXAMPLE
```javascript
if ("cat" === "dog") {
      var outcome = "Yes, cat is indeed a dog in steroids";
} else {
      var outcome = "Nope. Just nope.";
}
alert(outcome);
```
OUTPUT
```javascript
"Nope. Just nope."
```

In the example above, `"cat"` and `"dog"` are not equal, so the else block runs and the variable outcome gets the value `"Nope. Just nope."`.

## else if

You can also extend an `if` statement with an `else if` statement, which adds another conditional with its own block.

EXAMPLE
```javascript
if (1 === 2) {
      var outcome = "All numbers are equal.";
} else if (100 === (10 * 10)) {
      var outcome = "Congrats on your PhD in Maths!. You are correct. 100 is equal to 10 * 10";
} else {
      var outcome = "I wont be printed anyway. Sigh!";
}

alert(outcome);
```
OUTPUT
```javascript
"Congrats on your PhD in Maths!. You are correct."
```
You can use multiple `if else` conditionals, but note that the if..else if block runs linearly. JavaScript skips any remaining conditionals after the first one that passes.

EXAMPLE
```javascript
if (false) {
      var outcome = "I am always false. Go away.";
} else if (true) {
      var outcome = "Guess who is displayed? Meeeee";
} else if (true) {
      var outcome = "This wont be printed";
} else {
      var outcome = "Why do I exist???";
}
​
alert(outcome);
```

OUTPUT
```javascript
"Guess who is displayed? Meeeee"
```

An `else if` statement doesn’t need a following `else` statement to work. If none of the `if` or `else if` conditions pass, then JavaScript moves forward and doesn’t run any of the conditional blocks of code.

EXAMPLE
```javascript
if (false) {
      var outcome = "if block";
} else if (false) {
      var outcome = "else if block";
}
​
alert(outcome);
```

OUTPUT
```javascript
undefined
```

Reference: [https://www.javascript.com/learn/conditionals](https://www.javascript.com/learn/conditionals){:target="_blank"}

---

<div style="overflow:auto">

<div style="float: left">

<i>Previous: <a href="./2Functions.md">Functions</a></i>

</div>

<div style="float: right">

<i>Next: <a href="./4Loops.md">Loops</a></i>

</div>
</div>
