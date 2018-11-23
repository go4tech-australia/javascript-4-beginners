var myName = "Go4Tech";
var snake = GAME.createSnake(myName);
var apple = GAME.createApple();
var gameSpeed = 3;

var moveSnake = function(direction) {
	if (direction === "down") {
		GAME.setDirectionForSnake("down");
	} else if (direction === "up") {
		GAME.setDirectionForSnake("up");
	} else if (direction === "right") {
		GAME.setDirectionForSnake("right");
	} else if (direction === "left") {
		GAME.setDirectionForSnake("left");
  }
};

var gameRules = function() {
  
  if (GAME.detectCollisionBetween(snake.head(), snake.body())) {
    GAME.endGame();
    GAME.flashMessage("Woops! You ate yourself!");
  }

	if (GAME.detectCollisionBetween(snake, apple)) {
    GAME.growSnake();
		apple = GAME.setAppleInRandomLocation();
	}
};

GAME.draw(snake, apple);
GAME.loop(gameRules, gameSpeed);
GAME.onArrowKey(moveSnake);
