[Home](../../README.md) / [Exercises](../README.md) / [Answers](./) / Functions

# Functions

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

<i>Previous: <a href="./">Answers</a></i>


</div>