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
    // Detect if the snake head hit the snake tail
	if (GAME.detectCollisionBetween(snake.head(), snake.body())) {
		GAME.endGame('Woops! You ate yourself!');
	}

	if (GAME.detectCollisionBetween(snake, apple)) {
		GAME.growSnake();
		apple = GAME.setAppleInRandomLocation();
	}
};

GAME.draw(snake, apple);
GAME.loop(gameSpeed, gameRules);
GAME.onArrowKey(moveSnake);

```