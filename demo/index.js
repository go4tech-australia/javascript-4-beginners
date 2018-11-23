var snake = SNAKE.createSnake('Phil');
var apple = SNAKE.createApple();
var gameSpeed = 3;

var moveSnake = function(direction) {
	if (direction === 'down') {
		SNAKE.setDirectionForSnake('down');
	} else if (direction === 'up') {
		SNAKE.setDirectionForSnake('up');
	} else if (direction === 'right') {
		SNAKE.setDirectionForSnake('right');
	} else if (direction === 'left') {
		SNAKE.setDirectionForSnake('left');
  }
};

var game = function() {
  
  if (SNAKE.detectCollisionBetween(snake.head(), snake.body())) {
    SNAKE.endGame();
    SNAKE.flashMessage("Woops! You ate yourself!");
  }

	if (SNAKE.detectCollisionBetween(snake, apple)) {
    SNAKE.growSnake();
		apple = SNAKE.setAppleInRandomLocation();
	}
};

SNAKE.draw(snake, apple);
SNAKE.loop(game, gameSpeed);
SNAKE.onArrowKey(moveSnake);
