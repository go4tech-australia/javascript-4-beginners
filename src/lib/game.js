var GAME = {
	isSnake: false,
	isApple: false,
	canvasWidth: 400,
	canvasHeight: 400,
	pixelSize: 20,
	KEY_MAPPING: {
		39: 'right',
		40: 'down',
		37: 'left',
		38: 'up'
	},
	started: true,
	attrs: {
		boundaries: {
			pixels: []
		}
	},
	gameHeight: function() {
		return this.attrs.gameHeight || (this.attrs.gameHeight = this.canvasHeight / this.pixelSize);
	},
	gameWidth: function() {
		return this.attrs.gameWidth || (this.attrs.gameWidth = this.canvasWidth / this.pixelSize);
	},
	canvas: function() {
		if (GAME.context) {
			return GAME.context;
		}
		var canvas = document.getElementById('GAME-game');
		GAME.context = canvas.getContext('2d');
		return GAME.context;
	},
	executeNTimesPerSecond: function(game, gameSpeed) {
		GAME.move(game);
		GAME.processID = setInterval(function() {
			GAME.move(game);
		}, 1000 / gameSpeed);
	},
	onArrowKey: function(callback) {
		document.addEventListener('keydown', function(e) {
			if (GAME.KEY_MAPPING[e.which]) {
				e.preventDefault();
				callback(GAME.KEY_MAPPING[e.which]);
			}
		});
	},
	endGame: function() {
		this.started = false;
		clearInterval(GAME.processID);
	},
	render: function(objects) {
		if (this.started) {
			GAME.clear();
			GAME.drawObjects(objects);
		}
	},
	draw: function(GAME, apple) {
		if (apple) {
			GAME.isSnake = true;
			GAME.isApple = true;
		} else if (GAME) {
			GAME.isSnake = true;
		}
		GAME.drawStuff(GAME, apple);
	},
	clear: function() {
		GAME.canvas().clearRect(0, 0, GAME.canvasWidth, GAME.canvasHeight);
	},
	drawObjects: function(objects) {
		var ui = this;
		objects.forEach(function(object) {
			object.pixels.forEach(function(pixel) {
				ui.drawPixel(object.color, pixel);
			});
		});
	},
	drawPixel: function(color, pixel) {
		GAME.canvas().fillStyle = color;
		var translatedPixel = GAME.translatePixel(pixel);
		GAME.context.fillRect(translatedPixel.left, translatedPixel.top, GAME.pixelSize, GAME.pixelSize);
	},
	translatePixel: function(pixel) {
		return { left: pixel.left * GAME.pixelSize, top: pixel.top * GAME.pixelSize };
	},
	gameBoundaries: function() {
		if (this.attrs.boundaries.pixels.length) {
			return this.attrs.boundaries;
		}
		this.attrs.boundaries.pixels = [];
		for (var top = -1; top <= GAME.gameHeight(); top++) {
			this.attrs.boundaries.pixels.push({ top: top, left: -1 });
			this.attrs.boundaries.pixels.push({ top: top, left: this.gameWidth() + 1 });
		}
		for (var left = -1; left <= GAME.gameWidth(); left++) {
			this.attrs.boundaries.pixels.push({ top: -1, left: left });
			this.attrs.boundaries.pixels.push({ top: this.gameHeight() + 1, left: left });
		}
		return this.attrs.boundaries;
	},
	detectCollisionBetween: function(objectA, objectB) {
		return objectA.pixels.some(function(pixelA) {
			return objectB.pixels.some(function(pixelB) {
				return pixelB.top === pixelA.top && pixelB.left === pixelA.left;
			});
		});
	},
	randomLocation: function() {
		return [
			{
				top: Math.floor(Math.random() * GAME.gameHeight()),
				left: Math.floor(Math.random() * GAME.gameWidth())
			}
		];
	},
	flashMessage: function(message) {
		var canvas = document.getElementById('GAME-game');
		var context = canvas.getContext('2d');
		context.font = '20pt Calibri';
		context.fillStyle = 'yellow';
		context.fillText(message, 75, 100);
	},
	drawStuff: function(snakeToDraw, appleToDraw) {
		var drawableObjects = [];

		if (GAME.isApple) {
			drawableObjects = [snakeToDraw, appleToDraw];
		} else if (GAME.isSnake) {
			drawableObjects = [snakeToDraw];
		}
		GAME.render(drawableObjects);
	},
	segmentFurtherForwardThan: function(index, GAME) {
		if (GAME[index - 1] === undefined) {
			return GAME[index];
		} else {
			return GAME[index - 1];
		}
	},
	moveSnake: function(GAME) {
		return GAME.map(function(oldSegment, segmentIndex) {
			var newSegment = GAME.moveSegment(oldSegment);
			newSegment.direction = GAME.segmentFurtherForwardThan(segmentIndex, GAME).direction;
			return newSegment;
		});
	},
	setDirectionForSnake: function(direction) {
		GAME.pixels[0].direction = direction ? direction : 'down';
	},
	moveSegment: function(segment) {
		switch (segment.direction) {
			case 'down':
				return { top: segment.top + 1, left: segment.left };
			case 'up':
				return { top: segment.top - 1, left: segment.left };
			case 'right':
				return { top: segment.top, left: segment.left + 1 };
			case 'left':
				return { top: segment.top, left: segment.left - 1 };
			default:
				return segment;
		}
	},
	loop: function(tickCallback, gameSpeed) {
		GAME.executeNTimesPerSecond(tickCallback, gameSpeed ? gameSpeed : 1);
	},
	move: function(game) {
		GAME.pixels = GAME.moveSnake(GAME.pixels);

		if (GAME.detectCollisionBetween(GAME, GAME.gameBoundaries())) {
			GAME.endGame();
			GAME.flashMessage('Woops! you hit a wall!');
		}

		if (game) {
			game();
		}

		if (typeof apple !== 'undefined') {
			GAME.drawStuff(GAME, apple);
		} else {
			GAME.drawStuff(GAME);
		}
	},
	growSnake: function() {
		var lastSegment = GAME.pixels[GAME.pixels.length - 1];
		GAME.pixels.push({ top: lastSegment.top, left: lastSegment.left });
	},
	createSnake: function(name, colour) {
		if (name) {
			var player = document.getElementById('player');
			player.innerHTML = 'Player 1: ' + name;
		}
		if (colour && typeof colour !== 'string') {
			console.warn('Colour should be a string');
		}

		var s = {
			color: colour ? colour : 'green',
			pixels: [{ top: 1, left: 0, direction: 'down' }, { top: 0, left: 0, direction: 'down' }]
		};

		s.head = function() {
			return { pixels: [s.pixels[0]] };
		},
		s.body = function() {
			var p = s.pixels.slice(1)
			return { pixels: p };
		};

		return s;
	},
	createApple: function() {
		return { color: 'red', pixels: GAME.randomLocation() };
	},
	setAppleInRandomLocation: function() {
		return { color: 'red', pixels: GAME.randomLocation() };
	}
};
