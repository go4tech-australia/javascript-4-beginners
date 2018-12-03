[Home](../README.md) / [Exercises](./) / Functions

# Functions

PRO TIP: In your browser, press `CTRL + SHIFT + I` to open dev tools. Click on the network tab in opened dev tools to see all your console logs, errors and more information.

In `src/index.js` complete:

### Exercise 1

Create a function called `sayMyName` which has `name` as a parameter and returns "Hello " + `name`. Pass in your variable `myName`. You can display the value by using the `alert()` function.

EXAMPLE
```javascript
sayMyName("Go4Tech");
```

OUTPUT
```javascript
"Hello Go4Tech"
```

**HINT:**
Adding words together is very similar to adding numbers. Adding words together is called [concatenation](http://2ality.com/2011/10/string-concatenation.html).

### Exercise 2


a. Create another variable `snake` and assign it the return value of `GAME.createSnake()`.

b.  `GAME.createSnake()` takes two arguments, the first being a name and the second a color. Try passing the variable `name` as the first argument to `GAME.createSnake()`. Now try passing a colour as the second argument.

c. Now that you have created your snake, it is time to draw it on the screen. To do that just type in `GAME.draw(snake)` where `snake` is the variable you just created.

Open index.html. You should see your snake drawn on the screen.

Experimentation time:
1 What would happen if you did not type in `GAME.draw(snake)` and open `index.html`?
2 Can you `createSnake()` without specifying any color? Try running it without color argument and see what happens!


### Exercise 3

a. Create a function called `moveSnake` which takes `direction` as a argument. Inside this function call `GAME.setDirectionForSnake()`, which takes your direction as a argument.

b. You may have notice your snake still doesn't move. After `GAME.setDirectionForSnake()` call `GAME.move()`. Your snake should now be in a different position.

Keep calling `moveSnake` to have your snake move further.

PRO TIP: Your function does not return anything. A function that does not return anything is called a `void` function. See the [GAME](../lib/documentation.md) documentation for more detail.

---

# Expected Results

### Exercise 1

```javascript
var myName = 'Go4Tech';

function sayMyName(name) {
    return "Hello " + name;
}
sayMyName(myName);
```

### Exercise 2

a.

```javascript
var snake = GAME.createSnake();
```

b.

```javascript
var snake = GAME.createSnake(myName, "green");
```

```javascript
var snake = GAME.createSnake(myName, "green");
GAME.draw(snake);
```

### Exercise 3

a.

```javascript
function moveSnake(direction){
    GAME.setDirectionForSnake(direction);
}
```

b.

```javascript
function moveSnake(direction){
    GAME.setDirectionForSnake(direction);
    GAME.move();
}

moveSnake('right');
moveSnake('down');
```

---

<div style="overflow:auto">

<div style="float: left">

<i>Previous: <a href="./1 Variables.md">Variables</a></i>

</div>

<div style="float: right">

<i>Next: <a href="./3 Conditionals.md">Conditionals</a></i>


</div>
</div>
