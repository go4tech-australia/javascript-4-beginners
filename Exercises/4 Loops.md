<a href="/javascript-4-beginners/">Home</a> / <a href="/javascript-4-beginners/Exercises/">Exercises</a> / Loops

# Loops

In `src/index.js` complete:

### Exercise 1

Calling `moveSnake` manually becomes tedious. Lets automate it my using a loop. Using a `for` loop to call `moveSnake` three times to move in one direction then with another loop move three times in another direction.

(Optional) Try the same thing but using a `while` loop.

### Exercise 2

a. Loops run really fast. Lets slow it down by using the `GAME.loop()` function, which will run every second. You can increase the speed by passing in a number to `GAME.loop()`.

b. To move the snake while the loop is running pass `moveSnake` to `GAME.onArrowKey()`.

PRO TIP: In your browser, press `CTRL + SHIFT + I` to open dev tools. Click on the network tab in opened dev tools to see all your console logs, errors and more information.

### Exercise 3

In `GAME.loop()` pass a function as the second argument after passing in the speed. This function will called on every loop. Try passing a `console.log`.

---
<div style="float: left">

<i>Previous: <a href="./3%20Conditionals">Conditionals</a><i>

</div>