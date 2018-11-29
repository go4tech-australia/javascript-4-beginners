<a href="/javascript-4-beginners/">Home</a> / <a href="/javascript-4-beginners/Lessons/">Lessons</a> / Loops

# Loops

**Loops** offer a quick and easy way to do something repeatedly.

You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction then Y steps in another; for example, the idea "Go five steps to the east" could be expressed this way as a loop:

```javascript
var step;
for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4
  console.log('Walking east step number:' + step);
}
```

There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times (and it's actually possible that number could be zero).

The statements for loops provided in JavaScript are:

- for statement
- do...while statement
- while statement
- for...in statement
- for...of statement

Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration){:target="_blank"}

---
<div style="float: left">

<i>Previous: <a href="./3%20Conditionals">Conditionals</a><i>

</div>