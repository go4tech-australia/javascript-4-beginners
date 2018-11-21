var snake = 'red';
CHUNK.draw(snake);

// var moveSnake = function(direction) {
// 	CHUNK.move(direction);
// };

var moveSnake = function(direction) {
  if (direction === 'down') {
    CHUNK.move('down');
  } else if (direction === 'up') {
    CHUNK.move('up');
  } else if (segment.direction === 'right') {
    CHUNK.move('right');
  } else if (segment.direction === 'left') {
    CHUNK.move('left');
  }	
};



