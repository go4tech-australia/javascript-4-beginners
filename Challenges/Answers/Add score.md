[Home](../../README.md) / [Challenges](../README.md) / [Answers](./) / Variables

# Add Score

```javascript
var myName = 'Go4Tech';
var snake = GAME.createSnake(myName);
var apple = GAME.createApple();
var gameSpeed = 3;
// Add score variable
var score = 0;

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
	if (GAME.detectCollisionBetween(snake.head(), snake.body())) {
		GAME.endGame('Woops! You ate yourself!');
	}

	if (GAME.detectCollisionBetween(snake, apple)) {
		GAME.growSnake();
		apple = GAME.setAppleInRandomLocation();

		gameSpeed = gameSpeed + 1;
		GAME.increaseGameSpeed(gameSpeed)

        // Add 10 to the score
        score = score + 10;
        // Output score to console
		console.log(myName, 'Score: ', score);
	}
};

GAME.draw(snake, apple);
GAME.loop(gameSpeed, gameRules);
GAME.onArrowKey(moveSnake);


```