[Home](../README.md) / [Exercises](./) / Conditionals

# Conditionals

In `src/index.js` complete:

### Exercise 1

a. Lets expand on the `moveSnake` function. Inside the function add if/else statements to call the `GAME.setDirectionForSnake()` appropriately. Add a case for `"up"`, `"down"`, `"left"` and `"right"`. Also call `GAME.move()` after setting the direction.

EXAMPLE
```javascript
function moveSnake(direction){
    if(direction === "down"){
        GAME.setDirectionForSnake("down");
    }
    GAME.move();
}
```

**TIP**: `===` is the 'is equal to' operator. More information on operators can be found [here](https://www.javascript.com/learn/operators).

Now to test if everything is working correctly, open `index.html` in the browser, open the developer console (see instructions below) and call `moveSnake` by passing in a direction of `"up"`, `"down"`, `"left"` or `"right"`. The snake should move.

**PRO TIP**: In your browser, press `CTRL + SHIFT + I` to open dev tools. Click on the network tab in opened dev tools to see all your console logs, errors and more information.


---

# Expected Results

### Exercise 1

a.

```javascript
function moveSnake(direction) {
	if (direction === 'down') {
		GAME.setDirectionForSnake('down');
	} else if (direction === 'up') {
		GAME.setDirectionForSnake('up');
	} else if (direction === 'right') {
		GAME.setDirectionForSnake('right');
	} else if (direction === 'left') {
		GAME.setDirectionForSnake('left');
	} else {
		alert('Congrats! You found a new direction. Sadly the snake can only understand 2d. Try again within that boundaries...');
	}
	GAME.move();
};

moveSnake('right');
moveSnake('right');
moveSnake('down');
moveSnake('lololol');
moveSnake('right');
moveSnake('right');
moveSnake('down');
```

---

<div style="overflow:auto">

<div style="float: left">

<i>Previous: <a href="./2 Functions.md">Functions</a></i>


</div>

<div style="float: right">

<i>Next: <a href="./4 Loops.md">Loops</a></i>


</div>
</div>


