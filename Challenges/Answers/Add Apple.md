[Home](../../README.md) / [Challenges](../README.md) / [Answers](./) / Variables

# Add Apple

```javascript
var myName = 'Go4Tech';
var snake = GAME.createSnake(myName);
// Add Apple
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
};

// Draw Apple with Snake
GAME.draw(snake, apple);
GAME.loop(gameSpeed, gameRules);
GAME.onArrowKey(moveSnake);

```

---

<div style="overflow:auto">

<div style="float: left">

<i>Previous: <a href="./">Answers</a></i>


</div>