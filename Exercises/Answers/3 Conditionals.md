[Home](../../README.md) / [Exercises](../README.md) / [Answers](./) / Conditionals

# Conditionals

### Exercise 1

a.

```javascript
var moveSnake = function(direction) {
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