[Home](../../README.md) / [Challenges](../README.md) / [Answers](./) / Variables

# Grow Snake

```javascript
var myName = 'Go4Tech';
var snake = GAME.createSnake(myName);
var apple = GAME.createApple();
var gameSpeed = 3;

function moveSnake(direction) {
	if (direction === 'down') {
		GAME.setDirectionForSnake('down');
	} else if (direction === 'up') {
		GAME.setDirectionForSnake('up');
	} else if (direction === 'right') {
		GAME.setDirectionForSnake('right');
	} else if (direction === 'left') {
		GAME.setDirectionForSnake('left');
	}
};

function gameRules() {
    // Detect if the snake ate an apple
	if (GAME.detectCollisionBetween(snake, apple)) {
        // If true, then grow the snake
        GAME.growSnake();
        // Set a new location for the apple
		apple = GAME.setAppleInRandomLocation();
	}
};

GAME.draw(snake, apple);
GAME.loop(gameRules, gameSpeed);
GAME.onArrowKey(moveSnake);

```

---

<div style="overflow:auto">

<div style="float: left">

<i>Previous: <a href="./">Answers</a></i>


</div>