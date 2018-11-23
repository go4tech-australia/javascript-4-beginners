var GAME = GAME.createSnake('Phil');
var apple = GAME.createApple();
var gameSpeed = 3;

var moveSnake = function(direction) {
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

var game = function() {
  
  if (GAME.detectCollisionBetween(GAME.head(), GAME.body())) {
    GAME.endGame();
    GAME.flashMessage("Woops! You ate yourself!");
  }

	if (GAME.detectCollisionBetween(GAME, apple)) {
    GAME.growSnake();
		apple = GAME.setAppleInRandomLocation();
	}
};

GAME.draw(GAME, apple);
GAME.loop(game, gameSpeed);
GAME.onArrowKey(moveSnake);
