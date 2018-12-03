[Home](../README.md) / [Exercises](./) / Loops

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

# Expected Results

### Exercise 1

```javascript
var counter = 0;

while(counter < 3){
    moveSnake("down");
    counter = counter + 1;
}
```

```javascript
for(var i = 0; i < 3; i++){
    moveSnake("down");
}
```

### Exercise 2

a.
```javascript
GAME.loop(3);
```

b.
```javascript
GAME.onArrowKey(moveSnake)
```

### Exercise 2

```javascript
function gameRules(){
    console.log("Every loop I run");
}
GAME.loop(3, gameRules);
```

---

<div style="overflow:auto">

<div style="float: left">

<i>Previous: <a href="./3Conditionals.md">Conditionals</a></i>

</div>
</div>
