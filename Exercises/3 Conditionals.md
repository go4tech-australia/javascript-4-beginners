# Conditionals

In [index.js](../src/index.js):

### Exercise 1

a. Lets expand on the `moveSnake` function. Inside the function add if/else statements to call the `GAME.setDirectionForSnake()` appropriately. Add a case for `"up"`, `"down"`, `"left"` and `"right"`. Also call `GAME.move()` after setting the direction.

EXAMPLE
```javascript
var moveSnake = function(direction){
    if(direction === "down"){
        SNAKE.setDirectionForSnake("down");
    }
    SNAKE.move();
}
```

Now to test if everything is working correctly, open `index.html` in the browser, open the developer console (see instructions below) and call `moveSnake` by passing in a direction of `"up"`, `"down"`, `"left"` or `"right"`. The snake should move.

PRO TIP: In your browser, press `CTRL + SHIFT + I` to open dev tools. Click on the network tab in opened dev tools to see all your console logs, errors and more information.


---
<div style="float: left">

<i>Previous: <a href="./2%20Functions">Functions<i>


</div>

<div style="float: right">

<i>Next: <a href="./4%20Loops">Loops<i>


</div>

